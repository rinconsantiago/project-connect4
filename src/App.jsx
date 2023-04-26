import './styles/App.css'
import { useState } from 'react'

function App () {
  const [board, setBoard] = useState(Array(42).fill(null))

  return (
    <>
      <h1 className='title'>Connnect 4</h1>
      <main className='container'>
        <div className='box'>
          {board.map((_, index) => (
            <span className='box-item' key={index}>{index}</span>
          ))}
        </div>
      </main>
    </>
  )
}

export default App
