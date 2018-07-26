import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
// import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm'
import RegistrationTable from './RegistrationTable'


class App extends Component {
  render() {
    return (

            <div className="App">
            {/* <HeaderTest /> */}
            <Header />
            <RegistrationForm />
            <RegistrationTable />
            {/* <Route exact path="/" component={LoginForm} /> */}
          </div>
    );
  }
}

export default App;