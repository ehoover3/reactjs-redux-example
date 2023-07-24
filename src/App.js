import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, multiply, divide } from "./redux/actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Redux Counter App</h1>
      <div className='counter-container'>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{counter}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div className='counter-actions'>
        <button onClick={() => dispatch(multiply(2))}>Multiply by 2</button>
        <button onClick={() => dispatch(divide(2))}>Divide by 2</button>
      </div>
    </div>
  );
}

export default App;
