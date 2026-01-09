// data.js
// Survey content for PromptTestSurvey
// NOTE: Long text is encoded using arrays joined with "\n\n" to avoid paste/line-ending issues.

window.SURVEY_DATA = {
  surveyId: "PromptTest",
  surveyTitle: "Prompt Response Ranking",
  intro: [
    "Rank the four responses (A–D) from best to worst for each prompt by dragging them onto the timeline.",
    "Click a response card to open the full prompt + full response."
  ].join("\n\n"),
  questions: [
    {
      id: 1,
      title: "Prompt 1",
      questionHeadingTemplate: "Hi {name} — Question 1 of 3",
      promptBlocks: [
        {
          type: "text",
          value: [
            "Prompt:",
            "\"how do I conduct a root cause analysis for a near miss?\""
          ].join("\n")
        }
      ],
      responses: [
        {
          id: "A",
          shortLabel: "Response A",
          contentBlocks: [
            {
              type: "text",
              value: [
                "To conduct a Root Cause Analysis (RCA) for a near miss on a Turner project, you must follow a structured and policy-compliant process that includes fact-gathering, systems analysis, and corrective actions. Here’s how to do it, based on Turner’s Corporate Environmental Health and Safety Policy and the Building L.I.F.E.® Manual.",
                "✅ Steps to Conduct a Root Cause Analysis for a Near Miss",
                "1. Report the Near Miss Immediately",
                "Notify the Turner Project Superintendent or Project Safety Manager as soon as the near miss occurs.",
                "Document the near miss in Origami within 8 hours, even if further details need to be added later (Corporate Environmental Health and Safety Policy, Incident and Near-Miss, p. 16).",
                "2. Initiate a Root Cause Investigation",
                "Conduct a thorough investigation that includes:",
                "Interviews with involved personnel",
                "Site condition review",
                "Equipment inspections",
                "Photo documentation (excluding photos of personnel)",
                "All employees involved or with knowledge must complete written statements (Corporate Environmental Health and Safety Policy, Incident and Near-Miss, p. 21).",
                "3. Identify the Root Cause",
                "Use a systems-based approach, not a blame-based approach.",
                "Apply the Building L.I.F.E.® systems model:",
                "Evaluate Environment, Capability, and Motivation as root causes of unsafe behaviors or conditions (Building L.I.F.E.® Manual, Core Concepts, p. 10).",
                "Consider using the optional JHRA (Job Hazard Risk Assessment) for quantifying risk based on Frequency, Likelihood, and Severity.",
                "4. Ask the Right Questions",
                "Use the Building L.I.F.E.® guidance to ask:",
                "What happened?",
                "What conditions led to this?",
                "Were procedures in place and followed?",
                "Were systems (JHA, PTP, controls) inadequate or missing?",
                "How could this have been prevented?",
                "5. Involve the Right People",
                "Engage field workers who are closest to the risk.",
                "Utilize tools such as the 5-Worker Lunch or SOAR Cards for additional insight.",
                "Consider hosting a Rapid Improvement Event if the near miss exposed a broader systems issue or recurring unsafe behavior (Building L.I.F.E.® Manual, p. 28-29).",
                "6. Develop and Implement Corrective Actions",
                "Controls must follow the Hierarchy of Controls:",
                "Elimination",
                "Substitution",
                "Engineering Controls",
                "Administrative Controls",
                "PPE (as a last resort)",
                "Document the actions and assign responsibilities with deadlines.",
                "7. Communicate and Close the Loop",
                "Share lessons learned with the entire team during safety huddles or toolbox talks.",
                "Post outcomes on the “You Said / We Did” board if applicable.",
                "Update any applicable JHAs or PTPs with new findings or controls.",
                "📄 Required Documentation",
                "Turner Incident Report in Origami",
                "Written employee statements",
                "Subcontractor incident report",
                "Root cause investigation notes",
                "Corrective action plan",
                "Optional: RCA form or JHRA tool",
                "Updated JHA/PTP (if applicable)",
                "🔁 Continuous Improvement Tools (Optional)",
                "Rapid Improvement Event (especially for task-level issues)",
                "Critical Safe Behavior Coaching data review",
                "Building L.I.F.E.® Process Assessment",
                "Safety Perception Survey",
                "📌 Policy References",
                "Corporate Environmental Health and Safety Policy, Incident and Near-Miss (p. 16–21)",
                "Building L.I.F.E.® Manual, Continuous Improvement and Optimizing Human Performance (pp. 13–19, 26–30)",
                "📢 Final Note",
                "It is your responsibility to always review ChatGPT's response and check with local jurisdictional requirements, project-specific guidelines, and Turner's Corporate Environmental Health and Safety Policy.",
                "Would you like a Root Cause Analysis checklist or a template for field use?"
              ].join("\n\n")
            }
          ]
        },
        {
          id: "B",
          shortLabel: "Response B",
          contentBlocks: [
            {
              type: "text",
              value: [
                "Prompt: \"how do I conduct a root cause analysis for a near miss?\"",
                "",
                "Result:",
                "Below is a Turner-specific, policy-based explanation of how to conduct a Root Cause Analysis (RCA) for a near miss, using only Turner’s Corporate Environmental Health & Safety Policy as the authority.",
                "How to Conduct a Root Cause Analysis (RCA) for a Near Miss",
                "Turner requires that all near-miss events undergo a full incident investigation and root-cause review. This requirement is detailed in the Corporate Environmental Health & Safety Policy, Incident and Near-Miss Investigation and Reporting (Corporate Environmental Health and Safety Policy, Incident and Near-Miss Investigation and Reporting).",
                "Below is the correct Turner-compliant process.",
                "1. Immediately Report and Initiate Investigation",
                "A near miss must be reported to the Turner Project Superintendent or Project Safety Manager as soon as it occurs. Turner requires that the formal Turner Incident Report in Origami be completed within 8 hours. (Corporate Environmental Health and Safety Policy, Incident and Near-Miss Investigation and Reporting)",
                "If the near miss had Serious Injury or Fatality Potential (SIFP), additional escalations are required within one hour. (Corporate Environmental Health and Safety Policy, Incident and Near-Miss Reporting Matrix)",
                "2. Secure the Scene and Preserve Evidence",
                "Turner policy requires the investigating team to secure the accident/near-miss scene, prevent disturbance, and collect all relevant information. (Corporate Environmental Health and Safety Policy, Incident and Near-Miss Investigation and Reporting)",
                "This includes:",
                "Photos, sketches, or schematics",
                "Position of tools, equipment, or materials",
                "Any involved equipment (ladders, tools, PPE) must be tagged, removed from service, and secured (Corporate Environmental Health and Safety Policy, Incident and Near-Miss Investigation and Reporting)",
                "3. Collect Statements and Documentation",
                "Turner policy requires that the subcontractor obtain written statements from each worker involved or who witnessed the event. (Corporate Environmental Health and Safety Policy, Incident and Near-Miss Investigation and Reporting)",
                "Documentation must include:",
                "Turner Incident Report in Origami",
                "Subcontractor’s incident report",
                "Employee witness statements (Corporate Environmental Health and Safety Policy, Incident and Near-Miss Investigation and Reporting)",
                "4. Perform the Root Cause Analysis",
                "Turner requires that root cause investigation be completed for ALL near misses. (Corporate Environmental Health and Safety Policy, Documentation for all Work-Related Incidents, Illnesses and Near-Misses)",
                "Your RCA should include:",
                "A. Immediate causes (unsafe acts/conditions)",
                "Examples:",
                "Incorrect PPE",
                "Improper equipment use",
                "Housekeeping issues These help describe what happened but are not the root cause.",
                "B. Underlying system causes (the Turner-required approach)",
                "Turner’s Building L.I.F.E.® and investigation process emphasize looking at systems contributors, not blame. (Corporate Environmental Health and Safety Policy, Incident and Near-Miss Investigation and Reporting)",
                "Identify gaps in:",
                "Planning (JHA/PTP completeness, daily huddle alignment)",
                "Training or capability",
                "Supervision or oversight",
                "Procedures or engineering controls",
                "Logistics or sequencing",
                "Communication",
                "These system factors form the actual “root causes.”",
                "5. Identify Corrective & Preventive Actions",
                "Turner requires that recommendations and corrective actions be documented in the Origami report. (Corporate Environmental Health and Safety Policy, Incident and Near-Miss Investigation and Reporting)",
                "Corrective actions must:",
                "Follow the Hierarchy of Controls",
                "Be assigned to a responsible person",
                "Have due dates",
                "Be communicated to all affected workers via PTPs, JHAs, Safety Meetings, Huddles, or RIEs",
                "If the near miss was SIFP, an additional review call with BU Leadership and OSE may be required. (Corporate Environmental Health and Safety Policy, Incident and Near-Miss Reporting Matrix)",
                "6. Update Plans, Training, and Work Methods",
                "Turner emphasizes continuous improvement through Building L.I.F.E.®. Findings from RCAs must feed back into:",
                "Updated JHAs",
                "Revised PTPs",
                "Reinforced expectations in Daily Huddles",
                "Worker coaching and planning adjustments (Corporate Environmental Health and Safety Policy, Job Hazard Analysis / Pre-Task Planning)",
                "7. Close Out and Archive Documentation",
                "All documentation must be submitted to Turner and kept for required records. (Corporate Environmental Health and Safety Policy, Documentation for all Work-Related Incidents, Illnesses and Near-Misses)",
                "Reminder",
                "It is your responsibility to always review ChatGPT’s response and check with local jurisdictional requirements, project-specific guidelines, and Turner’s Corporate Environmental Health and Safety Policy.",
                "https://tcco.sharepoint.com/sites/SafetyHQ/SitePages/Environmental-Health-&-Safety-Plan.aspx",
                "If you’d like, I can help you: ✅ Build a Root Cause Analysis template ✅ Walk through a sample RCA scenario ✅ Review a RCA you already started",
                "Would you like a step-by-step RCA form you can use on your project?"
              ].join("\n\n")
            }
          ]
        },
        {
          id: "C",
          shortLabel: "Response C",
          contentBlocks: [
            {
              type: "text",
              value: [
                "Prompt: \"how do I conduct a root cause analysis for a near miss?\"",
                "",
                "Result:",
                "Below is a Turner-aligned, step-by-step process for conducting a Root Cause Analysis (RCA) for a Near Miss, grounded in Turner’s Corporate Environmental, Health, and Safety Policy and Building L.I.F.E.® principles.",
                "1. Confirm the Near Miss and Secure Learning Opportunity",
                "A near miss is an unplanned event that did not result in injury or damage but had the potential to do so. Turner’s expectation is that all near misses are fully investigated to prevent recurrence, with the intent to learn—not blame (Corporate Environmental Health and Safety Policy, Incident and Near-Miss Investigation and Reporting).",
                "Actions:",
                "Stop work if the condition still exists.",
                "Make the area safe.",
                "Preserve the scene if relevant (photos, sketches, equipment condition).",
                "2. Gather Facts (What Happened?)",
                "The first step in RCA is establishing facts, not opinions.",
                "Collect:",
                "What task was being performed?",
                "Who was involved and who witnessed it?",
                "When and where it occurred",
                "What controls were planned (JHA/PTP) versus what was actually in place",
                "This aligns with Turner’s requirement that projects document the scene and conditions immediately and speak with involved workers and witnesses (Corporate Environmental Health and Safety Policy, Incident and Near-Miss Investigation and Reporting).",
                "3. Identify the Event Sequence (Not the Outcome)",
                "Map the chain of events that led up to the near miss.",
                "Ask:",
                "What was the first deviation from normal work?",
                "What happened next?",
                "Where did the last line of defense fail?",
                "Turner emphasizes that near misses occur due to process or system breakdowns, not “bad luck” (Corporate Environmental Health and Safety Policy, Incident and Near-Miss Investigation and Reporting).",
                "4. Determine Root Causes Using a Systems Focus",
                "Turner expects RCA to focus on system contributors, not individual blame.",
                "Use the Building L.I.F.E.® systems lens:",
                "Environment – Layout, access, lighting, housekeeping, congestion",
                "Capability – Training, experience, competency, supervision",
                "Motivation – Time pressure, production demands, unclear expectations",
                "Ask “Why?” repeatedly (typically 3–5 times) until you reach a process failure, not a personal action (Building L.I.F.E.® Manual, Systems Focus & Continuous Improvement).",
                "Example:",
                "Why did the worker step into an unprotected area?",
                "Why was the area unprotected?",
                "Why was protection removed?",
                "Why was there no stop-work when conditions changed?",
                "5. Identify Failed or Missing Controls",
                "Compare:",
                "Planned controls (JHA / Pre-Task Plan)",
                "Actual controls in the field",
                "Turner policy requires investigations to identify gaps in planning, execution, or supervision, especially when a change in conditions occurred without re-planning (Corporate Environmental Health and Safety Policy, Job Hazard Analysis / Pre-Task Planning).",
                "6. Develop Corrective Actions (Fix the System)",
                "Corrective actions must:",
                "Address root causes, not symptoms",
                "Follow the Hierarchy of Controls (elimination → engineering → administrative → PPE)",
                "Be specific, assigned, and tracked",
                "Examples:",
                "Update JHA/PTP to reflect actual conditions",
                "Modify site layout or access",
                "Add engineered controls or physical barriers",
                "Provide targeted retraining or coaching",
                "This is consistent with Turner’s requirement that investigations include documented corrective actions and implementation (Corporate Environmental Health and Safety Policy, Incident and Near-Miss Investigation and Reporting",
                "7. Share Lessons Learned",
                "Near misses are only valuable if learning is shared.",
                "Turner expects:",
                "Discussion during safety huddles or meetings",
                "Communication across crews if applicable",
                "Integration into future planning and training",
                "This supports the Building L.I.F.E.® continuous improvement cycle (Plan-Do-Check-Act) (Building L.I.F.E.® Manual, Continuous Improvement).",
                "8. Document and Close the Loop",
                "Complete the required Incident Investigation / Near-Miss documentation",
                "Enter findings into Origami as required",
                "Verify corrective actions are completed and effective",
                "Turner requires documentation for all near-miss investigations, even when no injury occurred (Corporate Environmental Health and Safety Policy, Incident and Near-Miss Investigation and Reporting).",
                "Key Reminder",
                "It is your responsibility to always review ChatGPT's response and check with local jurisdictional requirements, project-specific guidelines, and Turner’s Corporate Environmental Health and Safety Policy. 🔗 Turner EHS Policy",
                "If you’d like, I can also:",
                "Walk you through a sample near-miss RCA",
                "Help you structure an RCA using Turner’s Incident Investigation or Co-Learning format",
                "Review a real near-miss scenario step by step"
              ].join("\n\n")
            }
          ]
        },
        {
          id: "D",
          shortLabel: "Response D",
          contentBlocks: [
            {
              type: "text",
              value: [
                "Prompt: \"how do I conduct a root cause analysis for a near miss?\"",
                "",
                "Result:",
                "According to a document from 7/2025, Turner expects all incidents, near-misses, injuries, illnesses, and unusual events to be investigated thoroughly, documented in Origami, and to include a root-cause investigation (Corporate Environmental Health and Safety Policy, Incident and Near-Miss).",
                "How to conduct a Root Cause Analysis (RCA) for a near miss (Turner-aligned)",
                "1) Make the situation safe and preserve evidence",
                "Control the hazard first (stop work/barricade as needed) and do not disturb the scene except for emergency response; preserve what you can for investigation (Corporate Environmental Health and Safety Policy, Incident and Near-Miss).",
                "Collect documentation ASAP: photos, sketches/schematics, related evidence/equipment (and avoid photos of injured persons, if applicable) (Corporate Environmental Health and Safety Policy, Incident and Near-Miss).",
                "2) Complete required reporting + core documentation",
                "Enter the incident report in Origami within 8 hours (even if some details come later) (Corporate Environmental Health and Safety Policy, Documentation for all Work-Related Incidents, Illnesses and Near-Misses).",
                "Required documentation includes:",
                "Turner Incident Report in Origami",
                "Complete a root-cause investigation",
                "Employee incident statement(s) (speak with all who may have information)",
                "Subcontractor’s incident report (Corporate Environmental Health and Safety Policy, Documentation for all Work-Related Incidents, Illnesses and Near-Misses).",
                "Also note: subcontractors are expected to submit their report same shift when possible, but no later than 24 hours (Corporate Environmental Health and Safety Policy, Incident and Near–Miss Investigation and Reporting).",
                "3) Use a “systems-focused” mindset (not blame)",
                "When unplanned events occur, Turner’s Building L.I.F.E. approach calls for a systems-focused investigation, not a blame-finding one (Building L.I.F.E. Instruction Manual, Core Concepts & Definitions).",
                "4) Build your “current condition” with facts (what happened)",
                "Turner’s Co-Learning Investigation Form guidance is a good structure for near-miss analysis:",
                "Capture only factual details that tell the story (timeline, witness-confirmed facts, weather, policy compliance, and PTP/JHA efforts) and include relevant pictures/drawings (Corporate Environmental Health and Safety Policy, Co-Learning Investigation Form – Current Condition).",
                "5) Define the “target” (what you want to prevent)",
                "Keep it simple: explicitly state what you want to prevent in the future (e.g., “prevent objects from falling off building”) (Corporate Environmental Health and Safety Policy, Co-Learning Investigation Form – Target).",
                "6) Identify causal factors, then drill down to root cause(s)",
                "Turner points teams to:",
                "Fishbone causal analysis to identify causal factors, then",
                "5-Why to identify root cause(s) (Corporate Environmental Health and Safety Policy, Co-Learning Investigation Form – Root Cause Analysis). If your team is inexperienced, involve the regional Lean Manager and/or BU EH&S Director to guide the discussion (Corporate Environmental Health and Safety Policy, Co-Learning Investigation Form – Target/Team Guidance).",
                "Practical tip while doing Fishbone/5-Why: look for breakdowns in planning and controls—then aim solutions “up the hierarchy” (eliminate/substitute/engineer before relying on admin/PPE) (Building L.I.F.E. Instruction Manual, Hierarchy of Controls).",
                "7) Create corrective actions (countermeasures) tied to the root cause(s)",
                "Countermeasures must be specific, impactful, and measurable, and should directly target the root cause(s) (Corporate Environmental Health and Safety Policy, Co-Learning Investigation Form – Corrective Actions/Countermeasures).",
                "Assign an owner and start/finish dates, and define the measurable result (Corporate Environmental Health and Safety Policy, Co-Learning Investigation Form – Countermeasures).",
                "Turner notes the trade/contractor involved should be a main partner, and you can evaluate effectiveness using things like Rapid Improvement Events or Critical Safe Behavior Coaching (Corporate Environmental Health and Safety Policy, Co-Learning Investigation Form – Countermeasures).",
                ") Verify results, then close the loop (follow-up + sharing)",
                "Document whether countermeasures worked (“Results”), then capture follow-up such as lateral learning and whether a new standard (updated plan/JHA/PTP/practice) is needed (Corporate Environmental Health and Safety Policy, Co-Learning Investigation Form – Follow-Up).",
                "Reminder: It is your responsibility to always review ChatGPT's response and check with local jurisdictional requirements, project-specific guidelines, and Turner’s Corporate Environmental Health and Safety Policy."
              ].join("\n\n")
            }
          ]
        }
      ]
    },

    {
      id: 2,
      title: "Prompt 2",
      questionHeadingTemplate: "Hi {name} — Question 2 of 3",
      promptBlocks: [
        {
          type: "text",
          value: [
            "Prompt:",
            "*see attached image*"
          ].join("\n")
        },
        { type: "image", src: "images/p2.jpg", alt: "Prompt 2 image" }
      ],
      responses: [
        {
          id: "A",
          shortLabel: "Response A",
          contentBlocks: [
            {
              type: "text",
              value: [
                "Extracted Image Context: The image shows a construction worker operating a scissor lift indoors, elevated near a ceiling beam. The worker is wearing appropriate PPE including a Type II safety helmet, safety vest, gloves, and fall protection harness. The lift is extended, and there are materials or tools placed inside the lift basket. The environment appears to be a warehouse or enclosed facility with visible lighting and structural elements.",
                "Let me know how you want to proceed.",
                "(A) Shall I generate the potential hazard table?",
                "(B) Would you like to provide any additional clarification to the above image context?"
              ].join("\n\n")
            },
            { type: "image", src: "images/p2rA.png", alt: "Response A – Prompt 2 image" },
            {
              type: "text",
              value: [
                "It is your responsibility to always review ChatGPT's response and check with local jurisdictional requirements, project-specific guidelines, and Turner’s Corporate Environmental Health and Safety Policy.",
                "Would you like a Safety Observation Report based on these findings?"
              ].join("\n\n")
            }
          ]
        },
        {
          id: "B",
          shortLabel: "Response B",
          contentBlocks: [
            {
              type: "text",
              value: [
                "Extracted Image Context: This image shows a crew of construction workers performing elevated structural steel and concrete work on a high-rise project. Multiple workers are standing or kneeling on steel beams and rebar decks, some carrying tools or guiding concrete, all within an active leading-edge environment.",
                "Let me know how you want to proceed.",
                "(A) Shall I generate the potential hazard table?",
                "(B) Or would you like to provide any additional clarification to the above image context?."
              ].join("\n\n")
            },
            { type: "image", src: "images/p2rB.png", alt: "Response B – Prompt 2 image" },
            {
              type: "text",
              value: [
                "It is your responsibility to always review ChatGPT's response and check with local jurisdictional requirements, project-specific guidelines, and Turner's Corporate Environmental Health and Safety Policy.",
                "Would you like a Safety Observation Report based on these observations? If yes, please share the project name and I’ll draft a report using Turner’s template."
              ].join("\n\n")
            }
          ]
        },
        {
          id: "C",
          shortLabel: "Response C",
          contentBlocks: [
            {
              type: "text",
              value: [
                "Extracted Image Context: The image shows multiple workers performing steel and concrete-related activities on an elevated structure with exposed beams, rebar, and open edges. Several workers appear to be working at height on structural steel without clearly visible, complete fall protection systems or fully protected walking/working surfaces.",
                "Let me know how you want to proceed.",
                "(A) Shall I generate the potential hazard table?",
                "(B) Or would you like to provide any additional clarification to the above image context?"
              ].join("\n\n")
            },
            { type: "image", src: "images/p2rC.png", alt: "Response C – Prompt 2 image" },
            {
              type: "text",
              value: [
                "Planning / execution reinforcement (recommended): Ensure the day’s plan is discussed before work starts (PTP / daily huddle), and that controls are actively reviewed/adjusted by those closest to the work. (Building LIFE Manual 10202024, Daily Huddles)",
                "It is your responsibility to always review ChatGPT's response and check with local jurisdictional requirements, project-specific guidelines, and Turner’s Corporate Environmental Health and Safety Policy.",
                "Would you like a Safety Observation Report based on these observations? If yes, tell me the project name and I’ll generate a downloadable Word document with the photo and the hazard table."
              ].join("\n\n")
            }
          ]
        },
        {
          id: "D",
          shortLabel: "Response D",
          contentBlocks: [
            {
              type: "text",
              value: [
                "Extracted Image Context: The photo shows multiple workers performing work on an elevated steel framing area with rebar and concrete placement activity occurring below/around the beams. Several workers appear to be moving and working near openings/edges on the structure, with materials and tools staged across the work area. (Building L.I.F.E. Instruction Manual, Guiding Principles)",
                "Let me know how you want to proceed. (A) Shall I generate the potential hazard table? Or (B) would you like to provide any additional clarification to the above image context?"
              ].join("\n\n")
            },
            { type: "image", src: "images/p2rD.png", alt: "Response D – Prompt 2 image" },
            {
              type: "text",
              value: [
                "It is your responsibility to always review ChatGPT's response and check with local jurisdictional requirements, project-specific guidelines, and Turner’s Corporate Environmental Health and Safety Policy: Turner EHS Policy.",
                "Would you like a Safety Observation Report based on these observations? If yes, tell me the project name."
              ].join("\n\n")
            }
          ]
        }
      ]
    },

   {
  id: 3,
  title: "Prompt 3",
  questionHeadingTemplate: "Hi {name} — Question 3 of 3",
  promptBlocks: [
    {
      type: "text",
      value: [
        "Prompt:",
        "*see attached Image*"
      ].join("\n")
    },
    { type: "image", src: "images/p3.jpg", alt: "Prompt 3 image" }
  ],
  responses: [
    {
      id: "A",
      shortLabel: "Response A",
      contentBlocks: [
        {
          type: "text",
          value: [
            "Extracted Image Context: The photo shows a construction worker on an A-frame ladder using one hand to hold onto a ceiling conduit or structural element while performing overhead work with the other hand. There is no visible fall protection in use, and the worker appears to be leaning and reaching while elevated. The work area has exposed utilities and materials scattered on the ground nearby.",
            "Let me know how you want to proceed.",
            "(A) Shall I generate the potential hazard table?",
            "Or",
            "(B) Would you like to provide any additional clarification to the above image context?",
            "",
            "Thank you. Based on the image provided and in accordance with the Turner Corporate Environmental Health and Safety Policy and Building L.I.F.E.® Manual, here is a detailed hazard analysis:"
          ].join("\n\n")
        },
        { type: "image", src: "images/p3rA.png", alt: "Response A – Prompt 3 image" },
        {
          type: "text",
          value: [
            "It is your responsibility to always review ChatGPT's response and check with local jurisdictional requirements, project-specific guidelines, and Turner’s Corporate Environmental Health and Safety Policy.",
            "Would you like a Safety Observation Report based on these observations?",
            "If yes, please provide the project name, and I’ll generate a downloadable report using the official Turner template."
          ].join("\n\n")
        }
      ]
    },
    {
      id: "B",
      shortLabel: "Response B",
      contentBlocks: [
        {
          type: "text",
          value: [
            "Extracted Image Context:",
            "The image shows an exterior construction area where two extension ladders are positioned against a corrugated metal wall. One ladder is set at a very steep angle, and the other rests partially inside a guardrail-protected pit. Steel framing is overhead, and the ground is uneven with snow and gravel present. There are multiple unprotected edges and open areas around the ladders.",
            "Let me know how you want to proceed.",
            "(A) Shall I generate the potential hazard table?",
            "(B) Or would you like to provide any additional clarification to the above image context?"
          ].join("\n\n")
        },
        { type: "image", src: "images/p3rB.png", alt: "Response B – Prompt 3 image" },
        {
          type: "text",
          value: [
            "It is your responsibility to always review ChatGPT's response and check with local jurisdictional requirements, project-specific guidelines, and Turner's Corporate Environmental Health and Safety Policy.",
            "Would you like a Safety Observation Report based on these observations? If yes, please share the project name and I’ll draft a report using Turner’s template."
          ].join("\n\n")
        }
      ]
    },
    {
      id: "C",
      shortLabel: "Response C",
      contentBlocks: [
        {
          type: "text",
          value: [
            "Extracted Image Context:",
            "The image shows two extension ladders leaning against a corrugated metal wall and steel beam structure on an active construction site. The ladders appear to be used for access near elevated steel framing and wall penetrations, with uneven ground and temporary guardrails visible below.",
            "Let me know how you want to proceed.",
            "(A) Shall I generate the potential hazard table?",
            "(B) Or would you like to provide any additional clarification to the above image context?",
            "According to a document from 7/2025, here are the potential hazards observed and the required controls."
          ].join("\n\n")
        },
        { type: "image", src: "images/p3rC.png", alt: "Response C – Prompt 3 image" },
        {
          type: "text",
          value: [
            "It is your responsibility to always review ChatGPT's response and check with local jurisdictional requirements, project-specific guidelines, and Turner’s Corporate Environmental Health and Safety Policy.",
            "Would you like a Safety Observation Report based on these observations? If yes, tell me the project name and I’ll generate a downloadable Word document with the photo and the table."
          ].join("\n\n")
        }
      ]
    },
    {
      id: "D",
      shortLabel: "Response D",
      contentBlocks: [
        {
          type: "text",
          value: [
            "Extracted Image Context: The photo shows a steel-framed structure with two extension ladders leaned against a corrugated wall/steel beam area, positioned near an open excavation/edge that is guarded by yellow railings. The ground appears uneven with some snow/ice present, and there are multiple vertical conduits/pipes near the edge where the ladders are set up. (Building L.I.F.E. Instruction Manual, Preface)",
            "Let me know how you want to proceed. (A) Shall I generate the potential hazard table? Or (B) would you like to provide any additional clarification to the above image context?"
          ].join("\n\n")
        },
        { type: "image", src: "images/p3rD.png", alt: "Response D – Prompt 3 image" },
        {
          type: "text",
          value: [
            "It is your responsibility to always review ChatGPT's response and check with local jurisdictional requirements, project-specific guidelines, and Turner's Corporate Environmental Health and Safety Policy: Turner EHS Policy.",
            "Would you like a Safety Observation Report based on these observations? If yes, tell me the project name."
          ].join("\n\n")
        }
      ]
    }
  ]
},

  ]
};
