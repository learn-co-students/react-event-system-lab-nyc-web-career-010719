// Code Keypad Component Here
import React, { Component } from 'react'


class Keypad extends Component {

  keyUpEvent() {
    console.log('Entering password...');
  }

  render() {
    return (
      <form>
        <label>Password: </label>
        <input type="password" onKeyUp={this.keyUpEvent}/>
      </form>
    )
  }
}


export default Keypad
