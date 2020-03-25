import React from 'react'
import { Button } from 'components'
import styles from './test.module.css'

const scenarios = ['Email', 'Banking', 'School']

const Test = ({ number, order, next }) => (
  <div id={styles.container}>
    <h2 id={styles.subtitle}>Password {number + 1}</h2>
    <h1 id={styles.title}>{scenarios[order[number] - 1]}</h1>
    <div className={styles.content}>
      Enter your password below.
      {/* TODO: The password input component */}
      <div className={styles.display}></div>
    </div>
    {number < 2 ? <Button label='Next' action={next} /> : <Button label='Next' linkTo='/session/completion' />}
  </div>
)

export default Test
