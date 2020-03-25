import React from 'react'
import { Link } from 'react-router-dom'

import styles from './button.module.css'

const Button = ({ href, label, inverted, action, linkTo, ...props }) => {
  if ((href && (action || linkTo)) || (action && linkTo))
    throw new Error('Please choose whether this button is a link or a normal button.')
  if (href) {
    return (
      <div className={styles.container}>
        <a
          className={inverted ? styles.labelInverted : styles.label}
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
        <Link className={inverted ? styles.labelInverted : styles.label} to={linkTo} {...props}>
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
