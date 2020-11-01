import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateUser } from "../actions/userActions"
import {Modal, Form, Button} from "semantic-ui-react"


function ProfilePicUpdate (props) {
  const [open, setOpen] = useState(false)
  const [first_name, setFirstName] = useState(props.user.first_name)
  const [last_name, setLastName] = useState(props.user.last_name)
  const [bio, setBio] = useState(props.user.bio)
  const [narrative, setNarrative] = useState(props.user.narrative)
  const [location, setLocation] = useState(props.user.location)

  const handleSubmit = (e) => {
    e.preventDefault()
    let request = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}` 
      },
      body: JSON.stringify({user: {first_name, last_name, bio, narrative, location}})
    }
    fetch(`https://bandter-backend.heroku.com/api/v1/users/${props.user.id}`, request)
    .then(r => r.json())
    .then(data => handleResponse(data))
    .catch(console.log)
  }

  const handleResponse = (data) => {
    props.updateUser(data)
    setOpen(false)
  }

  return (
    <Modal
      size="small"
      centered={true}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Edit Profile</Button>}
    >
        <Modal.Content>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Input onChange={(e) => setFirstName(e.target.value)} 
            name="first_name" label="First Name" value={first_name}
            type="text" />
            <Form.Input onChange={(e) => setLastName(e.target.value)} 
            name="last_name" label="Last Name" value={last_name}
            type="text" />
            <Form.Input onChange={(e) => setBio(e.target.value)} 
            name="bio" label="Bio (Searchable Blurb)" value={bio}
            type="text" />
            <Form.Input onChange={(e) => setNarrative(e.target.value)} 
            name="narrative" label="Narrative (Let it out...)" value={narrative}
            type="text" />
            <Form.Input onChange={(e) => setLocation(e.target.value)} 
            name="location" label="Location" value={location}
            type="text" />
            <Button type='submit'>Submit</Button>
          </Form>
        </Modal.Content>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, {updateUser})(ProfilePicUpdate)