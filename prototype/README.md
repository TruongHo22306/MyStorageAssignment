# Transparent Storage Quote Recommendation

A small local React/TypeScript prototype for [F-02](../docs/findings.md): the initial optimal-cost recommendation omitted a lower-priced conditional option. It shows both captured options and their trade-offs immediately. It does not prove that STOW overcharged anyone or that its original recommendation was factually wrong.

## Run

Requirements: Node.js 22.12 or newer, npm, and Google Chrome for the browser tests. Verified on Windows with Node 22.12.0 and npm 10.9.0. Dependencies are pinned in `package-lock.json`.

From the assignment root:

```sh
cd prototype
npm ci
npm run dev -- --port 5173 --strictPort
```

Open <http://127.0.0.1:5173>. If that port is occupied, choose another, for example `--port 5175`. The server binds only to loopback. In Windows PowerShell, use `npm.cmd` instead of `npm` if script execution policy blocks `npm.ps1`; no policy change is needed.

```sh
npm test
npm run build
```

Tests use installed Google Chrome (`channel: 'chrome'`) and start/stop their own local Vite server on port 4174, which must be free. No separate browser download is necessary on this machine. There is no configured Firefox, Safari or physical-device test coverage.

To inspect the production build locally:

```sh
npm run preview -- --port 4173 --strictPort
```

The preview command is provided for use later; the recorded browser tests exercised the development server, while the production build compiled successfully.

## What Is Simulated

- Two local quote fixtures: 1 CBM Cool Locker at 990,000 VND/month and 2 CBM Non-AC Self Storage at 1,188,000 VND/month, before VAT.
- Editable box count, dimensions, whole-month duration and desired access time; volume and straight monthly-price multiplication.
- Vietnamese by default, with complete English copy available through a two-button language control.
- Conditional comparison and source/verification notices. Changing inputs does not fetch or discover new products.

Prices, availability, eligibility and access are captured chatbot claims, not live data or independently verified terms. The candidate supplied the fixture capture date of 15 Sep 2026 in the implementation brief; the exact time is unknown. No inventory count or automatic refresh is simulated. The 8% VAT exclusion comes from the supplied quote, not independent tax guidance.

There is no chatbot, real booking, backend, authentication, payment, CRM, live inventory or external API call. The availability action is an ordinary link to MyStorage's general booking page. It does not book, prefill details or send form values. The UI downloads no external image/font at runtime; its one reference photo is local.

## Default Walkthrough

1. Leave Vietnamese selected. Defaults: six boxes, 60 x 40 x 40 cm, two months, self-access at 22:00.
2. Read 0.576 CBM unrounded and 0.58 CBM displayed. This is volume, not a packing/fit guarantee.
3. Compare both options without a follow-up: 990,000 vs 1,188,000 VND/month; totals 1,980,000 vs 2,376,000 VND for two months before VAT.
4. Read the difference: 198,000 VND/month and 396,000 VND over two months before VAT.
5. Read the Cool Locker conditions and why ordinary Non-AC storage may still be preferable. Both access matches are attributed to the captured conversation.
6. Clear a dimension or enter zero. Its inline error appears and the comparison disappears. Restore a positive dimension to recover. The reset icon restores the six-box scenario without changing language.
7. Change to 30 boxes: volume becomes 2.88 CBM, both nominal capacities are exceeded, and a changed-needs warning appears. Prices remain captured references, not new suitability recommendations.
8. Switch to English and back; headings, conditions, warnings and the availability action update together.
9. Inspect the source links and verification notice. The availability action opens the general external booking page; real booking/contact is outside this walkthrough. No external link was followed during tests.

## Verification Results

Verified on 2026-09-15 after a clean `npm.cmd ci`:

- `npm.cmd test`: 7 passed. Covers volume/rounding, price arithmetic, validation/overflow, default Vietnamese, conditional wording, input recovery/reset, changed-needs warnings, complete language switching, image loading and layout.
- `npm.cmd run build`: TypeScript check and Vite production build passed.
- Browser viewports: 1280 x 900, 390 x 844 and 320 x 740. No horizontal document overflow; cards align side by side on desktop and stack on mobile; no browser page errors in that test.
- Default-load network observation: no external requests; local reference image loaded successfully.
- Screenshots at all three widths were visually inspected by the coding assistant: [desktop](docs/verification/desktop.png), [mobile](docs/verification/mobile.png), [320px](docs/verification/narrow.png). The 320px review led to wider dimension inputs and a regression check. These are prototype evidence, not STOW evidence.
- A separate interactive manual click-through was attempted, but the browser connector reported no available browsers. Automated real-Chrome interactions and screenshot review were completed; do not report the interactive walkthrough as passed.

The first build needed Vite's CSS import types; the first completed browser run needed a more specific test selector. Actual corrections and the earlier sandbox launch error are recorded in [AI Decisions](docs/ai-decisions.md).

## Known Limitations

- No independently verified price, bookability, exact locker/door dimensions, item suitability, protection terms or rack-removal policy. Public service pages do not resolve all Cool Locker details.
- Whole boxes/months only. Dimensions allow positive decimals. This is a two-option comparison, not a general-purpose calculator or billing engine. Fees, discounts, deposits and prorating are not calculated.
- The native time input may display AM/PM according to the browser/OS even in Vietnamese; its stored value and the recommendation use 24-hour `HH:MM`.
- Browser automation is not a full accessibility audit or physical mobile-device check.
- This implementation was generated and revised by OpenAI Codex, not Claude Code. It does not fulfill the assignment's actual Claude Code output/revision evidence requirement. No candidate review/rejection or Claude Code execution is invented.
- Candidate's prior work duration and overall remaining 4-8 hour budget are still unknown.

## File Guide

| File | Responsibility |
| --- | --- |
| `src/quote-fixture.ts` | Captured quote numbers, date provenance and public links. |
| `src/calculations.ts` | Validation, volume, totals, differences and display rounding. |
| `src/copy.ts` | Vietnamese and English customer-facing text. |
| `src/App.tsx` | Local form state and comparison/verification screen. |
| `src/styles.css` | Responsive layout, focus styles and visual styling. |
| `src/main.tsx`, `src/vite-env.d.ts` | React mounting and Vite import types. |
| `tests/quote.spec.ts` | Seven arithmetic/browser tests and screenshots. |
| `playwright.config.ts`, `vite.config.ts`, `tsconfig.json` | Test, build and type-check settings. |
| `package.json`, `package-lock.json`, `index.html`, `.gitignore` | Commands, dependencies, HTML entry and generated-file exclusions. |
| `public/self-storage.webp` | Local official-page photo, attributed below. |
| `README.md`, `docs/implementation-notes.md`, `docs/ai-decisions.md` | Run instructions, reasoning, actual proposals and corrections. |
| `docs/verification/desktop.png`, `docs/verification/mobile.png`, `docs/verification/narrow.png` | Prototype screenshots at the tested widths. |

`node_modules/`, `dist/`, `test-results/`, `playwright-report/` and local `*.log` files are generated and ignored. Include source, lockfile and reference image when sharing.

## Reference Photo

The [public Self Storage page](https://mystorage.vn/services/self-storage/) supplies the [locker-access photo](https://mystorage.vn/photos/services--self-storage/self-storage-thue-kho-dam-bao-rieng-tu.webp), downloaded on 2026-09-15 at approximately 13:49 +07:00. Copyright remains with its owner; no new license or Cool Locker-specific evidence is asserted. It is shown uncropped as general self-storage context, with that limitation visible in its caption.
