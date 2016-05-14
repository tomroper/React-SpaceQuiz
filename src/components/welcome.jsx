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

        {!this.state.clicked ?
          <div>
          <h1 className="questionFont">System initited. {this.props.usersName}, you have Level 1 clearance</h1>
          <button className="appButtons" onClick={this._loadBeginButton.bind(this)}>Join Mars Colony</button></div>
           :
          <div>
           <h1>To confirm suitability for Mars Colony, test will be run</h1>
           <button onClick={this._loadTestScreen.bind(this)}>Take Test</button>
          </div> }

      </div>
    )
  } //render
}//Quiz
