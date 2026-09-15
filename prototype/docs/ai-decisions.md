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
