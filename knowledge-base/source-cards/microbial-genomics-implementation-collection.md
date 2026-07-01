# Source Card: Microbial Genomics Implementation Collection

## Source Basis

- Microbiology Society / Microbial Genomics collection: *Implementation of Genomics in Clinical and Public Health Microbiology*.
- Collection URL: <https://www.microbiologyresearch.org/content/implementation-of-genomics-in-clinical-and-public-health-microbiology>.
- Publisher collection page reports 24 articles. The current KB separately indexes Price et al. 2023 economic review as `wgs-economic-review`; this source card indexes the other implementation-focused papers from the collection.

## Status

`abstract-level extracted source pack; full-text extraction pending`

## Relevance

This collection is highly relevant to the guide because it contains applied papers on accreditation, ISO standards, proficiency testing, bioinformatics implementation, inter-laboratory harmonisation, outbreak workflows, validation, public-health decision-use, SARS-CoV-2 implementation, and organism-specific examples.

## Indexed Papers

| Title | DOI / URL | Main use in KB |
| --- | --- | --- |
| Enhancing capacity for national genomics surveillance of antimicrobial resistance in public health laboratories in Kenya | `10.1099/mgen.0.001098` | AMR capacity building; public-health laboratory implementation; workforce |
| Public health implementation of pathogen genomics: the role for accreditation and application of ISO standards | `10.1099/mgen.0.001097` | Accreditation; quality management; ISO standards |
| Results of the 2020 Genomic Proficiency Test for the network of European Union Reference Laboratory for Antimicrobial Resistance assessing whole-genome-sequencing capacities | `10.1099/mgen.0.001076` | Proficiency testing; AMR laboratory networks; quality assurance |
| Accelerating bioinformatics implementation in public health | `10.1099/mgen.0.001051` | Bioinformatics implementation; infrastructure; workforce |
| European Union Reference Laboratories support the National food, feed and veterinary Reference Laboratories with rolling out whole genome sequencing in Europe | `10.1099/mgen.0.001074` | Reference-laboratory support; WGS rollout; food/feed/veterinary network implementation |
| Rapid metagenomic sequencing for diagnosis and antimicrobial sensitivity prediction of canine bacterial infections | Crossref returned preprint DOI `10.1101/2023.01.30.526267`; publisher DOI needs verification | Metagenomic implementation; AMR prediction; veterinary/One Health edge case |
| Pathogen genomics in public health laboratories: successes, challenges, and lessons learned from California's SARS-CoV-2 Whole-Genome Sequencing Initiative, California COVIDNet | `10.1099/mgen.0.001027` | SARS-CoV-2 implementation; public-health laboratory scale-up; lessons learned |
| How public health authorities can use pathogen genomics in health protection practice: a consensus-building Delphi study conducted in the United Kingdom | `10.1099/mgen.0.000912` | Decision-use; public-health practice; consensus recommendations |
| Multiplex MinION sequencing suggests enteric adenovirus F41 genetic diversity comparable to pre-COVID-19 era | `10.1099/mgen.0.000920` | Amplicon/nanopore sequencing; viral surveillance |
| Making microbial genomics work for clinical and public health microbiology | `10.1099/mgen.0.000900` | Editorial framing; clinical/public-health implementation |
| Multi-laboratory evaluation of the Illumina iSeq platform for whole genome sequencing of Salmonella, Escherichia coli and Listeria | `10.1099/mgen.0.000717` | Platform evaluation; multi-laboratory validation; enteric bacteria |
| Evaluation of WGS performance for bacterial pathogen characterization with the Illumina technology optimized for time-critical situations | `10.1099/mgen.0.000699` | Time-critical WGS performance; bacterial characterization |
| Whole-genome-based phylogenomic analysis of the Belgian 2016-2017 influenza A(H3N2) outbreak season allows improved surveillance | `10.1099/mgen.0.000643` | Influenza surveillance; phylogenomics |
| Centre-specific bacterial pathogen typing affects infection-control decision making | `10.1099/mgen.0.000612` | Infection-control decisions; local typing differences |
| Phylogenomics and antimicrobial resistance of Salmonella Typhi and Paratyphi A, B and C in England, 2016-2019 | `10.1099/mgen.0.000633` | Enteric fever; AMR surveillance; England public-health implementation |
| Harmonization of whole-genome sequencing for outbreak surveillance of Enterobacteriaceae and Enterococci | `10.1099/mgen.0.000567` | Harmonisation; outbreak surveillance; inter-laboratory comparability |
| Application of a strain-level shotgun metagenomics approach on food samples: resolution of the source of a Salmonella food-borne outbreak | `10.1099/mgen.0.000547` | Foodborne outbreak source attribution; metagenomics |
| Rapid nanopore-based DNA sequencing protocol of antibiotic-resistant bacteria for use in surveillance and outbreak investigation | `10.1099/mgen.0.000557` | Rapid nanopore workflow; AMR outbreak investigation |
| Large-scale sequencing of SARS-CoV-2 genomes from one region allows detailed epidemiology and enables local outbreak management | Crossref returned preprint DOI `10.1101/2020.09.28.20201475`; publisher DOI needs verification | Local SARS-CoV-2 outbreak management; detailed epidemiology |
| Genomic surveillance, characterization and intervention of a polymicrobial multidrug-resistant outbreak in critical care | `10.1099/mgen.0.000530` | Critical-care outbreak intervention; MDR organisms |
| Validation strategy of a bioinformatics whole genome sequencing workflow for Shiga toxin-producing Escherichia coli using a reference collection extensively characterized with conventional methods | `10.1099/mgen.0.000531` | Bioinformatics workflow validation; STEC; reference collections |
| Neisseria gonorrhoeae clustering to reveal major European whole-genome-sequencing-based genogroups in association with antimicrobial resistance | `10.1099/mgen.0.000481` | Gonorrhoea WGS clustering; AMR surveillance |
| Discordant bioinformatic predictions of antimicrobial resistance from whole-genome sequencing data of bacterial isolates: an inter-laboratory study | `10.1099/mgen.0.000335` | AMR prediction discordance; inter-laboratory bioinformatics comparison |

## Current Use In App

- `src/data/microbialGenomicsCollection.ts`: resource-finder records for the implementation collection.
- `src/data/resources.ts`: imports the collection records.
- `knowledge-base/extracted-notes/microbial-genomics-implementation-collection.md`: abstract-level extracted notes.
- `src/data/guidanceBlocks.ts`: collection papers support implementation, validation, workflow, workforce, decision-use, and maturity sections.

## Gaps

- Individual articles still need full-text extraction before the guide uses detailed protocol steps, metrics, or numeric performance claims.
- Two items have only preprint DOI metadata from Crossref in this pass and need publisher DOI verification.
- No PDFs are committed. Add public `pdfUrl` values only where stable public PDF URLs are verified.
