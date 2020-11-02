import React from 'react'
import { Button, Form, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/userActions'

class Signup extends React.Component {

  render() {
    return (
      <>
        <Header centered as='h2'>Sign Up</Header>
        <Form className="auth-form" centered onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group centered>
            <Form.Input onChange={(e) => this.handleChange(e)} name="first_name" required={true} label="First Name" type="text" />
            <Form.Input onChange={(e) => this.handleChange(e)} name="last_name" required={true} label="Last Name" type="text" />
          </Form.Group>
          <Form.Input onChange={(e) => this.handleChange(e)} name="email" required={true} label="Email" type="email" />
          <Form.Input onChange={(e) => this.handleChange(e)} name="password" 
          required={true} label='Enter Password' type='password' />
          <Form.Input onChange={(e) => this.handleChange(e)} name="password_confirmation" 
          required={true} label='Confirm Password' type='password' />
          <Button type='submit'>Sign Up</Button>
        </Form>
      </>
      )
    }

    handleChange = (e) => {
    this.setState({
    [e.target.name]: e.target.value
    })
    }
    
  
  handleSubmit = (e) => {
    e.preventDefault()
    let request = {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
      },
      body: JSON.stringify({user: this.state})
    }
    fetch(`http://localhost:3000/api/v1/signup`, request)
    .then(r => r.json())
    .then(data => this.props.loginUser(data))
  }

}

const mapStateToProps = state => {
  return { 
    user: state.user,
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps, { loginUser })(Signup);