import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateUser } from "../actions/userActions"
import {Modal, Form, Button, Icon, Image} from "semantic-ui-react"


function ProfilePicUpdate (props) {
  const [open, setOpen] = useState(false)
  const [uploadable, setUploadable] = useState(null)


  const handleChange = (e) => {
    setUploadable(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append(
      "profile_picture",
      uploadable,
      uploadable.name
    )
    let request = {
      method: "PATCH",
      body: formData
    }
    fetch(`https://bandter-backend.herokuapp.com/api/v1/users/${props.user.id}`, request)
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
      trigger={<Icon link={true} name='setting'/>}
    >
        <Modal.Content>
          <Image className="profile-pic-view" src={props.user.img_url} />
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Input onChange={(e) => handleChange(e)} 
            name="profile_picture" label="Profile Picture" 
            type="file" />
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
