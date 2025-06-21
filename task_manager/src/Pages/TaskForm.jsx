import {useState} from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button'

function TaskForm({ onAddTask }){
    const [task, setTask] = useState("");

    const handleTaskSubmission = (e) => {
        e.preventDefault();
        setTask(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (task.trim()) {
            onAddTask(task);
            setTask("");
        }
    }


    return(
        <form className="flex justify-center" onSubmit={submitForm}>
            <Input placeholder='Enter a task...' onChange={handleTaskSubmission} value={task} className='w-[60vw] mt-2'/>
            <Button type="submit" className='mt-2 ml-2'>Add</Button>
        </form>
    );


}
export default TaskForm