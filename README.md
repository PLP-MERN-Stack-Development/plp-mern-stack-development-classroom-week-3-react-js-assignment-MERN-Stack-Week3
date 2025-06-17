

---

```md
# 📝 Task Manager App

A responsive task manager built with **React**, **Vite**, and **Tailwind CSS**, demonstrating:
- Component architecture
- State management with React Hooks
- Context API for theme toggling
- Local storage persistence
- API integration with JSONPlaceholder
- Toast notifications and clean UI

---

## 🚀 Features

- ✅ Add, complete, and delete tasks
- ✅ Filter tasks (All, Active, Completed)
- ✅ Light/Dark theme toggle
- ✅ Data fetching from public API
- ✅ Toast notifications with auto-dismiss
- ✅ Fully responsive layout using Tailwind CSS

---

## 📁 Project Structure

```

src/
├── components/        # Reusable UI components (Navbar, Button, Card, Footer)
├── context/           # Theme + Toast contexts
├── hooks/             # Custom React hooks (useLocalStorage)
├── layout/            # Layout wrapper with Navbar + Footer
├── pages/             # App pages (Home, Tasks, API)
├── App.jsx            # Root application
├── main.jsx           # App entry with providers
├── index.css          # TailwindCSS + global styles

````

---

## ⚙️ Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-username/my-project.git
cd task-manager-app
npm install
````

### 2. Run Dev Server

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

---

## 🧪 Technologies

* [React](https://react.dev/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React Router DOM](https://reactrouter.com/)
* [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

## 🌗 Theme Switching

Toggle between **Light** and **Dark** modes using the navbar switcher.
Theme is managed using React Context and Tailwind's `darkMode: 'class'` strategy.

---

## 📦 API Integration

Fetch posts from JSONPlaceholder at `/api` route with:

* Search input filter
* Grid layout
* Loading/error states


## 📸 Screenshots

