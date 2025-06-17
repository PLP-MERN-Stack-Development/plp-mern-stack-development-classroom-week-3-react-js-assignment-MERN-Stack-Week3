// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6 border-t border-gray-300 dark:border-gray-700">
      © {new Date().getFullYear()} Task Manager · Built with ❤️ & Tailwind CSS
    </footer>
  )
}
