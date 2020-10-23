import React from 'react'

const CountContext = React.createContext();

function CounterProvider(props) {
  const [count, setCount] = React.useState(0);
  return <CountContext.Provider value={[count, setCount]} {...props} />
}


function useCount() {
  const context = React.useContext(CountContext);
  if (!context) {
    throw new Error('useCount must be used inside CountProvider');
  }
  return context;
}

function CountDisplay() {
  const [count,] = useCount(0);
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount(0);
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CounterProvider>
        <CountDisplay />
        <Counter />
      </CounterProvider>
    </div>
  )
}

export default App
