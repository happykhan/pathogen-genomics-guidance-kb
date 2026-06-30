# Source Card: Price et al. 2023 WGS Economic Evaluation Review

## Source Basis

- Price V, Ngwira LG, Lewis JM, Baker KS, Peacock SJ, Jauneikaite E, Feasey N. *A systematic review of economic evaluations of whole-genome sequencing for the surveillance of bacterial pathogens*. Microbial Genomics. 2023;9(2):mgen000947. doi:10.1099/mgen.0.000947.
- PMID: 36790430.
- PMCID: PMC9997737.
- Public full text: <https://pmc.ncbi.nlm.nih.gov/articles/PMC9997737/>.
- Public PDF: <https://pmc.ncbi.nlm.nih.gov/articles/PMC9997737/pdf/mgen-9-947.pdf>.
- Local PDF: not committed. Command-line PDF fetch returned a PMC download-preparation page during this update, so use the public full-text URL for extraction unless a real local PDF is provided later.

## Status

`source-backed; extracted at high level`

## Relevance

This paper is directly useful for the guide's economic value case. It reviews economic evaluations of WGS surveillance for bacterial pathogens and helps keep the guide from overclaiming universal cost-effectiveness.

## Relevant Extracted Points

- The review identified 681 articles, screened 49 full texts, and included 9 studies.
- Included studies were recent, all published since 2019.
- Evidence was heterogeneous across economic-analysis type, setting, pathogen, surveillance application, comparator, and reported outcomes.
- Five included studies assessed WGS surveillance for hospital infection prevention and control; four assessed foodborne pathogens.
- The included studies used varied forms of economic evaluation: cost-benefit, cost-utility, cost-effectiveness, combined analyses, and partial analysis.
- All included studies supported the use of WGS as a surveillance tool on economic grounds.
- The review emphasizes that earlier generation of WGS-based surveillance data can increase value when it enables timely implementation of control strategies.
- The authors caution that the available evidence is limited by marked heterogeneity and that further work should include analysis relevant to low- and middle-income countries and real-world effectiveness data.

## Useful For

- `Why pathogen genomics?` economic-value caveat.
- `Make the investment case with explicit assumptions`.
- `Cost the recurrent service, not only the initial purchase`.
- Future economic synthesis comparing foodborne surveillance, hospital infection prevention and control, AMR, and national surveillance scenarios.

## Current Use In App

- `src/data/guidanceBlocks.ts`: `why-pathogen-genomics`.
- `src/data/guidanceBlocks.ts`: `investment-case-assumptions`.
- `src/data/guidanceBlocks.ts`: `costing-recurrent`.
- `src/data/resources.ts`: `wgs-economic-review`.
- Synthesis note: `knowledge-base/extracted-notes/economic-value-and-costing-synthesis.md`.

## Gaps

- Needs structured extraction of the nine included studies before the guide uses individual numeric estimates.
- Evidence appears concentrated in high-income contexts; do not generalize to low- and middle-income country implementation without additional sources.
- The review is bacterial-pathogen focused and does not cover all viral, parasitic, or metagenomic surveillance use cases.
