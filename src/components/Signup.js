import React from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'

class Signup extends React.Component {

  render() {
    return (
      <Container>
        <Header as='h2'>Sign Up</Header>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Input onChange={(e) => this.handleChange(e)} name="name" required={true} label="Name" type="text" />
          <Form.Input onChange={(e) => this.handleChange(e)} name="email" required={true} label="Email" type="email" />
          <Form.Input onChange={(e) => this.handleChange(e)} name="password" 
          required={true} label='Enter Password' type='password' />
          <Form.Input onChange={(e) => this.handleChange(e)} name="password_confirmation" 
          required={true} label='Confirm Password' type='password' />
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
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
    .then(data => this.props.handleLogin(data))
  }

}
export default Signup;