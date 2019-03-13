// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{

blur = () => {
  console.log('Hey! Eyes on me!')
}

focus = () => {
  console.log('Good!');
}


  render(){
    return <div>
    <button onFocus={this.focus} onBlur={this.blur} />
    </div>
  }
}

export default EyesOnMe
