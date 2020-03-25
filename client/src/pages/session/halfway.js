import React from 'react'
import { Button } from 'components'
import styles from './halfway.module.css'

const Halfway = () => (
  <div id={styles.container}>
    <h1 id={styles.title}>Halfway Point</h1>
    <h2 id={styles.subtitle}>Good job!</h2>
    <div id={styles.content}>
      We’ll now ask you to enter the passwords you just memorized, in no particular order.
      <br />
      <br />
      Are you ready?
    </div>

    <Button label='Continue' linkTo='/session/test' />
  </div>
)

export default Halfway
