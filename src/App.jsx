import './styles/App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'

const PLAYERS = {
  player_1: 'red',
  player_2: 'blue'
}

function App () {
  const [board, setBoard] = useState(Array(42).fill(null))
  const [playerTurn, setPlayerTurn] = useState(PLAYERS.player_1)
  const [playerWinner, setPlayerWinner] = useState(null)

  const handleChangeBox = index => {
    if (playerWinner !== null) return

    const newBoard = [...board]

    const handleCheckBox = (newBoard, index) => {
      if (newBoard[index + 7] !== null && newBoard[index] === null) {
        newBoard[index] = playerTurn
        setBoard(newBoard)

        newBoard[index] === PLAYERS.player_1
          ? setPlayerTurn(PLAYERS.player_2)
          : setPlayerTurn(PLAYERS.player_1)

        handleSetWinner(newBoard, index)
      } else if (newBoard[index + 7] === null) {
        newBoard[index] = playerTurn
        setBoard(newBoard)

        setTimeout(() => {
          newBoard[index] = null
          setBoard(newBoard)
          handleCheckBox(newBoard, index + 7)
        }, 50)
      }
    }

    handleCheckBox(newBoard, index)
  }

  const handleSetWinner = (newBoard, index) => {
    const combinationsWin = [
      [index, index + 1, index + 2, index + 3],
      [index, index - 1, index - 2, index - 3],
      [index, index + 6, index + 12, index + 18],
      [index, index - 6, index - 12, index - 18],
      [index, index + 7, index + 14, index + 21],
      [index, index - 7, index - 14, index - 21],
      [index, index + 8, index + 16, index + 24],
      [index, index - 8, index - 16, index - 24]
    ]

    for (const combination of combinationsWin) {
      const [a, b, c, d] = combination

      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c] &&
        newBoard[a] === newBoard[d]
      ) {
        confetti()
        setPlayerWinner(newBoard[index])
      }
    }
  }

  const handleReset = () => {
    setBoard(Array(42).fill(null))
    setPlayerTurn(PLAYERS.player_1)
    setPlayerWinner(null)
  }

  return (
    <>
      <h1 className='title'>Connnect 4</h1>
      <main className='container'>
        <div className='box'>
          {board.map((box, index) => (
            <div
              style={{ backgroundColor: box }}
              className='box-item'
              key={index}
              onClick={() => handleChangeBox(index)}
            />
          ))}
        </div>
      </main>
      {playerWinner && (
        <aside>
          <h3>
            The Winner Is:{' '}
            <span className='winnerText' style={{ color: playerWinner }}>
              {playerWinner}
            </span>
          </h3>
          <button className='reset' onClick={handleReset}>
            RESET GAME
          </button>
        </aside>
      )}
    </>
  )
}

export default App
