import React, { useState, useEffect } from 'react'
import styles from './passwordInput.module.css'

/* This file contains the code for our arrow password scheme. It keeps track 
of which button on the arrow button pad has been clicked, and executes the
respective button click event handlers. The button images were created through
Figma and exported as .png files as an image on top of each HTML arrow button.*/

const PasswordInput = ({ correctPassword, onCorrect, onIncorrect }) => {
  //Declaring masterPassword as a current state variable, and 
  //setMasterPassword is the function to update it (via a state hook)
  const [masterPassword, setMasterPassword] = useState('')

  //Tells our component to check for correct password entry length each time 
  //after masterPassword is re-rendered/updated
  useEffect(() => {
    //if they enter the correct length, check if entry is correct/incorrect 
    //and call their respective functions
    if (masterPassword.length === 7) { 
      if (masterPassword === correctPassword) { 
        alert('Correct :)')
        onCorrect() 
      } else {
        alert('Incorrect :(')
        onIncorrect()
      }
      //after the correct/incorrect function is called use state hook to reset masterPassword
      setMasterPassword('') 
    }
  }, [masterPassword]) //this part runs only when masterPassword is updated
  //in this case, masterPassword is updated whenever the a button click occurs (seen below),
  //rather than 

  //Button click event handlers
  const arrowClicked = number => () => setMasterPassword(masterPassword + number)
  const upArrowClicked = arrowClicked('0')
  const upRightArrowClicked = arrowClicked('1')
  const rightArrowClicked = arrowClicked('2')
  const downRightArrowClicked = arrowClicked('3')
  const downArrowClicked = arrowClicked('4')
  const downLeftArrowClicked = arrowClicked('5')
  const leftArrowClicked = arrowClicked('6')
  const upLeftArrowClicked = arrowClicked('7')

  //Render buttons and images to screen
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <div>
          <div style={{ flex: 1, flexDirection: 'row' }}>
            <button style={{ borderRadius: 5 }}>
              <img
                id='up-arrow'
                style={{ width: 80, height: 100, borderRadius: 10 }}
                src={require('assets/upLeftArrow.png')}
                onClick={upLeftArrowClicked}
                alt='Up Left'
              />
            </button>
            <button>
              <img
                id='up-arrow'
                style={{ width: 80, height: 100 }}
                src={require('assets/upArrow.png')}
                onClick={upArrowClicked}
                alt='Up'
              />
            </button>
            <button style={{ borderRadius: 5 }}>
              <img
                id='up-arrow'
                style={{ width: 80, height: 100 }}
                src={require('assets/upRightArrow.png')}
                onClick={upRightArrowClicked}
                alt='Up Right'
              />
            </button>
          </div>
          <div style={{ flex: 1, flexDirection: 'row' }}>
            <button>
              <img
                id='up-arrow'
                style={{ width: 80, height: 100 }}
                src={require('assets/leftArrow.png')}
                onClick={leftArrowClicked}
                alt='Left'
              />
            </button>
            <button disabled>
              <img id='up-arrow' style={{ width: 80, height: 100 }} src={require('assets/blank.png')} alt=' ()' />
            </button>
            <button>
              <img
                id='up-arrow'
                style={{ width: 80, height: 100 }}
                src={require('assets/rightArrow.png')}
                onClick={rightArrowClicked}
                alt='Right'
              />
            </button>
          </div>
          <div style={{ flex: 1, flexDirection: 'row' }}>
            <button style={{ borderRadius: 5 }}>
              <img
                id='up-arrow'
                style={{ width: 80, height: 100 }}
                src={require('assets/downLeftArrow.png')}
                onClick={downLeftArrowClicked}
                alt='Down Left'
              />
            </button>
            <button>
              <img
                id='up-arrow'
                style={{ width: 80, height: 100 }}
                src={require('assets/downArrow.png')}
                onClick={downArrowClicked}
                alt='Down'
              />
            </button>
            <button style={{ borderRadius: 5 }}>
              <img
                id='up-arrow'
                style={{ width: 80, height: 100 }}
                src={require('assets/downRightArrow.png')}
                onClick={downRightArrowClicked}
                alt='Down Right'
              />
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default PasswordInput
