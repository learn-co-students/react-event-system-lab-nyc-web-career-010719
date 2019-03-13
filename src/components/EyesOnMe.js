// Code EyesOnMe Component Here
// In the components/EyesOnMe.js file, create a EyesOnMe React component.
// In that component, render a button.
// On that button, add event handlers that listens for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
import React from "react";

class EyesOnMe extends React.Component {
  handleOnBlur=()=>{
    console.log('Hey! Eyes on me!')
  }
  handleOnFocus=()=>{
    console.log('Good!')
  }

  render() {
    return (
      <div>
        <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}>Button</button>

      </div>
    )
  }
}
export default EyesOnMe
