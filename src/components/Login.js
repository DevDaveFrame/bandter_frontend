import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/userActions";
import { Button, Form, Container, Header } from "semantic-ui-react";

class Signup extends React.Component {
  render() {
    return (
      <Container className="auth-container">
        <Header as="h2">Log In</Header>
        <Form className="auth-form" onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Input
            onChange={(e) => this.handleChange(e)}
            name="email"
            required={true}
            label="Email"
            type="email"
          />
          <Form.Input
            onChange={(e) => this.handleChange(e)}
            name="password"
            required={true}
            label="Enter Password"
            type="password"
          />
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps, { loginUser })(Signup);
