import React from 'react';
import {browserHistory} from 'react-router';

export default class Rejected extends React.Component{

  _tryAgain() {
    browserHistory.push('/welcome')
  }

  render() {
    return(
      <div className="rejectedPage">
        <div className="quizBox  secQuesBox">
        <h1 className="questionFont"> The closest your getting to Mars is by using a telescope. </h1>
        <button className="inputButton" onClick={this._tryAgain.bind(this)}>Want to try again?</button>
        </div>
    </div>
    );
  }
}
<div>
<h1> you got Rejected </h1>

</div>
