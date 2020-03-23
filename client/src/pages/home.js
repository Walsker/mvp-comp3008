import React from 'react'
import { Button } from 'components'
import styles from './home.module.css'

const Home = () => (
  <div id={styles.container}>
    <h1 id={styles.title}>Password Tester</h1>
    <h2 id={styles.subtitle}>COMP 3008 - Project 2</h2>
    <div id={styles.content}>A project by Wal Wal, Umai Balendra, Kelvin Tran, and Haohao Du.</div>
    <Button label='Start' href='https://songwhip.com/album/the-experience/love-me' />
  </div>
)

export default Home
