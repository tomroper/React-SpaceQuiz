import React from 'react';
import {browserHistory} from 'react-router';

export default class Welcome extends React.Component {


  constructor(props) {
      super(props);
      this.state = {
        clicked: false
      }
  }

  _loadBeginButton(){
    this.setState({ clicked: true })
  }

  _loadTestScreen() {
    browserHistory.push('/test_screen')
  }

  render() {
    return(
      <div className="uiBox">

        {!this.state.clicked ?
          <div className="secQuesBox">
          <h1 className="questionFont">System initited. {this.props.usersName}, you have Level 1 clearance</h1>
          <button className="inputButton" onClick={this._loadBeginButton.bind(this)}>Join Mars Colony</button></div>
           :
          <div className="secQuesBox">
           <h1 className="questionFont">To confirm suitability for Mars Colony, test will be run</h1>
           <button className="inputButton" onClick={this._loadTestScreen.bind(this)}>I agree</button>
          </div> }

      </div>
    )
  } //render
}//Quiz
