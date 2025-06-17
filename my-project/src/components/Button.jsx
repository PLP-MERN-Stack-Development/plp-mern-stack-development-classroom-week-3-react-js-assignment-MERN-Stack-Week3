// src/components/Button.jsx
export default function Button({ variant = "primary", children, ...props }) {
  const base = "px-4 py-2 rounded font-medium transition"
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  }

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  )
}
