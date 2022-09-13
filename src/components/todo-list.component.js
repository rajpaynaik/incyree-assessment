import { useState } from 'react'
import TodoForm from './todo-form.component'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return

    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    // console.log(...todos)
  }
  return (
    <div>
      <h1>Create a Todo List</h1>
      <TodoForm addTodoToList={addTodo} />
    </div>
  )
}

export default TodoList
