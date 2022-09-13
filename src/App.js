import './App.css'
import TodoForm from './components/todo-form.component'
import TodoList from './components/todo-list.component'

const App = () => {
  // const initialList = [{ id: 1, name: 'grocery', status: 'todo' }]
  // const [list, setList] = useState(initialList)
  // const [name, setName] = useState('')

  // function onhandleChange(event) {
  //   setName(event.target.value)
  // }

  // function onhandleAdd() {
  //   const newList = list.concat({ name })

  //   setList(newList)
  // }

  return (
    <div className="todo-app">
      <TodoList />
    </div>
  )
}

export default App
