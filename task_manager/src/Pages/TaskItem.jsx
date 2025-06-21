import {Card} from '@/components/ui/card';
import {Button} from '@/components/ui/button';

function TaskItem({task, completed, onToggle, onDelete}){

    return(
        <Card className="p-4 flex flex-row justify-between items-center w-full mb-2">
            <span className={completed ? "line-through text-gray-500" : ""} >{task.title}</span>
            <div className="flex gap-8">
                <Button variant="outline" onClick={() => onToggle(task.id)}>{completed ? "Undo" : "Done"}</Button>
                <Button variant="outline" onClick={() => onDelete(task.id)} className="text-red-500 hover:text-red-700">Delete</Button>
            </div>
        </Card>
    );
}
export default TaskItem