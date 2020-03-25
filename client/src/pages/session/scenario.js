import React from 'react'
import { Button } from 'components'
import styles from './scenario.module.css'

const scenarios = ['Email', 'Banking', 'School']

// TODO: Pass in the sequence to display
const Scenario = ({ number, next }) => (
  <div id={styles.container}>
    <h2 id={styles.subtitle}>Scenario {number + 1}</h2>
    <h1 id={styles.title}>{scenarios[number]}</h1>
    <div className={styles.content}>
      Your password is the following sequence of arrows:
      <div className={styles.display}>{/* TODO: Arrows */}</div>
    </div>
    <div className={styles.content}>
      Practice your password with the input below.
      {/* TODO: The password input component */}
      <div className={styles.display}></div>
    </div>
    {number < 2 ? <Button label='Next' action={next} /> : <Button label='Next' linkTo='/session/halfway' />}
  </div>
)

export default Scenario
