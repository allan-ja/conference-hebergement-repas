import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './Header/Header';
import RegistrationPage from './Registration/RegistrationPage'
import ActivityContainer from './Activity/ActivityContainer'
import Notifier from './Notifier'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <Route path="/activities" component={ActivityContainer} />
            <Route path="/registration" component={RegistrationPage} />
            <Notifier />
          {/* <Route exact path="/" component={LoginForm} /> */}
        </div>
      </Router>
    );
  }
}

export default App;