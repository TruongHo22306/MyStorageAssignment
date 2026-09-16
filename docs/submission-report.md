# MyStorage Product Engineering Intern Assignment

Draft from the candidate's perspective. Tool attribution is corrected from my transcript reconciliation; Claude Code use is not established. Evidence attachments and final effort still need confirmation before PDF submission.

## Objective And Audit Method

I audited STOW's storage recommendations in Vietnamese: six boxes, each 60 x 40 x 40 cm, two months, self-access at about 22:00.

I used manual conversations and compared claims with official Self Storage, Size Guide and Wine Storage pages in the [evidence register](evidence-register.md). The assignment was retrieved with `Accept: text/markdown`. AI assisted evidence organization and implementation; no automated STOW loops or test bookings were used.

Sequences below are action summaries, not verbatim prompts. Five JPG files are now present in `docs/evidence/`; their contents, claim mapping and privacy redactions still need review before PDF packaging. A transcript export is not identified. Reproduction refers to my reported session, not independent assistant reproduction.

## Primary Finding: F-02

**Initial "Cheapest Option" Recommendation Omits a Cheaper Conditional Option**

Status: Reproduced in my candidate session. Severity: Medium, provisional.

**Goal/preconditions:** the lowest-cost option supporting the stated scenario at 375 Vo Nguyen Giap. Prices and conditions are chatbot-reported.

**Reported sequence and actual behavior:**

1. STOW recommended 2 CBM Non-AC at 1,188,000 VND/month as "optimal cost", omitting Cool Locker.
2. I challenged the cost. STOW disclosed 1 CBM Cool Locker at 990,000 VND/month before VAT.
3. STOW later confirmed personal-item eligibility and private 24/7 access conversationally, describing a repurposed Wine Locker, Wine Storage booking and staff rack removal if necessary.

**Expected:** present the standard and lower-priced conditional options together; explain temperature, eligibility and verification requirements before making an absolute cost claim.

**Impact:** the captured difference is 198,000 VND/month or 396,000 VND over two months before VAT, not guaranteed savings or proven overcharging. It may affect the purchase decision, but suitability/availability uncertainty keeps severity provisional. The standard recommendation may still be appropriate.

**Improvement:** qualify cost wording and show both options with conditions. Ranking, taxonomy or changed inventory are unverified root-cause hypotheses. Evidence: CRE-003 through CRE-019 in the [register](evidence-register.md#candidate-reported-evidence); details and missing original-message references in [findings](findings.md).

## Secondary Finding: F-01

**Quote Button Does Not Preserve Vietnamese**

Status: Reproduced in my candidate session. Severity: Low.

**Goal and preconditions:** continue a Vietnamese conversation through the self-storage quote action.

**Reported sequence:** STOW answered in Vietnamese but displayed "Get Self Storage quote" in English. Clicking switched the response to English. I requested Vietnamese and received it; clicking again reportedly inserted "Help me get a Self Storage quote" and triggered English again.

**Expected/actual:** preserve Vietnamese; instead the action switched language twice. Repetition and confusion justify Low severity; no blocked booking or financial loss is established. Requesting Vietnamese is a workaround.

**Improvement:** preserve language in CTA labels/payloads. A hardcoded English payload is an unverified hypothesis. Evidence: CRE-001 and [F-01](findings.md#f-01-quote-button-does-not-preserve-vietnamese); the newly present `docs/evidence/E04-language-switch.jpg` still needs content/redaction review and sequence mapping. The prototype preserves Vietnamese text without fixing STOW's production chat button.

## Verification Limits: F-03 And F-04

These are gaps, not proven bugs. Official pages describe 1-23 CBM self-storage, 24/7 access, six standard boxes per 1 CBM, AC storage around 23-25 degrees C and wine storage at 12-15 degrees C with specialized shelving. They do not verify the Cool Locker/personal-item booking relationship, rack-removal terms, quoted price or inventory.

Conversational eligibility does not independently verify protection terms, locker/door dimensions, physical fit or bookability. Missing public detail does not prove a false claim. See [official source records](evidence-register.md#official-facts-established).

## Prototype And Scenario Evidence

[Transparent Storage Quote Recommendation](../prototype/README.md) is a local React/TypeScript/Vite screen using captured fixtures, not a production STOW fix. It excludes chatbot, inventory integration, backend, authentication, payment and booking. [Source repository](https://github.com/TruongHo22306/MyStorageAssignment).

Requirements: Node 22.12+, npm and installed Chrome for Playwright. From the repository root:

```sh
cd prototype
npm ci
npm run dev
```

Checks: `npm test` and `npm run build`. Use `npm.cmd` in PowerShell if needed; stop Vite before `npm ci` to avoid file locks. The availability action only links to MyStorage's general booking page.

At 60 x 40 x 40 cm per box:

| Boxes | Raw / displayed CBM | Prototype behavior |
| --- | --- | --- |
| 6 | 0.576 / 0.58 | Neither nominal capacity is exceeded; show conditional price comparison and default heading. |
| 12 | 1.152 / 1.15 | Cool Locker exceeds capacity; heading: "One option exceeds nominal capacity". |
| 24 | 2.304 / 2.30 | Both exceed; heading: "A different storage option is needed"; replace price-difference messaging. |
| Back to 6 | 0.576 / 0.58 | Restore the default comparison and heading. |

At six boxes, two-month captured totals are 1,980,000 and 2,376,000 VND before VAT. The prototype compares unrounded volume against nominal capacity; being below capacity does not prove packing fit.

The [test](../prototype/tests/quote.spec.ts) checks this sequence in both languages and rejects the lower-price heading when capacity is exceeded. I checked the desktop sequence. Existing [desktop](../prototype/docs/verification/desktop.png), [mobile](../prototype/docs/verification/mobile.png) and [320px](../prototype/docs/verification/narrow.png) images cover automated default scenarios; my 12/24-box captures are not attached.

## AI Contribution And Review

My reconciled transcripts identify Codex for the initial prototype, Claude Opus via Antigravity IDE for capacity-first messaging (`0162e89`), and Codex for the explanation heading and Vietnamese/English assertions (`17e19d3`). The last transcript records changes to `App.tsx`, `copy.ts` and `quote.spec.ts`. Attribution comes from those transcripts, not from commit metadata.

Correction: my earlier statement that Claude Code performed both follow-ups was mistaken and is withdrawn. The reconciled sessions do not establish Claude Code use. The assignment expects Claude Code use and an explanation of rejected or revised output, not an entirely Claude-built prototype; I am not marking that requirement complete.

I identified the scenario and reviewed an image with ChatGPT after the Antigravity iteration, revealing "Giá thấp hơn, điều kiện khác nhau" despite both units exceeding capacity. I requested correction; Codex implemented the patch, not me. Commits `0162e89` and `17e19d3` corroborate the omission/correction. Earlier passing tests covered warnings/body, not the heading. The review image remains missing.

This correction documents my transcript reconciliation; the documentation assistant did not newly inspect session exports or rerun checks. See the [iteration record](../prototype/docs/ai-decisions.md#iteration-record). Book Illustration attribution is outside this reconciliation and remains unchanged.

## Verification, Contact Details And Effort

The initial Codex report recorded 7/7 tests and build passed. The Claude Opus via Antigravity transcript reported 12/12 tests and build passed but the implementation missed the heading. Historical direct Codex execution for the final heading correction recorded a regression failure before correction, then **12/12 tests and production build passed**, consistent with my reconciled transcript. Nothing was rerun for this documentation update. Automated viewport tests do not establish my manual mobile testing. Portable logs remain to be attached.

I supplied my real email and phone in the STOW session. STOW said it saved them in CRM and did not create a booking. CRM persistence, registration and session association are not independently verified. Full contact details are intentionally omitted from public project documents.

11:21-15:26 on 15 Sep 2026 is approximately **4 hours 5 minutes elapsed**, not continuous work. Final effort is **to be confirmed**, with no invented task hours; see [time log](time-log.md). PDF packaging still needs redacted evidence, portable transcript excerpts, final effort and CV/application material. The Claude Code requirement is not demonstrated by the reconciled sessions. No deployment or submission is claimed.
