import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="intro" >Hello, I'm <span class="highlight">Nathan Kim</span>.<br/>I'm a full-stack web developer.</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          I'm gonna give Nathan, {count}x kisses. 
        </button>

      </div>
      <button><a href="#">See my work</a></button>

      <h2>Scroll down to See more!</h2>
    </>
  )
}

export default App
