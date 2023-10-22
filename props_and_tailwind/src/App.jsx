import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-[green] text-[black] p-4 rounded-md mb-4'>Code with Rishabh</h1>
      <Card username="Rishabh Gehlot" btnText="Check Profile" />
      <Card username="Ravi" />
    </>
  )
}

export default App
