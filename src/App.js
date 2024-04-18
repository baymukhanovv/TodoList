import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    const [todoList, setTodoList] = useState([])
    const STORAGE = 'todolist'

    useEffect(() => {
        const getTodosFromStorage = localStorage.getItem(STORAGE)
        if(getTodosFromStorage) {
            const parsedTodos = JSON.parse(getTodosFromStorage)
            setTodoList(parsedTodos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(STORAGE, JSON.stringify(todoList))
    }, [todoList])

    const createTodo = (newTodo) => {
        setTodoList([...todoList, newTodo])
    }

    const toggleComplete = (todoId) => {
        setTodoList(prevList => {
            return prevList.map(todo => {
                return (todo.id === todoId) ? {...todo, isCompleted: !todo.isCompleted} : todo
            })
        })
    }

    const removeTodo = (todoId) => {
        const filteredTodos = todoList.filter(todo => todo.id !== todoId)
        setTodoList(filteredTodos)
    }

    return (
        <div className="App">
            <h1>Tasks list</h1>
            <TaskForm create={createTodo} />
            <p style={{fontWeight: 600, fontSize: 20, marginBottom: 10}}>Your Tasks for today</p>
            <TaskList 
                todoList={todoList}
                remove={removeTodo}
                toggleComplete={toggleComplete}
            />
        </div>
    )
} 

export default App;