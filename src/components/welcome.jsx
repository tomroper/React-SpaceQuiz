import React from 'react';
import {browserHistory} from 'react-router';

export default class Welcome extends React.Component {


  constructor(props) {
      super(props);
      this.state = {
        clicked: false
      }
  }

  _loadBeginButton(){
    this.setState({ clicked: true })
  }

  _loadTestScreen() {
    browserHistory.push('/test_screen')
  }

  render() {
    return(
      <div>
      {!this.state.clicked ? <button onClick={this._loadBeginButton.bind(this)}>Hello!</button> :
      <button onClick={this._loadTestScreen.bind(this)}>Start the test</button> }
      </div>
    )
  } //render
}//Quiz
