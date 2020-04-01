import React, { useState } from 'react'
import { Button, PasswordInput } from 'components'
import styles from './test.module.css'
import { newEntry, EVENTS } from 'helpers/logger'

const scenarios = ['Email', 'Banking', 'School']
const STATES = {
  waiting: 'waiting',
  attempting: 'attempting',
  passed: 'passed',
  failed: 'failed'
}

const Test = ({ number, order, session, next }) => {
  const [isAttempting, setIsAttempting] = useState(false)
  const [failedAttempts, setFailedAttempts] = useState(0)

  const Input = () => {
    const onCorrect = () => {
      newEntry(scenarios[number], EVENTS.pwPracticeGood)
      setIsAttempting(false)
      session.setState(STATES.passed)
    }

    const onIncorrect = () => {
      newEntry(scenarios[number], EVENTS.pwPracticeBad)
      setIsAttempting(false)
      if (failedAttempts === 2) {
        session.setState(STATES.failed)
      } else {
        session.setState(STATES.waiting)
        setFailedAttempts(failedAttempts + 1)
      }
    }

    if (!isAttempting) {
      return (
        <Button
          inverted
          disabled={session.state === STATES.failed || session.state === STATES.passed}
          label='Attempt'
          action={() => {
            newEntry(scenarios[number], EVENTS.pwTestStart)
            setIsAttempting(true)
            session.setState(STATES.attempting)
          }}
        />
      )
    } else {
      return <PasswordInput onCorrect={onCorrect} onIncorrect={onIncorrect} />
    }
  }

  return (
    <div id={styles.container}>
      <h2 id={styles.subtitle}>Password {number + 1}</h2>
      <h1 id={styles.title}>{scenarios[order[number] - 1]}</h1>
      <div className={styles.content}>
        Enter your password below.
        <div className={styles.display}>
          <Input />
        </div>
      </div>
      {number < 2 ? (
        <Button
          label='Next'
          disabled={!(session.state === STATES.failed || session.state === STATES.passed)}
          action={() => {
            newEntry(scenarios[number], EVENTS.nextPage)
            setFailedAttempts(0)
            next()
          }}
        />
      ) : (
        <Button label='Next' linkTo='/session/completion' action={() => newEntry('N/A', EVENTS.testComplete)} />
      )}
    </div>
  )
}

export default Test
