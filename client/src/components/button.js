import React from 'react'
import { Link } from 'react-router-dom'

import styles from './button.module.css'

const Button = ({ href, label, inverted, disabled, action, linkTo, ...props }) => {
  if (href && linkTo) throw new Error('Please choose whether this button is a html link or a router link.')
  if (disabled) {
    return (
      <div className={styles.disabledContainer}>
        <div className={inverted ? styles.labelInvertedDisabled : styles.labelDisabled} {...props}>
          {label.toUpperCase()}
        </div>
      </div>
    )
  } else if (href) {
    return (
      <div className={styles.container}>
        <a
          className={inverted ? styles.labelInverted : styles.label}
          onClick={action}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          {...props}
        >
          {label.toUpperCase()}
        </a>
      </div>
    )
  } else if (linkTo) {
    return (
      <div className={styles.container}>
        <Link className={inverted ? styles.labelInverted : styles.label} to={linkTo} onClick={action} {...props}>
          {label.toUpperCase()}
        </Link>
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
