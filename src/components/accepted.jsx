import React from 'react';
import {browserHistory} from 'react-router';
var FontAwesome = require('react-fontawesome');


export default class Accepted extends React.Component{

  render() {
    return(
      <div className="acceptedPage">
        <div className="quizBox secQuesBox">
        <h1 className="questionFont"> you got ACCEPTED </h1>
        <FontAwesome name="fa fa-space-shuttle" aria-hidden="true" />
        </div>
    </div>
  );
  }
}
