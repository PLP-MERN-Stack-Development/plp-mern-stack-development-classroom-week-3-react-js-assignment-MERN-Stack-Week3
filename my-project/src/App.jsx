// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import ApiData from './pages/ApiData'
import Layout from './layout/Layout'

export default function App() {
  console.log('App Loaded')

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/api" element={<ApiData />} />
      </Routes>
    </Layout>
  )
}
