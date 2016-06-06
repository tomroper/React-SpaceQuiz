import React from 'react';
import {browserHistory} from 'react-router';
import Welcome from './welcome'

let nameInput = '';

export default class Security extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        clicked: false
      }
  }

  _nameSubmitted(e) {
    e.preventDefault();
    nameInput = this.refs.userName.value ;

    if (nameInput.length > 1){
    this.setState({ clicked: true});
    } else {
      alert('If you want to go to Mars, we need to know your name.')
    }
  }

  render(){
    return(
      <div className="quizBox">
        {!this.state.clicked ?
        <div className="uiBox">
          <h1 className="questionFont">Enter your name for security clearance</h1>
          <form className="secQuesBox">
            <input className="textBox" type="text" ref="userName" />
            <button className="inputButton"
            onClick={this._nameSubmitted.bind(this)}>Process</button>
          </form>
        </div> :
          <Welcome usersName={`${nameInput}`} /> }
        </div>
    )
  }
}
