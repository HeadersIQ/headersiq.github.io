# HeadersIQ — Research Website

This repository hosts the **official website for the HeadersIQ project** under the GitHub organisation **HeadersIQ**.  
Live site: `https://headersiq.github.io/`

The site aggregates:
- **About** the research (header-centric CTA and the HeadersIQ metric)
- **Publications** (papers, DOIs, artefacts)
- **Videos & Audio** (talks, demos, NotebookLM summaries)
- Links to **code** (GitHub) and **datasets** (Kaggle)

---

## Repository Structure

/
├─ index.html # Home
├─ publications.html # Papers and artefacts
├─ videos.html # Talks, demos, audio
├─ about.html # Bio and contact
└─ assets/
├─ style.css # Theme
├─ site.js # Small JS for year + QR
├─ favicon.svg # Icon
├─ og-card.png # Social preview image (1200x630)
└─ sample-audio.wav # Placeholder for NotebookLM export


> The footer renders a **QR code** automatically (client-side) that points to the homepage.  
> Replace `og-card.png` with a nicer banner whenever you like.

---

## How to Publish

1. Commit to the `main` branch of this repo.
2. In **Settings → Pages**, set **Build and deployment** to **Deploy from a branch → main**.
3. GitHub Pages will publish to **https://headersiq.github.io/**.

> Changes usually appear in ~30–60 seconds (hard refresh if needed).

---

## Editing Content

### Publications
Duplicate an `<article class="pub">…</article>` block in `publications.html` and fill in PDF/DOI/Code links.

### Videos & Audio
In `videos.html`, replace the YouTube `VIDEO_ID` and update the `<audio>` source.  
Place media in `assets/`.

### Bio & Contacts
Edit `about.html` and update email/links.

---

## Local Preview (optional)

```bash
# from repo root
python -m http.server 8000
