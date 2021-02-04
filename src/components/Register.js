import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Register extends React.Component{


  state = {
    email: '',
    password:'',
    conpassword: '',
    username:''
  };

  email = (ev) => {
    console.log('email():', ev.target.value)
    this.setState({ email: ev.target.value})
  }
  password = (ev) => {
    console.log('password():', ev.target.value)
    this.setState({ password: ev.target.value})
  }
  username = (ev) => {
    console.log('username():', ev.target.value)
    this.setState({ username: ev.target.value})
  }
  conpassword = (ev) => {
    console.log('username():', ev.target.value)
    this.setState({ conspassword: ev.target.value})
  }

  handleSubmit = (ev) => {

      console.log()
    ev.preventDefault(this.state.email, this.state.password, this.state.username); //stop the form submit from reloading the page
    //send the secret content to the parent component so it can submit it
    //to the parent backend
    this.props.onRegisterSubmit( this.state.email, this.state.password, this.state.username)


  }

  render(){

    return(
      <div className="login-wrapper">
      <Form onSubmit={this.handleSubmit}>
      <Form.Group controlId="formBasicEmail" onSubmit={this.handleSubmit}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={this.email}/>
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicEmail" onSubmit={this.handleSubmit}>
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter username" onChange={this.username}/>
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={this.password}/>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm passowrd</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={this.conspassword}/>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      </div>


    )


  } // render



} //User form


export default Register



//
// <form onSubmit={this.handleSubmit}>
//   <h3> Name </h3>
//   <textarea onChange={this.username}/>
//   <br />
//   <h3> Email </h3>
//   <textarea onChange={this.email}/>
//   <br />
//   <h4> Password </h4>
//   <textarea onChange={this.password}/>
//   <br />
//   <h4> Confirm Password </h4>
//   <textarea onChange={this.conpassword}/>
//   <br />
//
//   <button> Create account </button>
// </form>
