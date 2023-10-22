import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  return (
    <>
      <h1>Code with rishabh</h1>
      <h2>counter: {count}</h2>
      <button onClick={() => setCount(count === 20 ? count : count++)}>Increase</button>
      <button onClick={() => setCount(count === 0 ? count : count--)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>

    </>
  )
}

export default App
