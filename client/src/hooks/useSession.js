import { useState } from 'react'
import { generate } from 'shortid'

// The Fisher-Yates shuffle. See https://bost.ocks.org/mike/shuffle/
const fisherYatesShuffle = array => {
  var m = array.length,
    t,
    i

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--)

    // And swap it with the current element.
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }

  return array
}

const generatePassword = () => {
  let output = ''

  for (let i = 0; i < 7; i++) {
    output += Math.floor(Math.random() * 8).toString()
  }

  return output
}

const useSession = () => {
  const [id] = useState(generate())
  const [emailPassword] = useState(generatePassword())
  const [bankingPassword] = useState(generatePassword())
  const [schoolPassword] = useState(generatePassword())
  const [testOrder] = useState(fisherYatesShuffle([0, 1, 2]))

  return {
    id,
    passwords: [emailPassword, bankingPassword, schoolPassword],
    testOrder
  }
}

export default useSession
