import React from 'react'

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.step
      };
    default:
      throw new Error(`countReducer with an inexistent action type: ${action.type}`);
  }
}

function Counter({ initialCount = 0, step = 3 }) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const { count } = state
  const increment = () => dispatch({ type: 'INCREMENT', step })
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
