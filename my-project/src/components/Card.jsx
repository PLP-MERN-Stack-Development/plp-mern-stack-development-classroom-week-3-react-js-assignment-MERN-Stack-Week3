// src/components/Card.jsx
export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-200">
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  )
}
