import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
// import LoginForm from './LoginForm';
import RegistrationPage from './RegistrationPage'


class App extends Component {
  render() {
    return (

            <div className="App">
              <Header />
              <RegistrationPage />
            {/* <Route exact path="/" component={LoginForm} /> */}
          </div>
    );
  }
}

export default App;