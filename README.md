# 🚀 Team Task Manager (Full-Stack)

A simple full-stack web application where users can create projects, manage tasks, and track progress with authentication.

---

## 📌 Features

* 🔐 Authentication (Signup / Login using Supabase)
* 📁 Project creation & management
* ✅ Task creation and assignment
* 🔄 Task status update (Pending → Completed)
* 📊 Dashboard to view all tasks
* 🌐 REST API with Express
* 🗄️ Database using Supabase (PostgreSQL)

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios

### Backend

* Node.js
* Express.js

### Database & Auth

* Supabase

### Deployment

* Railway (Backend)
* Vercel / Netlify (Frontend)

---

## 📂 Project Structure

project-manager-app/
├── backend/
│ ├── routes/
│ │ ├── projectRoutes.js
│ │ ├── taskRoutes.js
│ ├── server.js
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── App.jsx
│ │ ├── api.js

---

## ⚙️ Installation & Setup

### 🔹 1. Clone Repository

```bash
git clone https://github.com/your-username/project-manager-app.git
cd project-manager-app
```

---

### 🔹 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
PORT=5000
```

Run backend:

```bash
node server.js
```

---

### 🔹 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🗄️ Database Schema

### Tasks Table

```sql
create table tasks (
  id uuid primary key default gen_random_uuid(),
  title text,
  status text default 'pending',
  assigned_to uuid,
  project_id uuid,
  created_at timestamp default now()
);
```

---

### Projects Table

```sql
create table projects (
  id uuid primary key default gen_random_uuid(),
  name text,
  created_by uuid,
  created_at timestamp default now()
);
```

---

## 🌐 API Endpoints

### Tasks

* `POST /tasks` → Create task
* `GET /tasks/:userId` → Get tasks
* `PUT /tasks/:id` → Update task

### Projects

* `POST /projects` → Create project
* `GET /projects/:userId` → Get projects

---

## 🚀 Deployment

### Backend (Railway)

1. Push backend to GitHub
2. Deploy on Railway
3. Add environment variables

### Frontend (Vercel / Netlify)

1. Build project
2. Deploy `dist/` folder
3. Update API base URL



## 📌 Notes

* RLS disabled for simplicity (development mode)
* Basic role system can be extended (Admin/Member)

---
