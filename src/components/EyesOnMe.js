// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  focus = () => {console.log('Good!')};
  see = () => {console.log('Hey! Eyes on me!')}

  render() {
    return(
      <button onFocus={this.focus} onBlur={this.see}>button</button>
    )
  }

}


export default EyesOnMe;
