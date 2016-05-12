import * as React from 'react';
import * as ReactDOM from 'react-dom';

require('./styles/reset.scss');
require('./styles/main.scss');

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        //
      }
  }

  render() {
    return (
        <h1> Hello Blank React App!</h1>

    ); //return close
  } //render close
} //App close





ReactDOM.render(<App/>, document.getElementById('react-app'));


//state is the data driving you UI over time
//properties are also data, props are the data assoc with React comps that doesnt change
