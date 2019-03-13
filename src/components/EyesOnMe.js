// Code EyesOnMe Component Here

import React, { Component } from 'react'

class EyesOnMe extends Component {

  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}>this is a button</button>
    )
  }

  handleBlur() {
    console.log("Hey! Eyes on me!");
  }

  handleFocus() {
    console.log("Good!");
  }

}

export default EyesOnMe
