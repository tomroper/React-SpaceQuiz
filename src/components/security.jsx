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
    this.setState({ clicked: true});
    // browserHistory.push('/welcome')
  }

  render(){
    return(
      <div className="quizBox">
        {!this.state.clicked ?
        <div>
          <h1>Enter your name for security clearance</h1>
          <form>
            <input type="text" ref="userName" />
            <button
            onClick={this._nameSubmitted.bind(this)}>Submit</button>
          </form>
        </div> :
          <Welcome usersName={`${nameInput}`} /> }

      </div>
    )

  }
}
