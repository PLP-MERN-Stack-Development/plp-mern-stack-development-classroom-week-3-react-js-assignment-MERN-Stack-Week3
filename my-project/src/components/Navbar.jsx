// src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { toggleTheme, theme } = useTheme()

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="flex items-center gap-6 text-lg font-medium">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/tasks" className="hover:text-blue-400 transition">Tasks</Link>
        <Link to="/api" className="hover:text-blue-400 transition">API</Link>
      </div>
      <button
        onClick={toggleTheme}
        className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-sm"
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  )
}
