import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Modal, Form, Button} from "semantic-ui-react"

export const ProfilePicUdate = () => {
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
            name="img_url" label='Profile Picture (Link)' 
            type='text' value={this.state.img_url || ''}/>
            <Form.Input onChange={(e) => this.handleChange(e)} 
            name="location" label='Location' 
            type='text' value={this.state.location || ''}/>
            <Button type='submit'>Submit</Button>
          </Form>
        </Modal.Content>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicUdate)
