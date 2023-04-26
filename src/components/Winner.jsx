import PropTypes from 'prop-types'

export function WinnerReset ({ playerWinner, handleReset }) {
  return (
    <>
      <h3>
        The Winner Is:{' '}
        <span className='winnerText' style={{ color: playerWinner }}>
          {playerWinner}
        </span>
      </h3>
      <button className='reset' onClick={handleReset}>
        RESET GAME
      </button>
    </>
  )
}

WinnerReset.propTypes = {
  playerWinner: PropTypes.string.isRequired,
  handleReset: PropTypes.func.isRequired
}
