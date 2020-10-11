import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPhoto } from "../actions/userActions"
import {Modal, Form, Button} from "semantic-ui-react"


function AddPhoto (props) {
  const [open, setOpen] = useState(false)
  const [uploadable, setUploadable] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append(
      "content",
      uploadable,
      uploadable.name
    )
    formData.append('user_id', props.user.id)
    let request = {
      method: "POST",
      body: formData
    }
    fetch(`http://localhost:3000/api/v1/photos/`, request)
    .then(r => r.json())
    .then(photo => handleResponse(photo))
    .catch(console.log)
  }

  const handleResponse = (photo) => {
    props.addPhoto(photo)
    setOpen(false)
  }

  return (
    <Modal
      size="small"
      centered={true}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>ADD A PHOTO</Button>}
    >
        <Modal.Content>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Input onChange={(e) => setUploadable(e.target.files[0])} 
            name="content" required={true} label="Upload File" 
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

export default connect(mapStateToProps, {addPhoto})(AddPhoto)
