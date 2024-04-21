import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const jsxElement = <h1>I am a JSX element</h1>;

const header = (
  <header>
      <h1>Welcome to React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
  </header>
)

const footer = <p>Copyright &copy; 2024</p>;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {jsxElement}

      {header}

      <>
      <h1>Welcome to React</h1>
      <h2 style={{color:'orange'}}>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      </>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {footer}
    </>
  )
}

export default App
