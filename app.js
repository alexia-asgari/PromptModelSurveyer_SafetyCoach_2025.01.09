// app.js
(function () {
  "use strict";

  let draggedCard = null;

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  function clampText(s, n) {
    if (!s) return "";
    const t = s.replace(/\s+/g, " ").trim();
    return t.length > n ? t.slice(0, n - 1) + "…" : t;
  }

  function normalizeSurveyData(raw) {
    // Supports either:
    // 1) window.SURVEY_DATA = { surveyId, surveyTitle, intro, questions: [...] }
    // 2) window.SURVEY_DATA = [ ...questions ]  (legacy)
    if (Array.isArray(raw)) {
      return { surveyId: "PromptTest", surveyTitle: "Prompt Response Ranking", intro: "", questions: raw };
    }
    if (raw && Array.isArray(raw.questions)) return raw;
    throw new Error("Invalid SURVEY_DATA format. Expected {questions:[...]} or an array of questions.");
  }

  function ensureBlocks(question) {
    // Normalize prompt:
    // - promptBlocks preferred
    // - fallback to promptText/promptImage if present
    if (!Array.isArray(question.promptBlocks)) {
      const blocks = [];
      if (typeof question.promptText === "string" && question.promptText.trim()) {
        blocks.push({ type: "text", value: question.promptText });
      }
      if (typeof question.promptImage === "string" && question.promptImage.trim()) {
        blocks.push({ type: "image", src: question.promptImage, alt: question.title ? `${question.title} image` : "Prompt image" });
      }
      question.promptBlocks = blocks;
    }

    // Normalize responses:
    question.responses = question.responses || [];
    question.responses.forEach((r) => {
      if (!Array.isArray(r.contentBlocks)) {
        const blocks = [];
        if (typeof r.fullText === "string" && r.fullText.trim()) {
          blocks.push({ type: "text", value: r.fullText });
        }
        if (typeof r.image === "string" && r.image.trim()) {
          blocks.push({ type: "image", src: r.image, alt: `${r.shortLabel || r.id} image` });
        }
        r.contentBlocks = blocks;
      }
    });

    return question;
  }

  function blocksToText(blocks) {
    if (!Array.isArray(blocks)) return "";
    return blocks
      .filter((b) => b && b.type === "text" && typeof b.value === "string")
      .map((b) => b.value)
      .join("\n\n");
  }

  function firstImageSrc(blocks) {
    if (!Array.isArray(blocks)) return null;
    const img = blocks.find((b) => b && b.type === "image" && typeof b.src === "string" && b.src.trim());
    return img ? img.src : null;
  }

  function renderBlocks(container, blocks) {
    container.innerHTML = "";
    (blocks || []).forEach((b) => {
      if (!b || !b.type) return;
      if (b.type === "text") {
        const p = document.createElement("p");
        p.textContent = b.value || "";
        container.appendChild(p);
      } else if (b.type === "image") {
        const img = document.createElement("img");
        img.src = b.src;
        img.alt = b.alt || "image";
        img.loading = "lazy";
        img.addEventListener("click", () => openLightbox(img.src, img.alt));
        container.appendChild(img);
      }
    });
  }

  // Elements
  const nameGate = $("#nameGate");
  const nameInput = $("#nameInput");
  const startBtn = $("#startBtn");

  const app = $("#app");
  const heading = $("#heading");
  const qIndexEl = $("#qIndex");
  const qTotalEl = $("#qTotal");

  const prevBtn = $("#prevBtn");
  const nextBtn = $("#nextBtn");
  const nextBtnBottom = $("#nextBtnBottom");
  const resetBtn = $("#resetBtn");
  const submitBtn = $("#submitBtn");

  const promptContent = $("#promptContent");
  const responseBank = $("#responseBank");
  const commentInput = $("#commentInput");
  const statusEl = $("#status");

  const modalOverlay = $("#modalOverlay");
  const modalClose = $("#modalClose");
  const modalTitle = $("#modalTitle");
  const modalPromptContent = $("#modalPromptContent");
  const modalResponseContent = $("#modalResponseContent");

  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightboxImg");
  const lightboxClose = $("#lightboxClose");

  // State
  let survey = null;
  let participantName = "";
  let qIndex = 0;

  // answers[questionId] = { rank1:"A", rank2:"B", ... } etc
  const answers = {};
  const startedAt = new Date().toISOString();

  function getCurrentQuestion() {
    return survey.questions[qIndex];
  }

  function setStatus(msg, isError = false) {
    statusEl.textContent = msg || "";
    statusEl.style.color = isError ? "var(--danger)" : "var(--muted)";
  }

  function enterApp() {
    nameGate.classList.add("hidden");
    nameGate.setAttribute("aria-hidden", "true");
    app.classList.remove("hidden");
    app.setAttribute("aria-hidden", "false");
    renderQuestion();
  }

  function ensureAnswerSlot(questionId) {
    if (!answers[questionId]) {
      answers[questionId] = { ranks: { 1: null, 2: null, 3: null, 4: null } };
    }
    return answers[questionId];
  }

  function renderQuestion() {
    const q = ensureBlocks(getCurrentQuestion());
    const total = survey.questions.length;

    qIndexEl.textContent = String(qIndex + 1);
    qTotalEl.textContent = String(total);

    const headingTpl = q.questionHeadingTemplate || `Hi {name} — Question ${qIndex + 1} of ${total}`;
    heading.textContent = headingTpl.replace("{name}", participantName);

    renderBlocks(promptContent, q.promptBlocks);

    // Build bank cards
    responseBank.innerHTML = "";
    const cardOrder = q.responses.map((r) => r.id);

    // Ensure answer state exists
    const ans = ensureAnswerSlot(q.id);

    // Comments
    if (commentInput) {
      commentInput.value = ans.comment || "";
      commentInput.dataset.questionId = String(q.id);
    }

    // Clear timeline slots
    $$(".slot-drop").forEach((slot) => {
      slot.innerHTML = "";
      slot.classList.remove("over");
    });

    // Place already-ranked items into slots (if any)
    Object.entries(ans.ranks).forEach(([rank, rid]) => {
      if (!rid) return;
      const r = q.responses.find((x) => x.id === rid);
      if (!r) return;
      const slot = document.querySelector(`.slot-drop[data-rank="${rank}"]`);
      if (slot) slot.appendChild(makeCard(q, r, true));
    });

    // Remaining go to bank
    const ranked = new Set(Object.values(ans.ranks).filter(Boolean));
    cardOrder
      .filter((rid) => !ranked.has(rid))
      .forEach((rid) => {
        const r = q.responses.find((x) => x.id === rid);
        responseBank.appendChild(makeCard(q, r, false));
      });

    // Buttons
    prevBtn.disabled = qIndex === 0;
    nextBtn.disabled = qIndex >= total - 1;
    if (nextBtnBottom) nextBtnBottom.disabled = qIndex >= total - 1;
    submitBtn.disabled = qIndex < total - 1; // submit on last question

    setStatus("Drag all four responses onto the timeline to proceed.", false);

    attachDnDHandlers(q);
    attachBankDnDHandlers(q);
  }

  function makeCard(question, response, inTimeline) {
    const el = document.createElement("div");
    el.className = "card";
    el.setAttribute("draggable", "true");
    el.dataset.responseId = response.id;

    const tag = document.createElement("div");
    tag.className = "tag";
    tag.textContent = response.id;

    const body = document.createElement("div");
    body.className = "body";
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = response.shortLabel || `Response ${response.id}`;

    const snippet = document.createElement("div");
    snippet.className = "snippet";

    const text = blocksToText(response.contentBlocks);
    snippet.textContent = clampText(text, inTimeline ? 120 : 170);

    body.appendChild(title);
    body.appendChild(snippet);

    el.appendChild(tag);
    el.appendChild(body);

    // If response has an image, show a thumbnail on the card
    const thumbSrc = firstImageSrc(response.contentBlocks);
    if (thumbSrc) {
      const img = document.createElement("img");
      img.className = "thumb";
      img.src = thumbSrc;
      img.alt = `${response.shortLabel || response.id} thumbnail`;
      img.loading = "lazy";
      img.addEventListener("click", (ev) => {
        ev.stopPropagation();
        openLightbox(thumbSrc, img.alt);
      });
      el.appendChild(img);
    }

    // Open modal on click (not drag)
    el.addEventListener("click", (ev) => {
      // if dragging, ignore click
      if (el.classList.contains("dragging")) return;
      openModal(question, response);
    });

    // Drag handlers
    el.addEventListener("dragstart", (ev) => {
      draggedCard = el;
      el.classList.add("dragging");
      ev.dataTransfer.setData("text/plain", response.id);
      ev.dataTransfer.effectAllowed = "move";
    });
    el.addEventListener("dragend", () => {
      el.classList.remove("dragging");
      if (draggedCard === el) draggedCard = null;
    });

    return el;
  }


  function moveCardToBank(card) {
    if (!card) return;
    card.classList.remove("in-slot");
    // Avoid duplicates in bank (case: dragged duplicate created elsewhere)
    const rid = card.dataset.responseId;
    const existing = responseBank.querySelector(`.card[data-response-id="${rid}"]`);
    if (existing && existing !== card) {
      // Prefer keeping the existing bank card; discard the extra one
      card.remove();
      return;
    }
    responseBank.appendChild(card);
  }

  function findCardByResponseId(rid) {
    return (
      document.querySelector(`.card.dragging[data-response-id="${rid}"]`) ||
      (draggedCard && draggedCard.dataset.responseId === rid ? draggedCard : null) ||
      document.querySelector(`.card[data-response-id="${rid}"]`)
    );
  }

  function attachDnDHandlers(question) {
    const ans = ensureAnswerSlot(question.id);

    $$(".slot-drop").forEach((slot) => {
      slot.addEventListener("dragover", (ev) => {
        ev.preventDefault();
        slot.classList.add("over");
        ev.dataTransfer.dropEffect = "move";
      });
      slot.addEventListener("dragleave", () => slot.classList.remove("over"));
      slot.addEventListener("drop", (ev) => {
        ev.preventDefault();
        slot.classList.remove("over");
        const rid = ev.dataTransfer.getData("text/plain");
        if (!rid) return;

        // If slot has existing card, move it back to bank
        const existing = slot.querySelector(".card");
        if (existing) {
          const existingId = existing.dataset.responseId;
          // clear existing from this rank
          const rank = Number(slot.dataset.rank);
          ans.ranks[rank] = null;
          moveCardToBank(existing);
        }

        // If rid is currently in another rank, clear that slot
        for (const [r, v] of Object.entries(ans.ranks)) {
          if (v === rid) {
            ans.ranks[Number(r)] = null;
            const otherSlot = document.querySelector(`.slot-drop[data-rank="${r}"]`);
            if (otherSlot) {
              otherSlot.innerHTML = "";
            }
          }
        }

        const card = findCardByResponseId(rid);
        if (!card) return;

        const rank = Number(slot.dataset.rank);
        ans.ranks[rank] = rid;

        // Move dragged card into slot
        slot.innerHTML = "";
        card.classList.add("in-slot");
        slot.appendChild(card);

        updateStatusForQuestion(question);
      });
    });
  }

  function attachBankDnDHandlers(question) {
    // allow dropping back into bank
    responseBank.addEventListener("dragover", (ev) => {
      ev.preventDefault();
      ev.dataTransfer.dropEffect = "move";
    });

    responseBank.addEventListener("drop", (ev) => {
      ev.preventDefault();
      const rid = ev.dataTransfer.getData("text/plain");
      if (!rid) return;

      const ans = ensureAnswerSlot(question.id);

      // If rid is in a slot, clear it
      for (const [rank, v] of Object.entries(ans.ranks)) {
        if (v === rid) {
          ans.ranks[Number(rank)] = null;
          const slot = document.querySelector(`.slot-drop[data-rank="${rank}"]`);
          if (slot) slot.innerHTML = "";
        }
      }

      const card = findCardByResponseId(rid);
      if (!card) return;

      moveCardToBank(card);

      updateStatusForQuestion(question);
    });
  }

  function updateStatusForQuestion(question) {
    const ans = ensureAnswerSlot(question.id);
    const ordered = [1, 2, 3, 4].map((r) => ans.ranks[r]);
    const complete = ordered.every(Boolean);
    if (complete) {
      setStatus("All ranked. You can continue.", false);
    } else {
      setStatus("Drag all four responses onto the timeline to proceed.", false);
    }

    // Gate next/submit based on completeness
    const total = survey.questions.length;
    if (qIndex < total - 1) {
      nextBtn.disabled = !complete;
      if (nextBtnBottom) nextBtnBottom.disabled = !complete;
    } else {
      submitBtn.disabled = !complete;
    }
  }

  function resetRanking() {
    const q = ensureBlocks(getCurrentQuestion());
    const ans = ensureAnswerSlot(q.id);

    // move all cards back to bank
    $$(".slot-drop .card").forEach((card) => responseBank.appendChild(card));
    ans.ranks = { 1: null, 2: null, 3: null, 4: null };
    updateStatusForQuestion(q);
  }

  function openModal(question, response) {
    modalTitle.textContent = `${question.title} — ${response.shortLabel || response.id}`;
    renderBlocks(modalPromptContent, question.promptBlocks);
    renderBlocks(modalResponseContent, response.contentBlocks);

    modalOverlay.classList.remove("hidden");
    modalOverlay.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modalOverlay.classList.add("hidden");
    modalOverlay.setAttribute("aria-hidden", "true");
  }

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "Fullscreen";
    lightbox.classList.remove("hidden");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    lightbox.classList.add("hidden");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
  }

  function buildResults() {
    const completedAt = new Date().toISOString();
    const out = {
      surveyId: survey.surveyId || "PromptTest",
      surveyTitle: survey.surveyTitle || "Prompt Response Ranking",
      participantName,
      startedAt,
      completedAt,
      answers: survey.questions.map((qRaw) => {
        const q = ensureBlocks({ ...qRaw });
        const ans = ensureAnswerSlot(q.id);
        const rankingBestToWorst = [1, 2, 3, 4].map((r) => ans.ranks[r]);
        return {
          promptId: q.id,
          promptTitle: q.title,
          rankingBestToWorst,
          comment: ans.comment || ""
        };
      })
    };
    return out;
  }

  function downloadJSON(obj) {
    const iso = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const safeName = participantName.trim().replace(/[^\w\-]+/g, "_") || "Participant";
    const prefix = (survey.surveyId || "PromptTest").replace(/[^\w\-]+/g, "");
    const filename = `${prefix}_${iso}_${safeName}.json`;

    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function goNext() {
    if (qIndex >= survey.questions.length - 1) return;
    qIndex += 1;
    renderQuestion();
  }

  function goPrev() {
    if (qIndex <= 0) return;
    qIndex -= 1;
    renderQuestion();
  }

  // Event wiring
  startBtn.addEventListener("click", () => {
    const v = (nameInput.value || "").trim();
    if (!v) {
      nameInput.focus();
      return;
    }
    participantName = v;
    enterApp();
  });

  if (commentInput) {
    commentInput.addEventListener("input", () => {
      const q = ensureBlocks(getCurrentQuestion());
      const ans = ensureAnswerSlot(q.id);
      ans.comment = commentInput.value || "";
    });
  }


  nameInput.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") startBtn.click();
  });

  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);
    if (nextBtnBottom) nextBtnBottom.addEventListener("click", goNext);
  resetBtn.addEventListener("click", resetRanking);

  submitBtn.addEventListener("click", () => {
    const q = ensureBlocks(getCurrentQuestion());
    const ans = ensureAnswerSlot(q.id);
    const complete = [1, 2, 3, 4].every((r) => !!ans.ranks[r]);
    if (!complete) {
      setStatus("Please rank all four responses before submitting.", true);
      return;
    }
    downloadJSON(buildResults());
    setStatus("Downloaded your results JSON.", false);
  });

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (ev) => {
    if (ev.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") {
      if (!lightbox.classList.contains("hidden")) closeLightbox();
      if (!modalOverlay.classList.contains("hidden")) closeModal();
    }
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (ev) => {
    if (ev.target === lightbox) closeLightbox();
  });

  // Init
  window.addEventListener("DOMContentLoaded", () => {
    try {
      survey = normalizeSurveyData(window.SURVEY_DATA);
      if (!survey.questions || !survey.questions.length) throw new Error("No questions found in SURVEY_DATA.");
      qTotalEl.textContent = String(survey.questions.length);

      // Disable next/submit until ranked
      nextBtn.disabled = true;
      if (nextBtnBottom) nextBtnBottom.disabled = true;
      submitBtn.disabled = true;
    } catch (e) {
      console.error(e);
      nameGate.classList.add("hidden");
      app.classList.remove("hidden");
      heading.textContent = "Error loading survey data";
      promptContent.textContent = String(e && e.message ? e.message : e);
      setStatus("Check the browser console for details.", true);
    }
  });
})();
