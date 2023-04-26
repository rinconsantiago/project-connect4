import PropTypes from 'prop-types'

export function WinnerReset ({ playerWinner }) {
  return (
    <>
      <h3>
        The Winner Is:{' '}
        <span className='winnerText' style={{ color: playerWinner }}>
          {playerWinner}
        </span>
      </h3>
    </>
  )
}

WinnerReset.propTypes = {
  playerWinner: PropTypes.string.isRequired
}
