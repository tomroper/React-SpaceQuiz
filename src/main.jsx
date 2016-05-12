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
          <Timer/>
          <Quiz/>
          <h2>{this.state.testArray.title}</h2>
        </div>
      </div>
    ); //return close
  } //render close
} //App close

// - - - - - - - - - - - - - New Component - - - - -

class Timer extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        time: [
          {seconds: 60}
        ]
      }
  }

  _secondsRemaining(){
      return(
        <h1>hello</h1>
      )
    }


  render() {
    return(
      <h1> Here is the time left {this.state.time.seconds.text} </h1>

    )
  } //render
}//Timer

// - - - - - - - - - - - - - New Component - - - - -

class Quiz extends React.Component {


  constructor(props) {
      super(props);
      this.state = {
        //
      }
  }

  _secondCount(){

  }

  render() {
    return(

      <button onClick={this._secondCount.bind(this)}>Start Test</button>

    )
  } //render
}//Quiz


ReactDOM.render(<App/>, document.getElementById('react-app'));


//state is the data driving you UI over time
//properties are also data, props are the data assoc with React comps that doesnt change
