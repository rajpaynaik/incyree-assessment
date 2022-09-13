import { useState } from 'react'

const TodoForm = () => {
  const [input, setInput] = useState('')

  return (
    <div>
      <form className="todo-form">
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
        />
      </form>
      <button className="todo-button">Add todo</button>
    </div>
  )
}

export default TodoForm
