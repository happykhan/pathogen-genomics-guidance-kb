# Source Card: Pathogen Genomics in Public Health

## Source Basis

- Local PDF: `/Users/nfareed/Downloads/nihms-1068367.pdf`
- Extracted temporary text: `tmp/pdfs/source-extracts/nihms-1068367.txt` (not committed)
- Citation: Armstrong GL, MacCannell DR, Carleton HA, Neuhaus EB, Bradbury RS, Posey JE, Taylor J, Gwinn M. Pathogen Genomics in Public Health. N Engl J Med. 2019;381(26):2569-2580. doi:10.1056/NEJMsr1813907.

## Status

`source-backed index`

## Extracted/Adapted Text

This review is useful for high-level public-health framing rather than detailed implementation design. It describes pathogen genomics as already delivering public-health value through foodborne disease outbreak investigation, tuberculosis control, influenza surveillance, malaria drug-resistance surveillance, parasitic disease investigation, HIV molecular surveillance, and other infectious-disease applications.

The paper identifies infrastructure and bioinformatics as early implementation barriers: public-health adoption required investment in sequencing equipment, high-performance computing infrastructure to move, store, and analyse large sequence datasets, and integration of bioinformatics into public-health practice.

The data-integration section is directly relevant to this knowledge base. It states that laboratory and epidemiological data are often managed separately, but genomic data need to be integrated with epidemiological data to realise their full value. It also points to tools for visualising and analysing epidemiological and phylogenetic data together.

The workflow section supports gaps around workflow management and data integration. It describes complex workflows for sequencing, raw-data analysis, processed-data storage, epidemiological integration, and secure information sharing. It notes that pipelines can automate quality validation, assembly, and phenotype inference, while user-friendly workflow and integration tools may be lacking.

The data-openness section supports data-sharing content. It describes US public-health agencies uploading pathogen sequence data to NCBI-hosted public databases and contributing to global databases such as ReSeqTB and GISAID, while also emphasising that openness is not unconditional and must be balanced against confidentiality and risk.

The conclusion supports workforce content: microbiologists need microbial genomics knowledge, epidemiologists need skills and tools to translate genomic data into public-health action, and both groups need basic bioinformatics vocabulary.

## Gaps It Helps Fill

- Public-health framing and value proposition.
- Data integration between laboratory, genomic, epidemiological, and visualisation systems.
- Workflow/software gaps around managing NGS workflows and integrating data.
- Data-sharing principles, including the balance between openness and confidentiality.
- Workforce and data-science capacity.
- Analysis-to-decision use examples.

## Remaining Limits

- Not an operational implementation manual.
- Limited detail on metadata standards, identifier models, validation/change control, storage architecture, retention, costing, or governance procedures.
