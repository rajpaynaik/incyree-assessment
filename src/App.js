import { useState } from 'react'
import './App.css'

const App = () => {
  const initialList = [{ id: 1, name: 'grocery', status: 'todo' }]
  const [list, setList] = useState(initialList)
  const [name, setName] = useState('')

  function onhandleChange(event) {
    setName(event.target.value)
  }

  function onhandleAdd() {
    const newList = list.concat({ name })

    setList(newList)
  }

  return (
    <div>
      <h1>Todo Web App</h1>
      <div>
        <input type="text" value={name} onChange={onhandleChange} />
        <button type="button" onClick={onhandleAdd}>
          Add
        </button>
      </div>

      <div className="todo-list">
        {list.map((item) => (
          <div className="items-list">
            <input type="checkbox" className="input-checkbox" />
            <label key={item.id}>{item.name}</label>
            <button>delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
