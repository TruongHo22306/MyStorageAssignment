# Assignment Checklist

## Source Log

Initial retrieval time used for this pass: 2026-09-15 12:50:15 +07:00.

Additional official-source check retrieval time: 2026-09-15 13:26:06 +07:00.

Wine Storage official-source check retrieval time: 2026-09-15 13:32:25 +07:00.

| Source | URL | Retrieval method | Relevant fact |
| --- | --- | --- | --- |
| Official site overview | https://mystorage.vn/llms.txt | Public text fetch | MyStorage services, language availability, public contact/booking facts, and agent-readable entry points. |
| Product Engineering Intern page | https://mystorage.vn/career/product-engineering-intern/ | `GET` with `Accept: text/markdown` | The hidden Markdown-only assignment requires auditing STOW and fixing or improving one finding with a working prototype. |
| API catalog | https://mystorage.vn/.well-known/api-catalog | Public JSON/linkset fetch | The catalog points to `llms.txt`, the careers page, and the careers OpenAPI document. |
| Careers OpenAPI | https://mystorage.vn/api/careers/openapi.json | Public JSON fetch | Applications use `POST /api/careers/applications/` with one PDF and required contact fields. |
| Self Storage page | https://mystorage.vn/services/self-storage/ | Public page fetch | Establishes 1-23 CBM units, 24/7 access, AC units at approximately 23-25°C, and 1 CBM holding 6 standard boxes. |
| Size Guide page | https://mystorage.vn/size-guide/ | Public page fetch | Establishes 1-23 CBM storage units and says a 1 CBM locker holds 6 standard boxes; reviewed text does not define standard-box dimensions. |
| Wine Storage page | https://mystorage.vn/wine-storage/ | Public page fetch | Establishes wine storage at 12-15°C and 60-70% humidity, 24/7 secure access/security, specialized wine shelving, booking wine storage, and 375 Vo Nguyen Giap. |

## Key Requirements

- Audit `https://stow.mystorage.vn/chat` as a real customer would.
- Use the candidate's own real email and phone number for any required STOW registration.
- The STOW email and phone should match the application email and phone.
- Report real, reproducible, consequential findings across UI, UX, and AI responses.
- For each finding, document what happened, steps to reproduce, customer/MyStorage impact, severity, and proposed fix.
- Fix or improve at least one finding with a working prototype later. Prototype forms may include a rebuilt screen, improved flow, component, prompt plus evaluation set, or another runnable artifact.
- Use Claude Code as the primary engineering tool during implementation and document what was rejected or rewritten from its output.
- Keep total assignment effort within 4-8 hours, including work already completed.
- Submit one PDF, maximum 4 MB, containing CV, project links, assignment findings, prototype URL or repository, run instructions, rejected AI output, and hours spent.
- Submit a brief note under 300 words about the last thing built with an AI coding tool and what required manual correction.
- Application deadline: 2026-09-20 23:59 Vietnam time (UTC+7).

## Ground Rules

- No load testing.
- No automated message loops.
- No fake bookings.
- No abusive content.
- Test only with the candidate's own account.
- Do not test other users' accounts.
- One polite prompt-injection attempt may be a finding; repeated attempts are out of scope.
- Do not submit the application during this preparation task.
- Do not contact MyStorage staff during this preparation task.
- Do not register accounts or send chatbot messages during this preparation task.

## Finding Documentation Checklist

For every finding, capture:

- ID and status: `Observed`, `Reproduced`, `Needs verification`, or `Not a bug`.
- User goal.
- Preconditions.
- Exact prompt/action sequence.
- Observed behavior.
- Expected behavior.
- Screenshot/transcript references.
- Reproduction status.
- Customer impact.
- Initial severity with reasoning.
- Root-cause hypotheses, explicitly marked unverified.
- Smallest plausible fix.

## Scope For This Workspace

The candidate's latest implementation brief supersedes the earlier documentation-only phase. Current authorized scope is the small local prototype in `prototype/` and relevant updates to the four existing assignment documents. Preserve existing evidence and files. No deployment, real booking, production changes, account registration, messages, backend or infrastructure is authorized.

## Proposed Prototype Scope

Name: **Transparent Storage Quote Recommendation**.

Primary finding: F-02, Initial “Cheapest Option” Recommendation Omits a Cheaper Conditional Option. F-01 may contribute Vietnamese interaction continuity only if it fits naturally. F-04 is not primary because eligibility was resolved conversationally.

Implemented: one small local React/TypeScript screen using captured fixture data in `prototype/`. See the [README](../prototype/README.md) for commands and verification. A single screen limits scope within the overall 4-8 hour assignment budget; total effort remains unknown. Actual proposals and revisions are recorded in `prototype/docs/ai-decisions.md` as Codex work. No Claude Code work or candidate rejection has been fabricated; that assignment requirement remains outstanding.

### Required Behavior

1. Collect the fixed scenario: six boxes, each 60 x 40 x 40 cm; two months; required self-access at 22:00; Vietnamese language.
2. Calculate `6 * 0.60 * 0.40 * 0.40 = 0.576 CBM`, displayed as 0.58 CBM. Volume is not proof of physical fit; specific internal and door dimensions remain unverified.
3. Compare the two captured options together:

| Captured option | Monthly price before VAT | Two months before VAT | Conditions reported by STOW |
| --- | --- | --- | --- |
| 1 CBM Cool Locker | 990,000 VND | 1,980,000 VND | Special temperature; 24/7 access; eligibility and applicable conditions require confirmation before proceeding. STOW conversationally confirmed personal items and staff inspection/rack removal if necessary. |
| 2 CBM Non-AC | 1,188,000 VND | 2,376,000 VND | Standard self-storage; 24/7 access. Current price and availability unverified. |

4. Show the monthly difference of 198,000 VND and two-month difference of 396,000 VND, both before VAT.
5. Explain that the lower-priced Cool Locker is not automatically selected because it is a special product whose temperature, eligibility, staff preparation and protection terms must be confirmed. Keep these conditions distinct from standard AC self-storage.
6. Use qualified wording such as "lower-priced eligible option shown in the captured quote" only when the eligibility basis is stated. Until confirmation, use "lower-priced conditional option in the captured quote". Never describe the fixture as "live cheapest price".
7. Include source links and a "Verify current availability" action, localized as "Kiểm tra tình trạng còn chỗ hiện tại". Its future behavior is an ordinary link to `https://booking.mystorage.vn`, not an inventory API call or booking submission. Identify this as the general booking entry point, not a verified Cool Locker deep link.
8. Preserve Vietnamese for all visible inputs, comparisons, conditions, actions and responses when Vietnamese is selected.

Fixture provenance: candidate evidence CRE-003 through CRE-020 in [Evidence Register](evidence-register.md#candidate-reported-evidence). CRE-020 supplies the capture date 15 Sep 2026; exact time/message timestamps remain unknown. The alleged "10 units at 13:20 on 15 Sep 2026; updates every 10 minutes" is historical chatbot text with unverified timezone/source; no countdown, refresh promise or live stock indicator is implemented. The app links official service context and the general booking page. The STOW-provided facility map remains recorded in the evidence register, not independent confirmation of the quote.

### Exclusions

No real booking, payment, authentication, live inventory, chatbot implementation, backend, CRM integration, general-purpose calculator or unrelated visual redesign. No deployment or live integration is authorized.

### Acceptance Criteria

Verified in the implemented prototype with seven passing tests and a successful production build after `npm ci`; see [verification details](../prototype/README.md#verification-results). A separate interactive manual click-through remains unperformed because the browser connector was unavailable. Automated Chrome interactions and visual screenshot review were completed.

- The cheaper conditional option appears beside the standard option without a follow-up question.
- The recommendation explains the special-product trade-off, required confirmation and why Cool Locker was not automatically selected.
- Arithmetic is correct: 0.576 CBM rounded to 0.58 CBM; two-month totals 1,980,000 and 2,376,000 VND; difference 396,000 VND before VAT (198,000 monthly).
- The screen clearly labels captured prices and availability, the candidate-supplied capture date, unknown exact time and unverified current availability. Source links and the availability action do not imply live integration.
- The Vietnamese flow remains Vietnamese, including the quote/availability action and subsequent screen states.
- Installation from the lockfile, tests and production build succeeded using documented commands. This workspace is not a Git repository, so a literal fresh Git checkout was not tested; no untracked external data or environment secrets are needed. Chrome is the documented browser-test prerequisite.

## Required Report Wording

Include these qualifications in the assignment report:

> F-02 was reproduced in the candidate session, based on candidate-reported transcript evidence; it was not independently reproduced by this assistant. The issue is premature absolute wording and incomplete comparison, not necessarily an incorrect recommendation. STOW first described the 2 CBM Non-AC option as optimal cost, then described a lower-priced conditional Cool Locker option after follow-up.

> The reported difference is 198,000 VND/month, or 396,000 VND over two months, before VAT. This is a comparison of chatbot-quoted prices, not proven overspending. Cool Locker price and availability were chatbot claims at a specific time; independent bookability and exact price/message timestamps remain unverified.

> STOW explicitly confirmed personal-item eligibility and 24/7 self-access in the conversation. The reviewed public documentation does not clearly explain the relationship between Wine Storage and Cool Locker or the applicable personal-item, rack-removal and protection terms. This gap is not proof of a false product claim or invalid service. Root-cause hypotheses remain unverified.

> Transparent Storage Quote Recommendation is a local React/TypeScript screen using captured fixture data, implemented in Codex. Seven automated tests and the production build passed. It performs no live inventory checks or bookings. Calculated volume does not independently establish physical fit. Actual Claude Code work/revision evidence remains outstanding; a separate interactive manual walkthrough could not be completed because the browser connector was unavailable.

Update implementation tense and verification results only after the work actually occurs. Preserve evidence limits in the final report.

## Open Questions

- Whether the candidate completed STOW registration with the same email and phone planned for the application is unresolved.
- The initial chat UI reportedly had no visible login/register entry, but this does not prove authentication is absent or broken.
- F-01 is now marked `Reproduced` based on candidate screenshots and transcript, but it was not independently reproduced by this assistant.
- F-02 is `Reproduced` in the candidate session, Medium provisional, and selected as primary. Independent price, inventory and suitability verification remain incomplete.
- F-03 remains `Needs verification`; F-04 remains `Needs verification` for public documentation and terms after the latest response confirmed eligibility conversationally.
- The public pages reviewed do not establish the Cool Locker product, 15°C temperature, 55-65% humidity, 990,000 VND/month price, or live availability; this is an evidence gap, not proof the claims are false.
- The public pages reviewed do not explicitly establish that non-wine personal items may be stored under the Wine Storage booking category or that wine racks may be removed under a standard customer booking.
- Historical timestamps, session IDs, screenshot filenames, and total hours spent are unknown unless the candidate provides them.
