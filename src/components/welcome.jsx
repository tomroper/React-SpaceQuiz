import React from 'react';
import {browserHistory} from 'react-router';

export default class Welcome extends React.Component {


  constructor(props) {
      super(props);
      this.state = {
        //
      }
  }

  _loadBeginButton() {
    browserHistory.push('/test_screen')
  }

  render() {
    return(

      <button onClick={this._loadBeginButton.bind(this)}>Start NASA test</button>

    )
  } //render
}//Quiz
