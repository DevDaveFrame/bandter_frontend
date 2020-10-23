import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSong } from "../actions/userActions"
import {Modal, Form, Button} from "semantic-ui-react"


function AddMusic (props) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("");
  const [album, setAlbum] = useState("");
  const [uploadable, setUploadable] = useState(null)

  const handleSubmit = (e) => {
    //prevent page refresh
    e.preventDefault()
    //Create and populate a FormData object with audio file
    const formData = new FormData()
    formData.append('audio', uploadable, uploadable.name)
    formData.append('user_id', props.user.id)
    formData.append('title', title)
    formData.append('album', album)
    //send form and 
    const request = {
      method: "POST",
      body: formData
    }
    fetch(`http://localhost:3000/api/v1/songs/`, request)
    .then(r => r.json()).then(data => handleResponse(data))
    .catch(console.log)
  }
  
  const handleResponse = (data) => {
    //send song to redux store and close modal
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
      trigger={<Button>ADD A SONG</Button>}
    >
        <Modal.Content>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Input onChange={(e) => setUploadable(e.target.files[0])} 
            name="content" required={true} label="Upload File" 
            type="file" />
            <Form.Input onChange={(e) => setTitle(e.target.value)} 
            name="title" required={true} value={title} label="Title" 
            type="text" />
            <Form.Input onChange={(e) => setAlbum(e.target.value)} 
            name="title" required={true} value={album} label="Album" 
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

export default connect(mapStateToProps, {addSong})(AddMusic)
