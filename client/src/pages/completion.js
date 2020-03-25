import React from 'react'
import { Button } from 'components'
import styles from './completion.module.css'

const Completion = () => (
  <div id={styles.container}>
    <h1 id={styles.title}>Test Complete</h1>
    <h2 id={styles.subtitle}>Thanks for participating!</h2>
    <div id={styles.content}>Please fill out the following questionnaire regarding our test.</div>
    <Button label='Questionnaire' href='https://songwhip.com/album/the-experience/love-me' />
  </div>
)

export default Completion
