import React from 'react'
import { Button } from 'components'
import styles from './consent.module.css'

const Consent = () => (
  <div id={styles.container}>
    <h1 id={styles.title}>Consent</h1>
    <div className={styles.content}>
      This is a test of password schemes. Text-based passwords are secure, however they are difficult to remember, which
      leads to the creation and propagation of insecure passwords.
    </div>
    <div className={styles.content}>
      We’re looking to create a new password scheme that is just as secure as text-based passwords, but is easier to
      remember.
    </div>
    <div className={styles.content}>
      Before we begin, you will need to agree with terms laid out in the consent form linked below.
    </div>
    <div id={styles.buttonContainer}>
      <Button label='Consent Form' href='https://hotsoft.carleton.ca/comp3008limesurvey/index.php/266286?lang=en' />
      <Button label='Next' linkTo='/instructions' />
    </div>
  </div>
)

export default Consent
