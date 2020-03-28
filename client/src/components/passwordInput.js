import React from 'react'

const PasswordInput = ({
  correctPassword = '',
  onCorrect = () => alert('Correct!'),
  onIncorrect = () => alert('Incorrect!')
}) => (
  <div>
    <button onClick={onCorrect}>Correct Input</button>
    <button onClick={onIncorrect}>Incorrect Input</button>
  </div>
)

export default PasswordInput
