// Code EyesOnMe Component Here
import React from 'react'

let blurCheck = () => {
    console.log('Hey! Eyes on me!')
}

let focusCheck = () => {
    console.log('Good!')
}

function EyesOnMe() {
    return(
        <button onBlur={blurCheck} onFocus={focusCheck} />
    )
}

export default EyesOnMe