import * as React from 'react';
import * as ReactDOM from 'react-dom';

require('./styles/reset.scss');
require('./styles/main.scss');

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        testArray: [
          {title: 'testArrayItem'}
        ]
      }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <div className="branding"><h1 className="sidebarFont">nasa</h1></div>
        </div>
        <div className="quizArea">
          <Timer secondsRemaining="60"/>
          <Quiz/>
        </div>
      </div>
    ); //return close
  } //render close
} //App close

// - - - - - - - - - - - - - New Component - - - - -

class Timer extends React.Component {

 constructor(props){
   super(props);
   this.state = {
     secondsRemaining: 0
   }
 }

 _tick() {
   this.setState({secondsRemaining: this.state.secondsRemaining - 1});
   if (this.state.secondsRemaining <= 0) {
     clearInterval(this.timer);
   }
 }
 _renderMinutes() {
   let minutes = Math.floor(this.state.secondsRemaining / 60);
   let seconds = this.state.secondsRemaining % 60;
   seconds = seconds < 10 ? '0' + seconds : seconds;

   return (<div className="timerBox">{minutes}:{seconds}</div>)
 }

 _startTimer(){
   console.log(this.props.secondsRemaining);
 }

 componentDidMount() {
   this.setState({ secondsRemaining: this.props.secondsRemaining });
   this.timer = setInterval(this._tick.bind(this), 1000);
 }
 componentWillUnmount() {
   clearInterval(this.timer);
 }
 render(){
   return (
     <div className="startTest">
         <div className="timer">
           {this._renderMinutes()}
         </div>
         <button onClick={this._startTimer.bind(this)}>Start Test</button>
      </div>
   )
 }
}

// - - - - - - - - - - - - - New Component - - - - -

class Quiz extends React.Component {


  constructor(props) {
      super(props);
      this.state = {
        //
      }
  }

  render() {
    return(

      <h1>Quiz Area</h1>

    )
  } //render
}//Quiz


ReactDOM.render(<App/>, document.getElementById('react-app'));


//state is the data driving you UI over time
//properties are also data, props are the data assoc with React comps that doesnt change
