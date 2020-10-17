// Code Keypad Component Here
import React, {Component} from 'react'

const keyListed = () => {
    console.log('Entering password...')
}

const Keypad = () => {
     return(
        <input onKeyUp={keyListed} type="password" />
     )
}

export default Keypad