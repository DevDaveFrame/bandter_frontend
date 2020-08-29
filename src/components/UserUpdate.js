import React from "react";
import {  Modal, Form, Button, Icon } from "semantic-ui-react";

class UserUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      bio: props.user.bio,
      weekly_run_quota: props.user.weekly_run_quota,
      img_url: props.user.img_url,
      location: props.user.location,
      zipcode: props.user.zipcode,
      open: false
    };
  }
  render() {
    return (
      <Modal
      size="small"
      centered={true}
      onClose={() => this.setOpen(false)}
      onOpen={() => this.setOpen(true)}
      open={this.state.open}
      trigger={<Icon link={true} name='setting'/>}
    >
        <Modal.Header as='h2'>Edit Profile</Modal.Header>
        <Modal.Content>
          <Form onSubmit={(e) => this.handleSubmit(e)}>
            <Form.Input onChange={(e) => this.handleChange(e)} 
            name="name" required={true} label="Name" 
            type="text" value={this.state.name || ''}/>
            <Form.Input onChange={(e) => this.handleChange(e)} 
            name="bio"  label="Bio" type="textarea" 
            value={this.state.bio || ''}/>
            <Form.Input onChange={(e) => this.handleChange(e)} 
            name="weekly_run_quota" label='Goals: Runs per Week' 
            type='text' value={this.state.weekly_run_quota || ''}/>
            <Form.Input onChange={(e) => this.handleChange(e)} 
            name="img_url" label='Profile Picture (Link)' 
            type='text' value={this.state.img_url || ''}/>
            <Form.Input onChange={(e) => this.handleChange(e)} 
            name="location" label='Location' 
            type='text' value={this.state.location || ''}/>
            <Form.Input onChange={(e) => this.handleChange(e)} 
            name="zipcode" label='Zip Code' 
            type='text' value={this.state.zipcode || ''}/>
            <Button type='submit'>Submit</Button>
          </Form>
        </Modal.Content>
    </Modal>
    )
  }
  setOpen = (bool) => {
    this.setState({
      open: bool
    })
  }

  handleChange = (e) => {
    this.setState({
    [e.target.name]: e.target.value
    })
    }
    
  
  handleSubmit = (e) => {
    e.preventDefault()
    let request = {
      method: "PATCH",
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        name: this.state.name,
        bio: this.state.bio,
        weekly_run_quota: this.state.weekly_run_quota,
        img_url: this.state.img_url,
        location: this.state.location,
        zipcode: this.state.zipcode
      })
    }
    fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`, request)
    .then(r => r.json())
    .then(data => this.props.handleLogin(data))
    this.setOpen(false)
  }
}

export default UserUpdate;
