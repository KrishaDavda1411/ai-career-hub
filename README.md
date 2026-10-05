# Signal AI

A polished, zero-dependency AI news briefing with ready-to-edit LinkedIn and X post drafts.

## Run locally

Open `index.html` directly in a browser, or start a small local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Included

- Curated AI news cards with source links and context
- Topic filters and search
- Saved stories stored in the browser
- LinkedIn and X post studio
- Tone variants, editable drafts, character counts, and copy-to-clipboard
- Responsive layout and dark mode
- Live remote-job feed filtered to roles posted within 24 hours
- Resume-based matching for Krisha’s backend, full-stack, cloud, and AI skills
- Match scores, skill explanations, seniority filtering, and original application links
- Randomized FAANG-style DSA practice across 15 core interview patterns
- 45-minute interview timer with Python, Java, and JavaScript starter code
- Local complexity analysis for time, space, bottlenecks, and optimal-pattern comparison
- IDE-style editor with line numbers, auto-indent, bracket pairing, file/status bars, and keyboard shortcuts
- Mock-interview launch flow, interview phases, controlled interviewer prompts, and pre-submit structural checks

News is stored in the `stories` array in `app.js`. Replace that array with API data when connecting a live feed.

Job listings are fetched from Jobicy and scored locally in the browser. The resume itself is not uploaded.
