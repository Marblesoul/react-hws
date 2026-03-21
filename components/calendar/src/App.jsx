import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import '../css/main.css'
import Calendar from './components/Calendar'

const now = new Date()
function App() {

  return (
    <>
      <Calendar date={now} />
    </>
  )
}

export default App
