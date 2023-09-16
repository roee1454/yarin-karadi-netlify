import { useState, useEffect } from 'react'
import { askForNotificationPermission } from '../service-worker'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={askForNotificationPermission}>Ask Me For Permission</button>
    </>
  )
}

export default App
