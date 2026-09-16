# Evidence Register

## Source Retrieval Log

This documentation-only update uses existing source records, local files, Git history and the candidate's latest confirmation. The assignment page was rechecked on 2026-09-16 at 08:50:39 +07:00 with `Accept: text/markdown` (OFF-022). No new tool-session logs or CRM records were retrieved; no tests were rerun. Other historical retrieval times below are not new verification timestamps.

Initial retrieval time used for this pass: 2026-09-15 12:50:15 +07:00.

Additional official-source check retrieval time: 2026-09-15 13:26:06 +07:00.

Wine Storage official-source check retrieval time: 2026-09-15 13:32:25 +07:00.

The prior documentation update reused the official-source records above. During implementation, the Self Storage page was retrieved again at approximately 2026-09-15 13:47 +07:00, and its public locker-access photo was downloaded at approximately 13:49 +07:00. This adds visual context only, not independent quote or availability verification. Technical Vite/Vitest references are recorded separately in `prototype/docs/implementation-notes.md`.

## Official Facts Established

| Evidence ID | Source type | URL | Relevant fact |
| --- | --- | --- | --- |
| OFF-001 | Official documentation | https://mystorage.vn/llms.txt | MyStorage operates self-storage and full-service storage in Vietnam; services include self storage, full-service storage, luggage, document, wine, motorbike/bike, business, cold, air-conditioned, furniture storage, moving, packing materials, and size guide. |
| OFF-002 | Official documentation | https://mystorage.vn/llms.txt | The website is available in English, Vietnamese, Korean, and Japanese. |
| OFF-003 | Official documentation | https://mystorage.vn/llms.txt | Exact pricing by size is quoted through booking.mystorage.vn or the mystorage.ai size calculator; listed starting points include 559,000 VND/month for air-conditioned and furniture storage, and 54,000 VND/hour for luggage storage. |
| OFF-004 | Official documentation | https://mystorage.vn/llms.txt | Public support/contact details: phone 028 7770 0117, email hello@mystorage.vn, support Monday-Saturday 9am-6pm with remote support on Sundays. |
| OFF-005 | Official documentation | https://mystorage.vn/career/product-engineering-intern/ | The Markdown rendition of the Product Engineering Intern page contains the assignment; the HTML page states the assignment is not in the HTML. |
| OFF-006 | Official documentation | https://mystorage.vn/career/product-engineering-intern/ | The assignment product is STOW at `stow.mystorage.vn`, described as MyStorage's AI personal assistant for storage, sizes, prices, and next steps. |
| OFF-007 | Official documentation | https://mystorage.vn/career/product-engineering-intern/ | The candidate should use STOW as a real customer and sign up with their own real email and phone, matching the application contact details. |
| OFF-008 | Official documentation | https://mystorage.vn/career/product-engineering-intern/ | Findings should cover real issues in UI, UX, and AI responses, including accuracy against mystorage.vn and `llms.txt`, tone, language handling, pricing and booking questions, errors, empty states, mobile, speed, and accessibility. |
| OFF-009 | Official documentation | https://mystorage.vn/career/product-engineering-intern/ | The assignment requires fixing or improving at least one finding with a working prototype and documenting Claude Code output that was rejected or rewritten. |
| OFF-010 | Official documentation | https://mystorage.vn/.well-known/api-catalog | The API catalog links to `llms.txt`, the careers page, and the careers OpenAPI document. |
| OFF-011 | Official documentation | https://mystorage.vn/api/careers/openapi.json | The application endpoint is `POST /api/careers/applications/`; required fields are `job`, `name`, `email`, `phone`, `note`, and `file`. |
| OFF-012 | Official documentation | https://mystorage.vn/api/careers/openapi.json | The PDF must be at most 4 MB and contain CV, project links, assignment findings, prototype information, rejected AI output, and hours spent. |
| OFF-013 | Official documentation | https://mystorage.vn/services/self-storage/ | The public Self Storage page advertises self-storage units ranging from 1 to 23 CBM and 24/7 access. |
| OFF-014 | Official documentation | https://mystorage.vn/services/self-storage/ | The public Self Storage page describes air-conditioned storage as maintained at approximately 23-25°C. |
| OFF-015 | Official documentation | https://mystorage.vn/services/self-storage/ | The public Self Storage page says a 1 CBM locker can hold 6 standard boxes. |
| OFF-016 | Official documentation | https://mystorage.vn/size-guide/ | The public Size Guide says MyStorage offers self-storage units ranging from 1 to 23 cubic meters. |
| OFF-017 | Official documentation | https://mystorage.vn/size-guide/ | The public Size Guide says a 1 CBM storage locker holds 6 standard boxes, but the reviewed public source does not define the dimensions of a standard box. |
| OFF-018 | Official documentation | https://mystorage.vn/wine-storage/ | The official Wine Storage page describes wine storage at 12-15°C and 60-70% humidity. |
| OFF-019 | Official documentation | https://mystorage.vn/wine-storage/ | The official Wine Storage page describes 24/7 secure access/security for wine storage. |
| OFF-020 | Official documentation | https://mystorage.vn/wine-storage/ | The official Wine Storage page describes specialized shelving for wine and a wine-focused booking/storage flow. |
| OFF-021 | Official documentation | https://mystorage.vn/wine-storage/ | The official Wine Storage page identifies the wine storage facility at 375 Vo Nguyen Giap. |
| OFF-022 | Official documentation; wording rechecked 2026-09-16 08:50:39 +07:00 | https://mystorage.vn/career/product-engineering-intern/ | Retrieved with `Accept: text/markdown`. Assignment item 4 expects Claude Code use, an explanation of output rejected or rewritten and reading every line. The role description calls it the primary engineering tool; the assignment does not require the entire prototype to be generated by Claude Code. This clarifies the earlier checklist paraphrase, not a conflict between official sources. |

## Candidate-Reported Evidence

Finding status and verification of individual product claims are separate. F-02 is now Reproduced in the candidate session based on CRE-003 through CRE-009 and CRE-019; price, inventory and suitability claims remain Needs verification independently. No separate repeat session or assistant reproduction is claimed.

| Evidence ID | Finding ID | Source type | Status | Summary |
| --- | --- | --- | --- | --- |
| CRE-001 | F-01 | Candidate-reported STOW transcript/screenshots | Reproduced | Candidate screenshots and transcript show that a Vietnamese STOW conversation shifted to English after clicking the "Get Self Storage quote" button, even after explicitly requesting Vietnamese. |
| CRE-002 | UNR-001 | Candidate report | Needs verification | Candidate reports the initial chat screen and sidebar showed no visible login/register entry, and a message could be sent without a reported registration step. This is an unresolved application requirement, not a finding yet. |
| CRE-003 | F-02 | Candidate-reported STOW transcript | Needs verification | Earlier, STOW called the 2 CBM Non-AC unit at 375 Vo Nguyen Giap, priced at 1,188,000 VND/month, the “optimal cost” option. It did not mention the cheaper Cool Locker at that time. |
| CRE-004 | F-02, F-03 | Candidate-reported STOW transcript | Needs verification | The candidate asked why the initial recommendation was a 2 CBM Non-AC unit at 375 Vo Nguyen Giap for 1,188,000 VND/month when a smaller option might be cheaper. |
| CRE-005 | F-02, F-03 | Candidate-reported STOW transcript | Needs verification | STOW replied that Standard 1 CBM units, both Non-AC and AC, are sold out at 375 Vo Nguyen Giap and An Phu. |
| CRE-006 | F-02, F-03 | Candidate-reported STOW transcript | Needs verification | STOW replied that a 1 CBM Cool Locker at 375 Vo Nguyen Giap is available for 990,000 VND/month before 8% VAT. |
| CRE-007 | F-03 | Candidate-reported STOW transcript | Needs verification | STOW described the Cool Locker as approximately 15°C, with 55-65% humidity, private lock and 24/7 access. |
| CRE-008 | F-02 | Candidate-reported STOW transcript | Needs verification | STOW said the candidate's six boxes measure 60 x 40 x 40 cm each and have a total volume of approximately 0.58 CBM. |
| CRE-009 | F-02 | Candidate-reported STOW transcript | Needs verification | STOW claimed a typical 1 CBM locker is approximately 1 m x 1 m x 1 m, with a 0.8-0.9 m door, and that the six boxes fit. |
| CRE-010 | F-03 | Candidate-reported STOW transcript | Needs verification | STOW provided this facility map: https://mystorage.vn/facility-map/375-vo-nguyen-giap/?room=singapore |
| CRE-011 | F-03 | Candidate-reported STOW transcript | Needs verification | STOW suggested checking availability and images at https://booking.mystorage.vn |
| CRE-012 | F-04 | Candidate-reported STOW transcript | Needs verification | STOW stated that the 1 CBM Cool Locker is a repurposed Wine Locker at 375 Vo Nguyen Giap. |
| CRE-013 | F-04 | Candidate-reported STOW transcript | Needs verification | STOW stated that customers should select “Wine Storage” in the booking flow. |
| CRE-014 | F-04 | Candidate-reported STOW transcript | Needs verification | STOW stated that staff can remove wine-bottle racks before storing personal boxes. |
| CRE-015 | F-04 | Candidate-reported STOW transcript | Needs verification | STOW stated that the candidate's six 60 x 40 x 40 cm boxes fit a typical 1 x 1 x 1 m locker. |
| CRE-016 | F-04 | Candidate-reported STOW transcript | Needs verification | STOW stated that the Cool Locker has private access and 24/7 access. |
| CRE-017 | F-04 | Candidate-reported STOW transcript | Needs verification | STOW stated that the price is 990,000 VND/month before VAT. |
| CRE-018 | F-04 | Candidate-reported STOW transcript | Needs verification | STOW stated that availability was allegedly 10 units at 13:20 on 15 Sep 2026, with an automatic update every 10 minutes. |
| CRE-019 | F-02, F-03, F-04 | Candidate-reported STOW response summary | Observed | Latest response explicitly confirms personal-item eligibility and private 24/7 self-access, staff inspection/rack removal if necessary, the Wine Storage booking category and both pre-VAT prices. Supports F-02 as Reproduced in the candidate session; underlying product claims remain independently unverified. |
| CRE-020 | F-02 | Candidate-provided implementation brief | Observed | The brief supplied the fixture label "Candidate STOW chat, captured 15 Sep 2026" and authorized a local prototype. This provides a candidate-reported capture date for the quote fixture, not independent timestamp verification, a new STOW response, or a date for F-01. |
| CRE-021 | Prototype review | Earlier candidate confirmation; tool attribution corrected by CRE-025 | Observed | Candidate initially attributed both follow-ups to Claude Code; that statement was mistaken and has been withdrawn. The review account remains: after the first capacity change, image review with ChatGPT revealed the remaining lower-price explanation heading when both units exceeded capacity; candidate requested correction rather than writing the patch personally. |
| CRE-022 | Prototype verification | Candidate confirmation / supplied-log account | Observed | Candidate reports desktop checks for 6, 12, 24 and back to 6 boxes, and supplied logs reporting 12/12 tests plus production build passed. Exact manual-check timestamps, exported logs and 12/24-box screenshots are not present in the repo. No candidate mobile check is claimed. |
| CRE-023 | UNR-001 | Candidate action report and relayed chatbot claim | Needs verification | Candidate confirms providing their real email and phone in the STOW session. STOW reportedly said it saved them in CRM and did not create a booking. CRM persistence, registration and session association have not been independently verified. Contact values are intentionally omitted. |
| CRE-024 | Time accounting | Candidate confirmation | Observed | 11:21-15:26 on 15 Sep 2026 is approximately 4h 05m elapsed, not continuous working time. Final effort and per-task durations remain unconfirmed. The interval's timezone was not explicitly supplied in this confirmation. |
| CRE-025 | Prototype attribution correction | Candidate-supplied transcript reconciliation in the latest request | Observed | Codex built the initial prototype (historical report: 7/7 tests and build passed). Claude Opus via Antigravity IDE performed the capacity iteration, `0162e89` (transcript: 12/12 and build passed). Codex performed the heading and Vietnamese/English assertions, `17e19d3`, editing `App.tsx`, `copy.ts` and `quote.spec.ts` (transcript: 12/12 and build passed). Candidate withdraws the earlier two-Claude-Code claim. The reconciled sessions do not establish Claude Code use. Candidate identified the scenario, reviewed images with ChatGPT and requested correction; AI performed the patches. No new session exports were independently inspected or tests rerun in this documentation pass. |

CRE-020 source: `C:\Users\asus\.codex\attachments\248082b9-ffc7-4f38-8c76-66df7abacfbd\pasted-text.txt`. Exact capture time remains unknown. Prototype tests and screenshots are separate engineering evidence in `prototype/README.md` and `prototype/docs/verification/`; they must not be presented as production STOW reproduction evidence.

### Latest Eligibility Response

Source: candidate-supplied attachment `C:\Users\asus\.codex\attachments\c8d74af4-02a9-46f1-aebc-bb0e620a5b72\pasted-text.txt` (CRE-019). The following preserves the candidate's supplied response summary; it is not an independently retrieved or verbatim STOW export.

STOW confirmed:

* Personal items such as clothing, books, files and dry documents are allowed in the Cool Locker if they are not prohibited items.
* The Cool Locker at 375 Vo Nguyen Giap provides private access and 24/7 self-access.
* Staff should inspect and remove wine racks before handover if necessary.
* The Cool Locker is a repurposed Wine Locker.
* The candidate was told to select “Wine Storage” in the booking flow.
* The 1 CBM Cool Locker price is 990,000 VND/month before VAT.
* The standard 2 CBM Non-AC alternative is 1,188,000 VND/month before VAT.

Exact sent prompt, session ID, screenshot filenames, message timestamp and duration: unknown. The earlier alleged availability of 10 units at 13:20 on 15 Sep 2026 (CRE-018; timezone not supplied) is a chatbot claim, not the independently verified time or inventory of this latest response.

Effect on findings: F-02 becomes Reproduced in the candidate session for premature absolute wording and incomplete comparison. F-04 remains Needs verification for the public documentation and terms gap; the latest response resolved eligibility within the conversation. It does not establish wrong routing or an invalid service.

## Evidence Gaps

- F-01 is marked Reproduced based on candidate screenshots and transcript, but screenshot filenames remain unknown.
- STOW session ID is unknown.
- CRE-020 supplies a candidate-reported capture date of 15 Sep 2026 for the quote fixture; exact time and message-level timestamps remain unknown. Other historical conversations, including F-01, remain undated unless separately supplied.
- Browser, device, viewport, and locale settings are unknown.
- Registration/authentication path used by the candidate is unknown.
- No independent reproduction has been performed in this task.
- F-02 is Reproduced in the candidate session; F-03 remains Needs verification. Neither has been independently reproduced by this assistant.
- The public Self Storage and Size Guide pages reviewed do not establish the Cool Locker product, 15°C temperature, 55-65% humidity, 990,000 VND/month price, or live availability.
- The official Wine Storage page supports a wine-storage environment at 12-15°C and 60-70% humidity, but does not explicitly establish that non-wine personal items may be stored under the Wine Storage booking category.
- The official Wine Storage page describes specialized shelving for wine, but does not explicitly establish that wine racks may be removed under a standard customer booking.
- The reviewed public pages do not establish the exact Cool Locker price, live availability, or that the 15 Sep 2026 availability timestamp is externally verifiable.
- Absence from the reviewed public pages is not proof that the Cool Locker product or data is false.
- STOW confirmed personal-item eligibility and 24/7 self-access conversationally. Applicable terms, protection, item-specific temperature suitability and the publicly documented relationship between Wine Storage and Cool Locker remain unresolved.
- Physical fit of six 60 x 40 x 40 cm boxes is unresolved until exact internal dimensions and door dimensions are verified.
- Current bookable availability and price timestamps for both options remain unverified. CRE-018 includes an alleged inventory timestamp, not an independently verified price or availability record.
- Contact details were supplied by the candidate (CRE-023); independent CRM persistence and association with the required session remain unverified. Do not publish full contact values or copy them from Git author metadata.
- Five JPG files are now present (see [newly present evidence files](#newly-present-evidence-files)); their contents and privacy redactions have not been reviewed in this pass. A transcript export and the image used in the candidate/ChatGPT prototype review are still not identified. Existing prototype screenshots must not substitute for STOW evidence.
- Attribution is concluded from the candidate's transcript reconciliation in CRE-025, not from commit metadata. Portable session exports are not attached; no new independent transcript inspection is claimed. The reconciled sessions do not establish Claude Code use or completion of that requirement.

## Newly Present Evidence Files

The workspace now contains `docs/evidence/E01_InitialRecommendation.jpg`, `E02-conditional-alternative.jpg`, `E03-conditions-and-explanation.jpg`, `E04-language-switch.jpg` and `E05-contact-confirmation.jpg`. This pass checked file presence only, not image content, completeness or redaction. Earlier statements that screenshot filenames were unknown describe the prior evidence record; mapping these files to individual claims remains pending image review. Do not publish contact information from the images. No Claude tool log or prototype review image is established by these filenames.

## Engineering Evidence

Repository: [MyStorageAssignment](https://github.com/TruongHo22306/MyStorageAssignment), confirmed from the configured `origin`; no URL was invented. Git diffs confirm changes, not the AI tool, a test run or hours worked.

| ID | Evidence and existing location | What it establishes / limits |
| --- | --- | --- |
| ENG-001 | Commit `29fad6b`; [fixture](../prototype/src/quote-fixture.ts), [README](../prototype/README.md) | Initial local React/TypeScript prototype; historical Codex execution recorded 7/7 tests and build passed. Codex attribution is supported by the earlier assistant session and candidate confirmation. Seven is the initial count, not the latest result. Not a production STOW fix. |
| ENG-002 | CRE-025 transcript reconciliation; commit `0162e89`; [capacity calculation](../prototype/src/calculations.ts), [screen](../prototype/src/App.tsx), [AI decisions](../prototype/docs/ai-decisions.md) | Claude Opus via Antigravity IDE implemented capacity-first messaging; the historical transcript reports 12/12 tests and build passed. Attribution/result comes from the candidate's transcript account, not the commit alone. The diff still used the default explanation heading in the exceeded branch. |
| ENG-003 | CRE-025 transcript reconciliation; commit `17e19d3`; [screen](../prototype/src/App.tsx), [translations](../prototype/src/copy.ts), [regression test](../prototype/tests/quote.spec.ts) | Codex edited `App.tsx`, `copy.ts` and `quote.spec.ts`; historical transcript reports 12/12 tests and build passed. Final heading follows capacity state; test checks 6 -> 12 -> 24 -> 6 at 60 x 40 x 40 cm in Vietnamese and English, including absence of the lower-price heading when capacity is exceeded. Tool attribution is transcript-based, not inferred from the commit. |
| ENG-004 | Earlier Codex tool outputs in this conversation, before `17e19d3`; no standalone console-log file is supplied in the repo | Directly executed: the extended regression test failed on the old heading; after the patch, `npm.cmd test` passed 12/12 and `npm.cmd run build` passed. No visual review was performed in that heading-fix task. These historical outputs are separate from the candidate-supplied-log account in CRE-022. No rerun occurred in this documentation task. |
| ENG-005 | [desktop.png](../prototype/docs/verification/desktop.png), [mobile.png](../prototype/docs/verification/mobile.png), [narrow.png](../prototype/docs/verification/narrow.png) | Existing automated prototype screenshots from the default-scenario layout test at 1280, 390 and 320px. Earlier assistant review is recorded for these baseline images. They do not establish candidate manual mobile testing or a 12/24-box visual review of the final headings. |
| ENG-006 | CRE-021 and CRE-022; no additional image path supplied | Candidate reports desktop scenario checks and image review with ChatGPT that identified the missed heading. Review finding is corroborated by the before/after code; the original review image is still missing as a portable artifact. |

## Attribution Reconciliation

Conclusion from the candidate's supplied transcript reconciliation (CRE-025): **Codex built the initial prototype; Claude Opus via Antigravity IDE performed `0162e89`; Codex performed `17e19d3`.** Their historical results are respectively 7/7, 12/12 and 12/12 tests, with production build passed at every stage. The heading transcript records edits to `App.tsx`, `copy.ts` and `quote.spec.ts`.

Correction history: the candidate's earlier statement that Claude Code performed both follow-ups (CRE-021) was mistaken and is withdrawn. This replaces the previous pending-conflict note. The candidate identified the scenario, reviewed an image with ChatGPT and requested correction; AI implemented the patch. Commits identify changes, not the generating tool. This pass records the candidate's reconciliation without claiming a new independent inspection of session exports or a test rerun.

The reconciled sessions do not establish Claude Code use. OFF-022 expects actual Claude Code use and an explanation of rejected or revised output, not an entirely Claude-generated prototype. The review-driven heading correction is real, but is not demonstrated Claude Code output; the requirement is not marked complete. Book Illustration has not been reconciled and its attribution is unchanged. No PDF was edited in this pass.

## Source Conflict Log

- No conflict found among the official sources reviewed in this pass.
- The HTML career page says the assignment is not in the HTML; the Markdown rendition retrieved with `Accept: text/markdown` contains the assignment. This is expected behavior according to the page text, not a conflict.
- Cross-source comparison: STOW previously claimed 55-65% Cool Locker humidity; the official Wine Storage record gives 60-70%. These ranges differ, but the exact product relationship is not independently established. This is not a proven contradiction between official sources or proof that STOW's claim is false.
