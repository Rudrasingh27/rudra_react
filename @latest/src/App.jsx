import { useState } from 'react'
import './App.css'
import{Demo} from "../Component/Demo";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <h2>My name is Rudra</h2>

      <Demo />
    </>
  )
}

export default App