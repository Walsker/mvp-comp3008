import React from 'react'
import { Button, PasswordInput } from 'components'
import styles from './test.module.css'
import { newEntry, EVENTS } from 'helpers/logger'

const scenarios = ['Email', 'Banking', 'School']

const Test = ({ number, order, next }) => (
  <div id={styles.container}>
    <h2 id={styles.subtitle}>Password {number + 1}</h2>
    <h1 id={styles.title}>{scenarios[order[number] - 1]}</h1>
    <div className={styles.content}>
      Enter your password below.
      <div className={styles.display}>
        <PasswordInput
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
      <Button label='Next' linkTo='/session/completion' action={() => newEntry('N/A', EVENTS.testComplete)} />
    )}
  </div>
)

export default Test
