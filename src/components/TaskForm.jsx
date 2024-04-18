import React, { useState } from 'react'
import Input from './UI/input/Input'
import Button from './UI/button/Button'

const TaskForm = ({create}) => {
    const [task, setTask] = useState('')
    const [taskId, setTaskId] = useState(1)

    const addTask = event => {
        event.preventDefault()
        if(task.trim() === '') return
        const newTodo = {
            id: taskId,
            taskName: task,
            isCompleted: false
        }
        create(newTodo)
        setTask('')
        setTaskId(prevId => prevId + 1)
    }
    
    return (
        <form className='form' onSubmit={addTask}> 
            <Input 
                value={task}
                placeholder="Add a task..."
                onChange={e => setTask(e.target.value)}
                type="text"
            />
            <Button>Add a task</Button>
        </form>
    )
}

export default TaskForm