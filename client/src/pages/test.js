import React from 'react'
import { Button } from 'components'
import styles from './test.module.css'

const Test = ({ name = 'Email', number = 1 }) => (
  <div id={styles.container}>
    <h2 id={styles.subtitle}>Password {number}</h2>
    <h1 id={styles.title}>{name}</h1>
    <div className={styles.content}>
      Enter your password below.
      {/* TODO: The password input component */}
      <div className={styles.display}>
        <Button
          inverted
          label='Submit'
          action={() => alert('[TEST] Password submitted.')}
          style={{ marginBottom: 0 }}
        />
      </div>
    </div>
    <Button label='Next' href='https://songwhip.com/album/the-experience/love-me' />
  </div>
)

export default Test
