import React from 'react'
import { Button } from 'components'
import styles from './scenario.module.css'

// TODO: Pass in the sequence to display
const Scenario = ({ name = 'Email', number = 1 }) => (
  <div id={styles.container}>
    <h2 id={styles.subtitle}>Scenario {number}</h2>
    <h1 id={styles.title}>{name}</h1>
    <div className={styles.content}>
      Your password is the following sequence of arrows:
      <div className={styles.display}>{/* TODO: Arrows */}</div>
    </div>
    <div className={styles.content}>
      Practice your password with the input below.
      {/* TODO: The password input component */}
      <div className={styles.display}>
        <Button inverted label='Test' action={() => alert('[TEST] Password submitted.')} style={{ marginBottom: 0 }} />
      </div>
    </div>
    <Button label='Next' href='https://songwhip.com/album/the-experience/love-me' />
  </div>
)

export default Scenario
