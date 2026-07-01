# Extracted Note: Vignettes and Survey Scoring

## Source Basis

- VeriXiv manuscript Table 1, Figure 3 caption, and Figure 4 caption.
- Local PHA4GE supplementary-material extract reviewed outside the public source tree.
- Survey CSV extracts reviewed from the PHA4GE source pack.
- Public repository files: `docs/survey_data_anon.tsv`, `docs/infra_recs_analyses.ipynb`, `docs/figures/datainfra_impactoffeaturechoices.ipynb`.

## Status

`source-backed draft`

## Extracted/Adapted Text

The source material compares six implementation examples: INRB laptop/field bioinformatics, SANBI/UWC on-prem HPC, University of Ibadan/Seqera Tower, Terra for US public health laboratories, GalaxyTrakr/UseGalaxy-style systems, and NVI IRIDA.

The survey dimensions used to score or compare implementations are future proofing, ease of use for administrators, ease of use for users, data provenance and management, access control, external access requirements, flexibility, and scalability.

The manuscript notes that the INRB laptop model is an outlier with low scalability, flexibility, and access-control structure, while its advantage is independence from external resources. It also notes that centralised on-premises and cloud-backed platforms can meet different needs depending on provenance, user control, expertise, upload requirements, and institutional constraints.

## Implementation Notes

- Use vignettes as implementation examples, not as universal recommendations.
- Replace or supplement the radar/spider chart with a simpler editorial format before using it in WHO-style material.
- The public repository `tiers_table.md` can inform a maturity-model gap, but it should not be treated as a reviewed assessment instrument yet.

## Figures

- `knowledge-base/figures/briefs/implementation-comparison.md`
- `knowledge-base/figures/briefs/capability-maturity-model.md`

## Gaps

- Need a reviewed maturity assessment rubric before producing a formal scoring tool.
- Need a source-backed interpretation note explaining how to use vignette scores without overgeneralising platform performance.
