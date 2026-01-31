# ArcadeBlock 🎮

A modern, open-source web arcade featuring classic mini-games enhanced with AI-driven interactions and optional Web3 integrations. Built with Next.js (App Router), a small Flask AI backend, and a collection of fun, modular games (Snake, DinoRun, TicTacToe, RPS, Word Match, and more).

---

## Key highlights ✅
- Fast Next.js frontend using the App Router and Tailwind CSS
- Small Flask-based AI backend (powered by Groq) for chat / adventure features
- Modular game components to make adding new games straightforward
- Optional wallet & on-chain integrations included in the codebase

---

## Quick start (development) ⚡
Prerequisites:
- Node.js 18+ and npm
- Python 3.11+ and pip (for the AI backend)
- Optional: Git, Docker, and a wallet like MetaMask for Web3 features

Frontend (app):

1. Install dependencies

```bash
npm install
```

2. Run the Next.js dev server

```bash
npm run dev
```

Open http://localhost:3000

AI backend (optional):

1. Create and activate a virtual environment

```bash
cd ai-backend
python -m venv .venv
source .venv/bin/activate  # macOS / Linux
.venv\Scripts\activate     # Windows (PowerShell)
```

2. Install Python dependencies and run the server

```bash
pip install -r requirements.txt
export GROQ_API_KEY="your_groq_api_key"  # or set in .env
python app.py
```

The API listens on http://localhost:5000 by default.

---

## Project structure 🔧
- `/app` — Next.js app (pages / layout / games)
- `/components` — Shared UI & game components
- `/ai-backend` — Small Flask service for AI-driven responses
- `/public` — Static assets (sprites, images)

---

## Adding a game 💡
1. Create a new React component under `app/game/` or `components/`
2. Export a page that mounts the component and wires up state
3. Add routing and a link from the main games list

If you want the game to persist scores or assets on-chain, follow the patterns used in the repository and add tests.

---

## Contributing 🤝
- Fork the repo, create a feature branch (feature/your-thing)
- Open a PR with a clear description and screenshots if applicable
- Run `npm run lint` and ensure formatting is consistent

Check `CONTRIBUTING.md` (if present) for more specifics.

---

## Development tips ✨
- Use the browser dev tools to inspect canvas and React state
- Keep game logic pure and move heavy computations off the render path
- Use `components/GameCanvas.tsx` as the base for canvas-based games

---

## License
This project is open source — check the repository for a `LICENSE` file and follow its terms.

---

## Contact
Questions? Open an issue or reach out to the repository owner.

Thank you for checking out ArcadeBlock — have fun building and playing! 🎉
