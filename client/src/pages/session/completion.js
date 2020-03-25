import React from 'react'
import { Button } from 'components'
import styles from './completion.module.css'

const Completion = () => (
  <div id={styles.container}>
    <h1 id={styles.title}>Test Complete</h1>
    <h2 id={styles.subtitle}>Thanks for participating!</h2>
    <div id={styles.content}>
      Please fill out the following questionnaire regarding our test.
      <br />
      <br />
      Once complete, you are safe to close this page.
    </div>
    <Button label='Questionnaire' href='https://walsquared.ca' /> {/* TODO: Link questionnaire */}
  </div>
)

export default Completion
