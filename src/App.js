import './App.css';
import { connect, useDispatch,useSelector } from "react-redux";

function App() {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.firstReducer.count)

  console.log(count)
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: 'INC' })}>Инкремент</button>
      <button onClick={() => dispatch({ type: 'DEC' })}>Декремент</button>
      <div>{count}</div>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   // inc: () => dispatch({ type: 'INC' }),
//   // dec: () => dispatch({ type: 'DEC' }),
// });
//
// const mapStateToProps = (state) => {
//   return {
//     count: state.firstReducer.count,
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

