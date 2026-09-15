# Implementation Notes

## Selected Approach

One React screen with local state, an immutable fixture and pure calculation/validation functions. Vite serves it locally and produces static files. No router, global store or component framework is needed for one form and two options. Lucide supplies interface icons; plain CSS supplies layout.

The approach comparison and actual corrections are in [AI Decisions](ai-decisions.md). Static HTML was rejected because the editable form/language flow benefits from React state. A multi-step wizard was rejected because it adds navigation and could hide the comparison. These are actual Codex proposals, not Claude Code output or candidate rejection.

## Data Flow

1. `App.tsx` stores strings so a temporarily empty field remains editable.
2. `evaluateInputs` checks positive finite values, whole box/month counts and valid 24-hour time. Invalid inputs return errors and no result.
3. A valid result contains raw volume, duration and price differences. Only displayed volume is rounded; monetary values use integer VND.
4. JSX displays both options and their conditions. It never chooses an unconditional winner or changes captured prices based on volume.
5. Changing language selects the complete text dictionary and document language. No chatbot message or remote state exists.

## Assumptions And Trade-offs

- F-02 is reproduced in one candidate-reported session. It concerns incomplete comparison and premature absolute wording; no actual overcharge or incorrect original recommendation has been established.
- The latest brief supplies the capture date 15 Sep 2026. This narrows the earlier unknown date for the quote fixture only. It does not independently verify date, prices, inventory or exact time, or date F-01's screenshots.
- Both 24/7 access claims and the Cool Locker's approximately 15°C condition come from the candidate-reported STOW conversation, not independently verified operational guarantees.
- Personal-item eligibility was confirmed conversationally. Current eligibility, temperature, preparation, protection terms and availability still require verification. Standard storage also needs verification.
- Six-box volume is 0.576 CBM. Neither this nor the public six-standard-box statement proves exact fit. Changed needs receive a suitability warning; volume above nominal capacity is flagged without packing logic.
- Whole months avoid inventing prorating rules. Totals multiply a captured monthly price; they are not binding quotes or all-in estimates.
- "Lower captured price" compares only the two fixture options, not the entire catalog.
- Both languages are supported fully. Native time formatting remains browser/OS-controlled; computed access copy uses 24-hour time.
- Playwright covers pure calculations and real React browser interaction in one runner. It uses local Chrome without a DOM emulator or separate test stack. Reviewers need Chrome installed and port 4174 free.
- The local reference photo adds actual self-storage context; its caption disclaims Cool Locker verification. No external image request is needed during app use.

## Why No Backend

The finding concerns what customers see before choosing, not an observed inventory-service defect. Fixtures demonstrate simultaneous comparison and qualified wording. A backend, chatbot, live inventory, authentication, payment or CRM would add unverified business rules and exceed scope. Ordinary source links let customers verify separately without implying integration.

## Verification Boundary

See [README results](../README.md#verification-results). Tests/screenshots cover this prototype only. They do not reproduce STOW, independently confirm quotes or satisfy a candidate manual test. The interactive browser connector was unavailable; headless Chrome testing and visual screenshot review were completed.

## Assignment Provenance

The session ran in OpenAI Codex. The prompt's "You are Claude Code" wording does not change the tool that performed the work. Actual Claude Code usage, candidate understanding/review and authentic rejected or revised Claude Code output remain separate assignment requirements. None is claimed here.

## Technical References

Official [Vite documentation](https://vite.dev/guide/) was consulted at approximately 2026-09-15 13:47 +07:00 for the supported Node version and local build/dev workflow. Local Node satisfied the documented 22.12+ baseline. The [Vitest guide](https://vitest.dev/guide/) was retrieved while considering tests; Vitest was not installed because one Playwright runner sufficed. These are technical references, not STOW evidence.
