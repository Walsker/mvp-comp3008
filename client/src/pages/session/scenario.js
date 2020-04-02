import React, { useEffect } from 'react'
import { Button, PasswordDisplay, PasswordInput } from 'components'
import styles from './scenario.module.css'
import { newEntry, EVENTS } from 'helpers/logger'

const scenarios = ['Email', 'Banking', 'School']

// TODO: Pass in the sequence to display
const Scenario = ({ number, password, next }) => {
  console.log(`Scenario: ${number}, Password: ${password}`)
  useEffect(() => {
    newEntry('N/A', EVENTS.startTest)
  }, [])

  return (
    <div id={styles.container}>
      <h2 id={styles.subtitle}>Scenario {number + 1}</h2>
      <h1 id={styles.title}>{scenarios[number]}</h1>
      <div className={styles.content}>
        Your password is the following sequence of arrows:
        <div className={styles.display}>
          <PasswordDisplay password={password} />
        </div>
      </div>
      <div className={styles.content}>
        Practice your password with the input below.
        <div className={styles.display}>
          <PasswordInput
            correctPassword={password}
            onCorrect={() => newEntry(scenarios[number], EVENTS.pwPracticeGood)}
            onIncorrect={() => newEntry(scenarios[number], EVENTS.pwPracticeBad)}
          />
        </div>
      </div>
      {number < 2 ? (
        <Button
          label='Next'
          action={() => {
            newEntry(scenarios[number], EVENTS.nextPage)
            next()
          }}
        />
      ) : (
        <Button label='Next' linkTo='/session/halfway' />
      )}
    </div>
  )
}

export default Scenario
