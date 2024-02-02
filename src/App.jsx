import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './TodoForm'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div
      style={{
        width:"100vw",
        height:"100vw",
        display:"flex",
        justifyContent:"center",

      }}
    >
      <TodoForm/>
    </div>
  );
}

export default App
