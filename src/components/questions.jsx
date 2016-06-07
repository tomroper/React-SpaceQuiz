import React from 'react';
import {browserHistory} from 'react-router';

const questions = [
  {question: 'What is the name of the British landing craft that was deployed to Mars Dec 2003?', answer: 'beagle 2'},
  {question: 'Is Mars larger or smaller than Earth?', answer: 'smaller'},
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
        userAnswer = userAnswer.toLowerCase();
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
      <div className="quizBox questionBoxTwo">
        <form className="uiBox" name="questionForm">
        <h1 className="questionFont">{questions[this.state.qCount].question}</h1>
        <input className="textBox" type="text" ref="answer" />
        <button className="inputButton" onClick={this._answerSubmitted.bind(this)}>submit</button>
        </form>
      </div>
    ) //return
  } // render
} // class
