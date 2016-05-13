import React from 'react';
import {browserHistory} from 'react-router';

const questions = [
  {question: 'this is q1', answer: '1'},
  {question: 'this is q2', answer: '2'},
  {question: 'this is q3', answer: '3'}
];

let numberCorrect = 0;

export default class Questions extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        qCount : 0
      }
  }


  _answerSubmitted(e) {
    e.preventDefault();
    let userAnswer = this.refs.answer.value ;
    let correctAnswer = questions[this.state.qCount].answer;

    if(userAnswer === correctAnswer ) {
      numberCorrect ++
    }



    if (this.state.qCount < questions.length -1){
      this.setState({ qCount: this.state.qCount + 1})
    } else {
      alert('if correct answer are correct you win, if not you lose');
    }
  }

  render() {
    return(
      <div>
        <form name="questionForm">
        <h1> {questions[this.state.qCount].question} </h1>
        <input type="text" ref="answer" />
        <button onClick={this._answerSubmitted.bind(this)}>submit</button>
        {`Your score is ${numberCorrect}`}
        </form>
      </div>
    ) //return
  } // render
} // class
