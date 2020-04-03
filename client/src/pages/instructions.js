import React from 'react'
import { Button } from 'components'
import Example from 'assets/example.png'
import OrderImg from 'assets/order.png'
import styles from './instructions.module.css'

const Instructions = () => (
  <div id={styles.container}>
    <h1 id={styles.title}>Instructions</h1>
    <div className={styles.splitContent}>
      <div className={styles.quadrant}>
        Our new password scheme uses an arrow pad instead of a keyboard. A password consists of a series of directions
        entered into the pad in order.
      </div>
      <div className={styles.quadrant}>
        <img draggable={false} className={styles.pictureAsset} src={Example} alt='Example' />
      </div>
    </div>
    <div className={styles.splitContent}>
      <div className={styles.quadrant}>
        <img draggable={false} className={styles.pictureAsset} src={OrderImg} alt='Email -> Banking -> School' />
      </div>
      <div className={styles.quadrant}>
        <div style={{ marginBottom: 20 }}>
          You will be provided with three randomly generated passwords, one for each scenario. Once you’ve practiced
          with all three passwords you will be asked to re-enter them in a random order.
        </div>
        <div>
          You will have three attempts for each password before it is considered unsuccessful, much like normal password
          authentication.
        </div>
      </div>
    </div>
    <div id={styles.content}>
      <strong>For the integrity of the test, please refrain from using any memoranda.</strong>
    </div>
    <Button label='Begin Test' linkTo='/session' />
  </div>
)

export default Instructions
