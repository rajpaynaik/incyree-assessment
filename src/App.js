import './App.css'
import TodoForm from './components/todo-form.component'

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
      <TodoForm />
    </div>
  )
}

export default App
