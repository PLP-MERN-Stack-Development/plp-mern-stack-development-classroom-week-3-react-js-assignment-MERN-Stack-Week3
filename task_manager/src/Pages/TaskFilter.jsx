import { Button } from '@/components/ui/button';

function TaskFilter({ currentFilter, onFilterChange }) {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' }
  ];

  return (
    <div className="flex gap-2 mb-4">
      {filters.map((filter) => (
        <Button
          key={filter.key}
          variant={currentFilter === filter.key ? "default" : "outline"}
          onClick={() => onFilterChange(filter.key)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}

export default TaskFilter;