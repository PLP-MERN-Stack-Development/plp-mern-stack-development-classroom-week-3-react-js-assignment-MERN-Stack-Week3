// pages/ApiData.jsx
import { useEffect, useState } from 'react'
import Card from '../components/Card'

export default function ApiData() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <input
        placeholder="Search posts..."
        className="mb-4 p-2 border w-full"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {filtered.map(post => (
          <Card key={post.id} title={post.title}>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
