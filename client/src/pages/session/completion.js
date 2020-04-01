import React, { useState, useEffect } from 'react'
import { ReactComponent as Spinner } from 'assets/spinner.svg'
import { Button } from 'components'
import styles from './completion.module.css'
import { save } from 'helpers/logger'

const Completion = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const saveLogs = async () => {
      await save()
      setIsLoading(false)
    }
    saveLogs()
  }, [])

  if (isLoading) {
    return (
      <div id={styles.container}>
        <Spinner />
      </div>
    )
  }

  return (
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
}

export default Completion
