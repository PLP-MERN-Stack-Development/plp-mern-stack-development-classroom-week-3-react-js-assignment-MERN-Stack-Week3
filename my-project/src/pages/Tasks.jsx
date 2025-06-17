// pages/Tasks.jsx
import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Button from '../components/Button'

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('all')

  const addTask = () => {
    if (!text.trim()) return
    setTasks([...tasks, { id: Date.now(), text, completed: false }])
    setText('')
  }

  const toggle = id =>
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)))

  const remove = id => setTasks(tasks.filter(t => t.id !== id))

  const filtered = tasks.filter(task =>
    filter === 'all' ? true : filter === 'active' ? !task.completed : task.completed
  )

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          className="border px-2 py-1"
          placeholder="New task..."
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2 mb-4">
        {['all', 'active', 'completed'].map(f => (
          <Button
            key={f}
            variant={filter === f ? 'primary' : 'secondary'}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      <ul>
        {filtered.map(task => (
          <li
            key={task.id}
            className="flex justify-between items-center mb-2 border-b pb-1"
          >
            <span
              onClick={() => toggle(task.id)}
              className={`cursor-pointer ${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => remove(task.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
