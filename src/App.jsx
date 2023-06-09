import './styles/App.css'
import { useBox } from './hooks/useBox'
import { Box } from './components/Box'
import { WinnerReset } from './components/Winner'

function App () {
  const { board, playerWinner, handleChangeBox, handleReset } = useBox()

  const off = playerWinner !== null ? '' : '-off'

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

        <button className={`reset${off}`} onClick={handleReset}>
          RESET GAME
        </button>
      </aside>
    </>
  )
}

export default App
