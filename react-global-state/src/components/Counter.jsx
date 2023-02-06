import { useReducer } from "react";

import Style from "./style.modules.scss";

const Counter = () => {
  let initialState = { count: 0 };

  function reducer(state, pippo) {
    console.log(pippo);
    switch (pippo.type) {
      case "increment":
        return { count: state.count++ };
      case "decrement":
        return { count: state.count-- };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: `increment` })}>increment</button>
      <button onClick={() => dispatch({ type: `decrement` })}>decrement</button>
    </>
  );
};

export default Counter;
