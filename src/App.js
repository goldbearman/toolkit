import './App.css';
import {  useDispatch,useSelector } from "react-redux";
import {inc,dec} from "./toolkitRedux/toolkitReducer";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.toolkit.count)
  console.log(count)
  return (
    <div className="App">
      <button onClick={() => dispatch( inc())}>Инкремент</button>
      <button onClick={() => dispatch( dec() )}>Декремент</button>
      <div>{count}</div>
    </div>
  );
}
export default App;

