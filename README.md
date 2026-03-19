<div align="center">

# 🎉 AI Event Platform

**An AI-powered event planning assistant — plan smarter, not harder.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20App-6366f1?style=for-the-badge&logo=vercel)](https://ai-event-planner-olive.vercel.app/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

Ask questions about your events, get intelligent suggestions, and streamline your entire planning workflow — all in one place.

</div>

---

## ✨ Features

- 🤖 **AI Chat Interface** — Natural language queries powered by an LLM backend
- 📅 **Event Management** — Create, track, and organize events effortlessly
- 💬 **Chat History** — Persistent query history with sidebar navigation
- 🗑️ **Session Control** — Delete individual queries or clear history
- ⚡ **Real-time Responses** — Fast, streaming-ready FastAPI backend
- 🌐 **Fully Deployed** — Frontend on Vercel, backend on Render, DB on Supabase

---

## 🛠️ Tech Stack

| Layer        | Technology                         | Hosting  |
| ------------ | ---------------------------------- | -------- |
| **Frontend** | React 19 · Vite · Tailwind · Axios | Vercel   |
| **Backend**  | FastAPI · SQLAlchemy · Pydantic    | Render   |
| **Database** | PostgreSQL                         | Supabase |
| **AI**       | OpenAI API (LLM integration)       | —        |

---

## 📁 Project Structure

```
ai_event_platform/
├── backend/                  # FastAPI backend
│   ├── main.py               # App entry point & route definitions
│   ├── models.py             # SQLAlchemy ORM models
│   ├── database.py           # DB connection & session management
│   ├── llm_api.py            # LLM integration & AI response logic
│   └── requirements.txt      # Python dependencies
│
└── frontend/                 # React + Vite frontend
    ├── src/
    │   ├── main.jsx          # React entry point
    │   ├── App.jsx           # Root component & routing
    │   ├── api.js            # Axios API client
    │   ├── index.css         # Global styles
    │   └── components/
    │       ├── Navbar.jsx    # Top navigation bar
    │       ├── Sidebar.jsx   # Chat history panel
    │       └── Mainbar.jsx   # Primary chat interface
    ├── public/               # Static assets
    ├── vite.config.js        # Vite build config
    └── package.json          # JS dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

| Tool    | Version |
| ------- | ------- |
| Node.js | 16+     |
| Python  | 3.9+    |
| Git     | Latest  |

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-event-platform.git
cd ai_event_platform
```

---

### 2. Backend Setup

```bash
cd backend

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
cp .env.example .env            # Then fill in your values
```

**Backend `.env`:**

```env
DATABASE_URL=postgresql://user:password@host:port/database
OPENAI_API_KEY=your_openai_api_key_here
```

```bash
# Start the development server
uvicorn main:app --reload
```

> 🟢 API running at `http://localhost:8000`
> 📖 Interactive docs at `http://localhost:8000/docs`

---

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Configure environment variables
echo "VITE_API_URL=http://localhost:8000" > .env.local

# Start the development server
npm run dev
```

> 🟢 App running at `http://localhost:5173`

---

## 📡 API Reference

| Method   | Endpoint       | Description                        |
| -------- | -------------- | ---------------------------------- |
| `GET`    | `/history`     | Retrieve all past queries          |
| `POST`   | `/generate`    | Submit a query and get AI response |
| `DELETE` | `/delete/{id}` | Remove a specific query by ID      |

Full interactive documentation available at `/docs` (Swagger UI) and `/redoc`.

---

## ☁️ Deployment

This project follows a **3-service deployment** model:

```
GitHub Push
    ├── → Vercel       (Frontend auto-deploy)
    ├── → Render       (Backend auto-deploy)
    └── → Supabase     (Managed PostgreSQL — always on)
```

### Frontend (Vercel)

1. Connect your GitHub repo to [Vercel](https://vercel.com)
2. Set the root directory to `frontend/`
3. Add environment variable: `VITE_API_URL=https://your-backend.onrender.com`
4. Deploy — future pushes auto-deploy ✅

### Backend (Render)

1. Connect your GitHub repo to [Render](https://render.com)
2. Set the root directory to `backend/`
3. Add environment variables: `DATABASE_URL` and `OPENAI_API_KEY`
4. Set start command: `uvicorn main:app --host 0.0.0.0 --port 10000`
5. Deploy — future pushes auto-deploy ✅

### Database (Supabase)

1. Create a new project on [Supabase](https://supabase.com)
2. Copy the **PostgreSQL connection string** from Project Settings → Database
3. Paste it as `DATABASE_URL` in your Render environment variables ✅

---

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
Made with ❤️ · <a href="https://ai-event-planner-olive.vercel.app/">Live Demo</a>
</div>
