# Votify — Smart Online Voting System

Abhi ke liye sirf **Home (landing) page** aur **Login/Signup page**
bane hain — poora React + Tailwind + React Router setup ke saath.
Backend, dashboards, aur voting flow next milestones mein aayenge.

## Run karne ke liye

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Ab tak kya bana hai

- `src/pages/Home.jsx` — landing page: hero + live "receipt" card,
  role picker (Voter/Candidate/Admin), how-it-works steps.
- `src/pages/Login.jsx` — one page, 3 role tabs, Login ⇄ Signup toggle,
  role-specific fields (voter needs Voter ID + DOB, candidate needs
  category + manifesto + photo, admin needs invite code). Form
  submission is UI-only right now — no backend call yet.
- `src/components/SealBadge.jsx` — the reusable seal/logo mark.
- Design tokens (colors, fonts) live in `tailwind.config.js`.

## Design direction

"Civic ledger" look: deep navy (`ink`) as the base, warm paper (`paper`)
for cards, brass gold (`gold`) as the accent, a serif display face
(Fraunces) for headings paired with Inter for body text and IBM Plex
Mono for IDs/receipt numbers. The perforated "ballot stub" edge
(`.stub-edge` in `src/index.css`) is the page's signature motif.

## Next steps (not built yet)

- Backend: Node/Express + JWT auth, bcrypt, role middleware.
- Role dashboards (Admin / Candidate / Voter), sidebar + topbar layout.
- Voting flow (category modal → confirm → receipt).
- Results & analytics (recharts), live updates.

See the original brief for the full feature list — this README will
get updated as each milestone lands.
