import React, { Component } from 'react';

export default class Keypad extends Component {

    handleUpKey = () => {
        console.log("Entering password...")
    }

    render(){
        return (
            <form>
                <input onKeyUp={this.handleUpKey} type='password'></input>
            </form>
        )
    }
}