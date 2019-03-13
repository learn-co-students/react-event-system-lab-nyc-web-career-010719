import React from 'react';

class Keypad extends React.Component {


handelLog = () => {
  console.log('Entering password...')
}

  render(){
    return <div>
    <input type="password" onKeyUp={this.handelLog} />
    </div>
  }
}
export default Keypad;
