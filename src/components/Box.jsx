import PropTypes from 'prop-types'

export function Box ({ board, handleChangeBox }) {
  return (
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
  )
}

Box.propTypes = {
  board: PropTypes.array.isRequired,
  handleChangeBox: PropTypes.func.isRequired
}
