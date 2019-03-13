import React, { Component } from 'react';

export default class KeyPad extends Component {
  render () {
    return (
    <input type="password"
    onKeyUp={() => console.log('Entering password...')}/>
    )

  }
}
