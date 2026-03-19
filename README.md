# AI Event Platform

AI-powered event planning application. Ask about your events, get intelligent suggestions.

**Live**: https://ai-event-planner-olive.vercel.app/

---

## 🔧 Tech Stack

| Layer        | Tech                               | Deploy   |
| ------------ | ---------------------------------- | -------- |
| **Frontend** | React 19 + Vite + Tailwind + Axios | Vercel   |
| **Backend**  | FastAPI + SQLAlchemy + Pydantic    | Render   |
| **Database** | PostgreSQL                         | Supabase |

---

## 📁 Project Structure

```
ai_event_platform/
├── backend/                      # FastAPI backend
│   ├── main.py                  # FastAPI app initialization, routes
│   ├── models.py                # SQLAlchemy database models
│   ├── database.py              # Database connection setup
│   ├── llm_api.py               # LLM integration (AI responses)
│   ├── requirements.txt          # Python dependencies
│   └── __pycache__/             # Compiled Python files
│
├── frontend/                     # React + Vite frontend
│   ├── src/
│   │   ├── main.jsx             # React entry point
│   │   ├── App.jsx              # Main app component
│   │   ├── api.js               # API client (Axios)
│   │   ├── index.css            # Global styles
│   │   └── components/
│   │       ├── Navbar.jsx       # Top navigation
│   │       ├── Sidebar.jsx      # Chat history sidebar
│   │       └── Mainbar.jsx      # Main chat interface
│   ├── public/                  # Static assets
│   ├── package.json             # JavaScript dependencies
│   ├── vite.config.js           # Vite configuration
│   ├── eslint.config.js         # Code quality linter
│   └── index.html               # HTML entry point
│
└── README.md                    # This file
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 16+ (for frontend)
- Python 3.9+ (for backend)
- Git

### Frontend Setup

1. **Navigate to frontend directory**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env.local` file** with API endpoint:

   ```
   VITE_API_URL=http://localhost:8000
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

   - Frontend will run on `http://localhost:5173`

5. **Build for production**
   ```bash
   npm run build
   ```

### Backend Setup

1. **Navigate to backend directory**

   ```bash
   cd backend
   ```

2. **Create virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Create `.env` file** with database and API credentials:

   ```
   DATABASE_URL=postgresql://user:password@host:port/database
   OPENAI_API_KEY=your_openai_key
   ```

5. **Run the server**
   ```bash
   uvicorn main:app --reload
   ```

   - Backend will run on `http://localhost:8000`
   - API docs available at `http://localhost:8000/docs`

---

## � API Endpoints

| Method | Endpoint       | Description                 |
| ------ | -------------- | --------------------------- |
| GET    | `/history`     | Get all past queries        |
| POST   | `/generate`    | Send query, get AI response |
| DELETE | `/delete/{id}` | Remove query                |

backend/ # FastAPI
├── main.py
├── models.py
├── database.py
└── requirements.txt

frontend/ # React
├── src/
│ ├── App.jsx
│ ├── api.js
│ └── components/
└── package.json

````

---

## ⚡ Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev          # http://localhost:5173
````

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload   # http://localhost:8000
``🔧 Environment Variables

**Backend** (`.env`):
```

DATABASE_URL=postgresql://...
OPENAI_API_KEY=...

```

**Frontend** (`.env.local`):
```

VITE_API_URL=http://localhost:8000

```

---

## 🚀 Deployment

1. **Frontend**: Push to GitHub → auto-deploys on Vercel
2. **Backend**: Push to GitHub → auto-deploys on Render (set env vars)
3. **Database**: Use Supabase PostgreSQL connection string in backend env
```
