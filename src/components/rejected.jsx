import React from 'react';
import {browserHistory} from 'react-router';

export default class Rejected extends React.Component{

  _tryAgain() {
    browserHistory.push('/welcome')
  }

  render() {
    return(
    <div>
    <h1> you got Rejected </h1>
    <button onClick={this._tryAgain.bind(this)}>Want to try again?</button>
    </div>
    );
  }
}
