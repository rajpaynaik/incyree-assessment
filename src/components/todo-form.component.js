import { useState } from 'react'

const TodoForm = ({ addTodoToList }) => {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addTodoToList({
      id: Math.floor(Math.random() * 30000),
      text: input,
    })

    setInput('')
  }

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="todo-button">Add todo</button>
      </form>
    </div>
  )
}

export default TodoForm
