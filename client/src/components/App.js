import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import RegistrationPage from './RegistrationPage'
import ActivityContainer from './ActivityContainer'
import Notifier from './Notifier'


class App extends Component {
  render() {
    return (

            <div className="App">
              <Header />
              {/* <RegistrationPage /> */}
              <ActivityContainer />
              <Notifier />
            {/* <Route exact path="/" component={LoginForm} /> */}
          </div>
    );
  }
}

export default App;