import React from 'react'
import Button from './UI/button/Button'

const TaskList = ({todoList, remove, toggleComplete}) => {
    return (
        <ul className='todolist'>
            {todoList.length !== 0
                ? todoList.map((todo, index) => 
                    <li  
                        style={{marginTop: 20}}
                        className='item' 
                        key={index}
                    >
                        <label>
                            <input 
                                type='checkbox' 
                                checked={todo.isCompleted}
                                onChange={() => toggleComplete(todo.id)}
                            />
                            <p>{todo.taskName}</p>
                        </label>
                        <Button onClick={() => remove(todo.id)}>Delete</Button>
                    </li>
                )
                : <p style={{fontSize: 18, textAlign:'center'}}>You have no tasks</p>
            }
        </ul>
    )
}

export default TaskList