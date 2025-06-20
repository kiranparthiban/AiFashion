# AiFashion – AI-Powered Fashion Design & Recommendation Platform

AiFashion is a full-stack web application that leverages state-of-the-art generative AI to help designers and consumers ideate, generate, and discover fashion styles in seconds.  The platform couples a **Django REST** API with a blazing-fast **React (Vite)** front-end to deliver a seamless user experience, while keeping the code-base clean, modular, and production-ready.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| AI Image Generation | Generate garment mock-ups or full-body outfits from text prompts using Stable Diffusion / custom fine-tuned weights. |
| Style Recommendations | Retrieve similar outfits based on colour, silhouette, season, and trend vectors. |
| Secure Authentication | JWT-based auth with refresh tokens powered by **Django Simple JWT** and a dedicated `auth_app`. |
| RESTful API | Versioned JSON endpoints documented with OpenAPI/Swagger. |
| Modern SPA | React 18 with React-Router 6, lazy-loading, and code-splitting via Vite for <50 ms cold starts. |
| Hot-reload Dev Env | Concurrent development of API (`python manage.py runserver`) and SPA (`npm run dev`) with CORS configured. |
| Production Ready | Environment variable support, Docker-friendly settings, ESLint v9, pre-commit hooks, and CI placeholder stubs. |

---

## 🗂  Project Structure

```
AiFashion/
├─ ai_fashion/            # Django project root
│  ├─ api/                # Core REST API (image generation, recommendations)
│  ├─ auth_app/           # Authentication & user management
│  ├─ ai_models/          # ML assets / model loaders
│  ├─ manage.py           # Django CLI entry-point
│  └─ db.sqlite3          # Local dev database (SQLite)
│
├─ fashion-frontend/      # React 18 + Vite SPA
│  ├─ src/                # React source (components, pages, hooks)
│  ├─ public/             # Static assets
│  └─ vite.config.js      # Vite settings
│
├─ index.html             # Landing page stub (optional Netlify redirect)
└─ README.md              # ← You are here
```

---

## 🏗  Tech Stack

| Layer | Technology |
|-------|------------|
| Front-end | React 18, React-Router 6, Vite 6, ESLint v9 |
| Back-end | Python 3.11, Django 5, Django-REST-Framework, Simple-JWT |
| ML / AI | Stable Diffusion / diffusers, Torch 2.x |
| Tooling | VS Code Dev Containers, pre-commit, GitHub Actions (CI/CD) |

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
# clone
git clone https://github.com/<you>/AiFashion.git
cd AiFashion

# backend
python -m venv .venv && source .venv/bin/activate  # windows: .venv\Scripts\activate
pip install -r requirements.txt                    # file located in ai_fashion/ if generated

# frontend
cd fashion-frontend && npm ci
```

### 2. Environment Variables

Create `.env` in `ai_fashion/`:

```
SECRET_KEY=your-django-secret
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost
```

You can also override DB credentials, storage buckets, etc.

### 3. Run in Development

```bash
# in one terminal
cd ai_fashion
python manage.py migrate && python manage.py runserver 8000

# in another
cd fashion-frontend
npm run dev  # opens http://localhost:5173
```

CORS is already enabled for all origins during development (see `settings.py`).

### 4. Production Build

```bash
# build SPA (static files in dist/)
cd fashion-frontend && npm run build

# collect static & start gunicorn
cd ..\ai_fashion
python manage.py collectstatic --noinput
# gunicorn ai_fashion.wsgi:application -b 0.0.0.0:8000 --workers 4
```

Containerisation and Cloud deployment samples (Heroku, Render, Netlify) live under `/deploy/` (to-do).

---

## 📑 API Reference (excerpt)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/generate/` | Generate outfit image from prompt. |
| GET | `/api/recommend/?style=casual` | Get recommendations filtered by style. |
| POST | `/auth/token/` | Obtain JWT access & refresh tokens. |

Detailed Swagger docs available at `/docs/` once the server is running.

---

## 🧪 Testing

```bash
pytest -q
```

Unit & integration tests cover serializers, views, and React components (vitest + react-testing-library).

---

## 🤝 Contributing

Pull requests are welcome!  Please open an issue first to discuss changes.  Make sure to follow conventional commits and run `pre-commit run --all-files` before pushing.

---

## 🪪 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgements

* OpenAI for GPT-4 Turbo inspiration
* Stability AI for diffusion models
* React community for an amazing ecosystem
