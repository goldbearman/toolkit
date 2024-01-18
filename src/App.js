import './App.css';
import { useDispatch, useSelector } from "react-redux";
// import { inc, dec, addTodo, removeTodo, addAsyncTodo } from "./toolkitSlices/toolkitSlice";
import { inc, dec, addTodo, removeTodo, addAsyncTodo } from "./toolkitBuilder/toolkitBuilder";



  function App() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.toolkit.count)

    const todos = useSelector(state => state.toolkit.todos)
    console.log(count)
    return (
      <div className="App">
        <button onClick={() => dispatch(inc())}>Инкремент</button>
        <button onClick={() => dispatch(dec())}>Декремент</button>
        <button onClick={() => dispatch(addTodo(prompt()))}>Добавить тодо</button>
        <button onClick={() => dispatch(removeTodo())}>Удалить тодо</button>
        <button onClick={() => dispatch(addAsyncTodo())}>Удалить тодо 2c</button>
        <div>{count}</div>
        <ul>
          {todos.map(todo =>
            <li key={todo}>{todo}</li>
          )}
        </ul>
      </div>
    );
  }

export default App;

