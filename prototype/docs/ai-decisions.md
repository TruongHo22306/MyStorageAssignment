# AI Decisions

## Provenance

These proposals were generated in this session by OpenAI Codex on 2026-09-15, before implementation. The request was addressed to Claude Code, but this is not a Claude Code session. No Claude Code output or candidate rejection is claimed. The assignment's requirement for actual Claude Code work remains outstanding.

## Approaches Proposed In This Session

| Approach | Decision | Reason |
| --- | --- | --- |
| Static HTML with minimal JavaScript | Rejected by the coding assistant | Small initial page, but editable fields, inline validation and language updates would require manual DOM synchronization. It also does not follow the requested React/TypeScript stack. |
| One React screen, a local quote fixture and small calculation functions | Selected by the coding assistant | Demonstrates both conditional options immediately. Local state handles edits without routing, network state or persistence. Calculations can be tested separately from the screen. |
| Multi-step quote wizard | Rejected by the coding assistant | Extra navigation and state could hide the cheaper option again; unnecessary for seven inputs and two captured options. |

These are actual design proposals, not rejected generated implementation code. Do not represent them as candidate-reviewed Claude Code output.

## Implementation Decisions

- Use Playwright as the single test runner for arithmetic and real React browser behavior, rather than adding both a DOM emulator and a second browser test stack. Local Chrome is available in this environment.
- Keep editable fields as strings until validation succeeds. This preserves empty input during editing and prevents an invalid value from turning into a displayed recommendation.
- Show both captured options without an unconditional winner. A smaller calculated volume cannot prove fit, item eligibility or current inventory.
- Use a complete Vietnamese/English text dictionary for the small language toggle. Product names may remain English.
- Treat the capture date supplied in the implementation brief as candidate-reported. The exact time remains unknown; no live stock count is displayed.

## Revisions During Verification

- Initial build failed with TypeScript TS2882 for the CSS side-effect import. Added `src/vite-env.d.ts` referencing `vite/client`, which declares Vite's asset imports. Kept strict type checking enabled. This was an actual Codex-generated omission and correction, not Claude Code output or a candidate rejection.
- The first browser test launch failed before running tests because the sandbox denied creation of Vite/test output directories (EPERM). Rerun with local filesystem access; this is an environment limitation, not a product test failure.
- The first completed browser run passed six tests and failed one test selector: `getByRole('status')` matched both the volume `<output>` and the changed-needs notice. Scoped the selector to the notice text. The failure did not show incorrect application behavior; the correction preserves the output element's accessibility semantics.
- Visual review of the 320px screenshot found that the two-column form made dimension inputs narrow enough to clip their displayed values, despite no document overflow. Revised the small-screen form to full width, keeping the three dimensions together. Added a minimum rendered input-width assertion for mobile. This is an actual visual defect found and corrected by Codex; it is not a claimed candidate or Claude Code review.

## Capacity Constraints Over Price-Comparison Messaging (2026-09-15)

Session tool: Claude Opus 4.6 (Thinking) via Antigravity IDE. The initial prototype was built by OpenAI Codex; that attribution is preserved.

### Problem Identified

The existing prototype displayed an over-capacity `field-error` warning at the bottom of each card (after the detail list), but the "Lower captured price · Conditional" ribbon, savings/price-difference summary and "Lower price, different conditions" explanation remained unconditionally prominent. When one or both options exceeded nominal capacity, the UI still visually prioritized price-comparison messaging, making over-capacity status secondary.

### Actual Changes

| File | Change |
| --- | --- |
| `src/calculations.ts` | Added `capacityStatus()` function: compares unrounded volume against each option's `capacityCbm` using strict `>`, returns `{coolExceeds, standardExceeds, overall}`. Added `capacity` field to `evaluateInputs` result. |
| `src/copy.ts` | Added six bilingual strings: `exceedsCapacity` (ribbon status), `oneExceedsSummary`/`bothExceedsSummary` (replace savings section), `oneExceedsExplanation`/`bothExceedsExplanation` (replace explanation section). |
| `src/App.tsx` | Card ribbon shows "Exceeds nominal capacity" with `over-capacity` CSS class when the option exceeds. Capacity warning moved near heading (after `<h3>`, before price) instead of after the detail list. Savings section and explanation conditionally render: unchanged when both fit; replaced with capacity-aware messages when one or both exceed. Pricing disclaimer retained in all states. |
| `src/styles.css` | Added `.quote-ribbon.over-capacity` (amber warning tone), `.capacity-warning` (red status near heading), `.capacity-notice` (replaces savings border block). |
| `tests/quote.spec.ts` | Added `capacityStatus` unit test (6 boundary values). Added browser regression tests for 6 boxes (both fit — unchanged UI), 12 boxes (cool exceeds, standard fits), 24 boxes (both exceed), and capacity boundary (volume exactly at 1.0 CBM — strict `>` means no exceeds). Each browser test returns to default input. |

### Design Reasoning

- Volume at or below nominal capacity is not treated as proof of physical fit or booking eligibility; the existing `text.fit` disclaimer remains.
- Strict `>` comparison was already used in the original code (line 105). The new `capacityStatus` function reuses it consistently.
- Captured prices are retained as reference information on over-capacity cards; they are not hidden.
- The savings section is replaced (not just annotated) when capacity is exceeded, because the price difference is not a meaningful comparison when one or both options cannot nominally hold the items.
- No new units, prices, backend, packing algorithm or live integrations were introduced.
