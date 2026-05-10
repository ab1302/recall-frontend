import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  async function handlePing() {
    const response = await fetch(import.meta.env.VITE_BACKEND_URL)
    const text = await response.text()
    setMessage(text)
  }

  return (
    <>
      <h1>Recall</h1>
      <p>Spaced repetition for LeetCode problems.</p>
      <button onClick={handlePing}>Ping backend</button>
      <p>{message}</p>
    </>
  )
}

export default App