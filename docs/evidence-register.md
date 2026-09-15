# Evidence Register

## Source Retrieval Log

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

## Source Conflict Log

- No conflict found among the official sources reviewed in this pass.
- The HTML career page says the assignment is not in the HTML; the Markdown rendition retrieved with `Accept: text/markdown` contains the assignment. This is expected behavior according to the page text, not a conflict.
- Cross-source comparison: STOW previously claimed 55-65% Cool Locker humidity; the official Wine Storage record gives 60-70%. These ranges differ, but the exact product relationship is not independently established. This is not a proven contradiction between official sources or proof that STOW's claim is false.
