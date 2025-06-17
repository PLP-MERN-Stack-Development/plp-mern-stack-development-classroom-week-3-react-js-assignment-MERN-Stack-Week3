// src/layout/Layout.jsx
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  )
}
