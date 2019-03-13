import React, { Component } from 'react';

export default class Keypad extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
        <label htmlFor="password-input">Please type your password</label>
        <input name="password-input" type="text" onKeyUp={() => console.log("Entering password...")}></input>
      </form>
    )
  }
}
