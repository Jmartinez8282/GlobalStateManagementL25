import { useReducer } from "react";
import todoReducer from "../reducers/todoReducer";




const Todo = () => {
    // const [todos, setTodos] = useState<Todo[]>([]);
    const [todos,dispactch] = useReducer(todoReducer,[])

    const generateRandomNumber = ():number => {
        return Math.floor(Math.random() * 1000)
    }

    // Add new todo
  const addTodo = () => {
    dispactch({type:'ADD',todo: {id: generateRandomNumber(), title: 'todo: ' + generateRandomNumber(),}})
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
   dispactch({type: 'DELETE', todoId:id})
  };

  return (
  <>
    <h1 className="text-center">Todo list</h1>
    <div className="container mt-5">
      <h1 className="mb-4">Todo List</h1>
      <button className="btn btn-primary mb-3" onClick={addTodo}>
        Add Todo
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
             {todo.title}
            <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  </>
  )
}

export default Todo