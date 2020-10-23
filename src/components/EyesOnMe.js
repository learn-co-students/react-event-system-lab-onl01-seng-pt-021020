import { render } from 'enzyme'
import React, {Component} from 'react'

export default class Keypad extends Component {

    onFocus = () => {console.log("Good!")}
    onBlur = () => {console.log("Hey! Eyes on me!")}

    render() {
        return(
            <button onFocus={this.onFocus} onBlur={this.onBlur}></button>
        )
    }
}