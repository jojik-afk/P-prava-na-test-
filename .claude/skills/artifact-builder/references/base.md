# Base — Shared Defaults (load this for every artifact)

---

## Design System

### Theme & Background
- Base background colour: `#0a0a1a` (deep navy/black)
- Animated background — choose by subject:
  - **Math / Physics / Chemistry:** Synthwave — grid floor, neon sun, floating particles
  - **All other subjects:** Floating translucent gradient circles (purple / blue / amber) with `blur` and `pulse` animations

### Cards — Glassmorphism (use everywhere)
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 20px;
transition: all 0.4s ease;   /* NEVER 0.2s or 0.3s — Jonas explicitly flagged this */
```

### Navigation
- Horizontal tab bar, pill-shaped or rounded buttons
- Active tab: subject accent colour
- No dropdown menus
- Status indicators use colour alone — **no legends** (exception: annotated diagrams in `other-types.md`)

### Accent Colours by Subject
| Subject area | Palette |
|---|---|
| Literature / humanities | Amber / orange |
| Sciences (physics, chemistry) | Cyan / indigo / purple |
| Biology | Emerald / teal |
| Languages (French) | Cyan / blue |
| Math | Neon pink + cyan |

### Typography — Google Fonts via CDN `<link>`
| Context | Font combo |
|---|---|
| Synthwave / math apps | Exo 2 (body) + Audiowide (headers) |
| General apps | Segoe UI or Inter (body) |
| Formulas / code blocks | JetBrains Mono |

### Animation Timings
| Element | Duration |
|---|---|
| Background gradient cycle | 20–40s |
| Floating background elements | 12–20s |
| Card hover / transitions | 0.4–0.5s |
| Slide-in content | 0.5–0.6s, staggered 0.08s per card |
| Progress bars | 0.8s |
| Flashcard flip | 0.4s |

---

## Quiz Engine Spec

Every quiz in every artifact type must implement ALL of the following. No shortcuts.

### Question types
- **Single-select:** Radio-button style. Feedback triggers immediately on selection.
- **Multi-select:** Checkbox style. Include a "Submit" button — feedback triggers on submit, not on individual checkbox change.

### Feedback (shown after every question)
1. Correct / incorrect indicator
2. Show correct answer(s) if the user answered wrong
3. **Explanation:** Why the answer is correct / incorrect — always present
4. **Mnemonic tip:** Optional field — include a short memory aid where you can

### Progress & Score
- Progress indicator: current question / total, or a progress bar
- Score accumulates across all questions

### Navigation bar
- Clickable numbered dots, one per question
- Colour-coded by status:
  - **Purple** = current question
  - **Green** = answered correctly
  - **Red** = answered incorrectly
  - **Grey** = unanswered
- **NO legend below the bar.** Colour alone conveys meaning.

### Results Screen (shown after last question)
- Final score + percentage
- Motivational message, thresholded:
  | Score | Message tone |
  |---|---|
  | ≥ 90% | Perfect / výborně |
  | ≥ 70% | Good / dobře |
  | ≥ 50% | OK / mohlo by to být lepší |
  | < 50% | Needs more study / potřebuješ více přípravy |
- "Try again" / restart button

---

## Technical Rules

- **Standalone HTML preferred.** For complex apps, avoid external React component libraries — `lucide-react` causes size issues in large artifacts. Use **emoji as icon fallback** instead.
- **PDF generation (ReportLab):** ALWAYS register DejaVu Sans font explicitly before drawing any text. Default Helvetica breaks Czech diacritics.
- **If the artifact fails to load:** The simpler version (emoji icons, no external libs, inline everything) is the one that works. Default to this approach from the start.
