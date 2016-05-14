import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect} from 'react-router';

import Welcome from './components/welcome.jsx';
import Timer from './components/timer.jsx';
import TestScreen from './components/test_screen.jsx';
import Accepted from './components/accepted.jsx';
import Rejected from './components/rejected.jsx';

require('./styles/reset.scss');
require('./styles/main.scss');

class App extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
       <Redirect from='/' to='/welcome'/>
       <Route path='/welcome' component={Welcome}/>
       <Route path='/test_screen' component={TestScreen}/>
       <Route path='/accepted' component={Accepted}/>
       <Route path='/rejected' component={Rejected}/>
       {/*<Route path='*' component={NotFound}/>*/}
     </Router>);
  } //render close
} //App close


// - - - - - - - - - - - - - New Component - - - - -




ReactDOM.render(<App/>, document.getElementById('react-app'));


//state is the data driving you UI over time
//properties are also data, props are the data assoc with React comps that doesnt change
