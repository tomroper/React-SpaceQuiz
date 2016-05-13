import React from 'react';
import {browserHistory} from 'react-router';

const questions = [ 'this is q1', 'this is q2', 'this is q3' ]



export default class Questions extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        qCount : 0
      }
  }



  render() {
    return(
      <div>
        <form name="questionForm">
        <h1> {questions[qCount]} </h1>
        </form>
      </div>
    ) //return
  } // render
} // class
