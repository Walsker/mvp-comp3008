import React, { useLayoutEffect, useRef, useState } from 'react'
import styles from './button.module.css'

const Button = ({ href, label, ...props }) => {
  if (href) {
    return (
      <div className={styles.container}>
        <a className={styles.label} href={href} {...props}>
          {label.toUpperCase()}
        </a>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.label}>{label.toUpperCase()}</div>
      </div>
    )
  }
}
export default Button
