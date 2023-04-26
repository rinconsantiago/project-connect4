import { useState } from 'react'
import { PLAYERS } from '../utils/constants.js'
import confetti from 'canvas-confetti'

export const useBox = () => {
  const [board, setBoard] = useState(Array(42).fill(null))
  const [playerTurn, setPlayerTurn] = useState(PLAYERS.player_1)
  const [playerWinner, setPlayerWinner] = useState(null)

  const handleChangeBox = index => {
    if (playerWinner !== null) return
    if (board.every(box => box !== null)) setPlayerWinner(false)

    const newBoard = [...board]

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
        handleChangeBox(index + 7)
      }, 50)
    }
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

  return { board, playerWinner, handleChangeBox, handleReset }
}
