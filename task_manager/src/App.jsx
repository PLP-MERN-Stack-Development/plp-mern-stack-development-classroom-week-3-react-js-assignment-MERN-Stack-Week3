import { useState, useEffect } from 'react';
import TaskForm from './Pages/TaskForm';
import TaskItem from './Pages/TaskItem';
import TaskFilter from './Pages/TaskFilter';
import useLocalStorage from './hooks/useLocalStorage';
import { useTheme } from './hooks/useTheme'; // Import your theme hook

function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');
  const { theme, toggleTheme } = useTheme(); // Use the theme hook

  useEffect(() => {
    console.log('Component mounted, loaded tasks from localStorage:', tasks);
  }, []);

  useEffect(() => {
    console.log('Tasks updated, automatically saved to localStorage:', tasks);
  }, [tasks]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      title: taskText,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };
  
  const filteredTasks = getFilteredTasks();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle Button */}
      <div className="flex justify-between items-center p-4 border-b">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md border border-border hover:bg-accent"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      <div className="container mx-auto p-4">
        <TaskForm onAddTask={addTask} />
        <TaskFilter 
          currentFilter={filter} 
          onFilterChange={setFilter} 
        />
        <div className="mt-4">
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              completed={task.completed}
              onToggle={toggleTaskCompletion}
              onDelete={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;