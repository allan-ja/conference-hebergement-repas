
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import LoginForm from './LoginForm';

const Landing = () => <h2>Landing</h2>;

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={LoginForm} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;