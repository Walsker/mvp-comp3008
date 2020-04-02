import React from 'react'

const PasswordDisplay = ({ password }) => {
  const passwordArray = password.split('')
  const images = [
    require('assets/upArrow.png'),
    require('assets/upRightArrow.png'),
    require('assets/rightArrow.png'),
    require('assets/downRightArrow.png'),
    require('assets/downArrow.png'),
    require('assets/downLeftArrow.png'),
    require('assets/leftArrow.png'),
    require('assets/upLeftArrow.png')
  ]

  return (
    <div>
      {passwordArray.map((character, i) => (
        <img key={i} style={{ width: 60, height: 75, margin: '0 10px' }} src={images[character]} alt='Up Left' />
      ))}
    </div>
  )
}

export default PasswordDisplay
