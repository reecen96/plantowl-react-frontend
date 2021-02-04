import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class Login extends React.Component{


  state = {
    email: '',
    password:''
  };

  username = (ev) => {
    console.log('username():', ev.target.value)
    this.setState({ email: ev.target.value})
  }
  password = (ev) => {
    console.log('password():', ev.target.value)
    this.setState({ password: ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault(); //stop the form submit from reloading the page
    //send the secret content to the parent component so it can submit it
    //to the parent backend
    this.props.onLoginSubmit( this.state.email, this.state.password )
  }

  render(){
    return(
      <div className="login-wrapper">
       <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail" onSubmit={this.handleSubmit}>
             <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="Enter email" onChange={this.username}/>
             <Form.Text className="text-muted">
                Inut.
             </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password"  onChange={this.password}/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
          </Form.Group>
          <Button variant="primary" type="submit">
          Submit
          </Button>
       </Form>
     </div>
    )

  } // end render

} //User form


export default Login
