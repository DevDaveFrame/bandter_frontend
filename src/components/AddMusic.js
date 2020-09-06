import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSong } from "../actions/songActions"
import {Modal, Form, Button, Icon, Image} from "semantic-ui-react"


function AddMusic (props) {
  console.log('props: ', props);
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("");
  const [uploadable, setUploadable] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append(
      "audio",
      uploadable,
      uploadable.name
    )
    formData.append('user_id', props.user.id)
    console.log(formData);
    let request = {
      method: "POST",
      // headers: {
      //   'Content-Type': "multipart/form-data"
      //   },
      body: formData
    }
    fetch(`http://localhost:3000/api/v1/songs/`, request)
    .then(r => r.json())
    .then(data => handleResponse(data))
    .catch(console.log)
  }

  const handleResponse = (data) => {
    props.addSong(data)
    setOpen(false)
  }

  return (
    <Modal
      size="small"
      centered={true}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<a>ADD A SONG</a>}
    >
        <Modal.Content>
          <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Input onChange={(e) => setTitle(e.target.value)} 
            name="title" required={true} label="Title" 
            type="text" />
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

export default connect(mapStateToProps, {addSong})(AddMusic)
