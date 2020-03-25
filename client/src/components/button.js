import React, { useLayoutEffect, useRef, useState } from 'react'
import styles from './button.module.css'

const Button = ({ href, label, inverted, action, ...props }) => {
  if (href && action) throw new Error('Please choose whether this button is a link or a normal button.')
  if (href) {
    return (
      <div className={styles.container}>
        <a className={inverted ? styles.labelInverted : styles.label} href={href} {...props}>
          {label.toUpperCase()}
        </a>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <div className={inverted ? styles.labelInverted : styles.label} onClick={action} {...props}>
          {label.toUpperCase()}
        </div>
      </div>
    )
  }
}
export default Button
