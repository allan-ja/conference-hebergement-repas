import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';

class LoginForm extends React.Component  {
  render() {
    return(
      <Container>
        <Row>
          <Col md="6">
            <form>
                <p className="h4 text-center mb-4">Sign in</p>
                <label htmlFor="defaultFormLoginEmailEx" className="grey-text">Your email</label>
                <input type="email" id="defaultFormLoginEmailEx" className="form-control"/>
                <br/>
                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">Your password</label>
                <input type="password" id="defaultFormLoginPasswordEx" className="form-control"/>
                <div className="text-center mt-4">
                <button className="btn btn-indigo" type="submit">Login</button>
                </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default LoginForm;