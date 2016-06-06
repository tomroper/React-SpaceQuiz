import React from 'react';
import {browserHistory} from 'react-router';

export default class Timer extends React.Component {

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
     browserHistory.push('/rejected');
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
    </div>
   )
 }
}
