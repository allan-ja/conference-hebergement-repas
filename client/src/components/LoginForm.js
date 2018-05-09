import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        return (

  <div className="row">
  <form className="col s12">
    <div className="row">
      <div className="input-field col s6">
        <label for="first_name">First Name</label>
      </div>
      <div className="input-field col s6">
    
        <label for="last_name">Last Name</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <label for="disabled">Disabled</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <label for="password">Password</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <label for="email">Email</label>
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        This is an inline input field:
        <div className="input-field inline">
          <label for="email" data-error="wrong" data-success="right">Email</label>
        </div>
      </div>
    </div>
  </form>
</div>
      
        );
    }
}

export default LoginForm;