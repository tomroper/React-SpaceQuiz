import React from 'react';
import {browserHistory} from 'react-router';

const questions = [
  {question: 'question1', answer: '1'},
  {question: 'this is q2', answer: '2'},
  {question: 'What is the airspeed velocity of an unladen swallow?', answer: 'african or european?'}
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
        if (numberCorrect === 3){
          browserHistory.push('/accepted')
        } else {
          browserHistory.push('/rejected')
        }
      }

      this.refs.answer.value = '';

  }

  render() {
    return(
      <div>
        <form name="questionForm">
        <h1> {questions[this.state.qCount].question} </h1>
        <input type="text" ref="answer" />
        <button onClick={this._answerSubmitted.bind(this)}>submit</button>
        </form>
      </div>
    ) //return
  } // render
} // class
