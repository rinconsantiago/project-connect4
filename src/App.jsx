import './styles/App.css'
import { useBox } from './hooks/useBox'
import { Box } from './components/Box'
import { WinnerReset } from './components/WinnerReset'

function App () {
  const { board, playerWinner, handleChangeBox, handleReset } = useBox()

  return (
    <>
      <h1 className='title'>Connnect 4</h1>
      <main className='container'>
        <Box board={board} handleChangeBox={handleChangeBox} />
      </main>

      <aside>
        {playerWinner !== null && (
          <WinnerReset playerWinner={playerWinner} handleReset={handleReset} />
        )}
      </aside>
    </>
  )
}

export default App
