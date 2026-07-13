# HeadersIQ - Research Website

This repository hosts the official website of the **HeadersIQ** research project under the GitHub organisation **HeadersIQ**.

**Live website:** https://headersiq.github.io/

**Interactive Code Runner:** https://headersiq-runner.australiaeast.cloudapp.azure.com

HeadersIQ investigates an explainable, header-centric approach to semantic type detection, Semantic Table Interpretation, and Data Quality Assessment. It uses column headers as semantic signposts to infer intended formats and identify potential data quality issues early and transparently.

## Website Contents

The website brings together the main public outputs of the project:

- an overview of the HeadersIQ research and its header-centric approach;
- peer-reviewed publications, preprints, and supporting artefacts;
- the public HeadersIQ Code Runner;
- videos, audio summaries, and research presentations;
- information about the researcher and related project resources;
- links to research code, GitHub resources, and datasets.

## HeadersIQ Code Runner

The public Code Runner provides a user-facing way to execute the current HeadersIQ pipeline directly from a web browser, without installing the application locally.

Users can:

- upload a local tabular dataset;
- select a compatible Kaggle dataset;
- run the header-centric semantic analysis;
- inspect inferred semantic formats;
- review detected Data Quality Issues;
- follow execution progress;
- download the generated assessment outputs.

Supported local tabular formats include CSV, TXT, DATA, Excel, TSV, JSON, JSONL, and Parquet.

The Code Runner is available at:

https://headersiq-runner.australiaeast.cloudapp.azure.com

## Publications and Recognition

The website currently presents two peer-reviewed international publications:

1. **An Explainable Header-Centric Framework for Large-Scale Semantic Table Interpretation and Data Quality Assessment**, presented at the Workshop on Quality of Knowledge Graphs, co-located with ESWC 2026, and selected as one of four finalists for the Best Paper Award.
2. **Attribute-Based Semantic Type Detection and Data Quality Assessment**, published at IEEE/ACM BDCAT 2024 and later recognised with an Honourable Mention at the inaugural Curtin EECMS HDR Forum.

Publication details and supporting artefacts are available on the website's Publications page.

## Repository Structure

```text
/
├── index.html                  # Homepage
├── publications.html           # Papers, preprints, and artefacts
├── videos.html                 # Videos, talks, and audio summaries
├── about.html                  # Researcher profile and project information
└── assets/
    ├── images/                 # Logos, awards, screenshots, and page images
    ├── videos/                 # Video files and related media
    ├── pdfs/                   # Papers, certificates, and supporting documents
    ├── style.css               # Shared website styles
    ├── site.js                 # Shared JavaScript
    ├── site.webmanifest        # Web application metadata
    ├── favicon.ico             # Browser icon
    └── favicon.png             # PNG browser icon
```

## Related Resources

- **Kaggle profile:** https://www.kaggle.com/marcelovalentimsilva

## Researcher

HeadersIQ is developed by **Marcelo Valentim Silva**, PhD Candidate at Curtin University.

Additional information is available on the website's About page.
