import React from 'react';
import {browserHistory} from 'react-router';

import Timer from './timer'

export default class TestScreen extends React.Component {


  constructor(props) {
      super(props);
      this.state = {
        started: false
      }
  }

  _startTimer() {
    this.setState({started: true})
  }

  _stopTimer() {
    this.setState({started: false})
  }

  render() {
    return(
      <div>
      <Timer
       started={this.state.started}
       stopTimer={this._stopTimer.bind(this)}
       secondsRemaining="60"/>
      <h1>Quiz Area</h1>
      </div>
    )
  } //render
}//Quiz
