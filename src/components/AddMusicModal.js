import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addSong } from "../actions/userActions"
import {Modal, Form, Button} from "semantic-ui-react"

// A modal that allows users to upload audio files
function AddMusicModal (props) {
  //boolean determining whether form is rendered
  const [open, setOpen] = useState(false)
  //form fields for file upload
  const [title, setTitle] = useState("");
  const [album, setAlbum] = useState("");
  //uploadable should be a file
  const [uploadable, setUploadable] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('audio', uploadable, uploadable.name)
    formData.append('user_id', props.user.id)
    formData.append('title', title)
    formData.append('album', album)

    const request = {
      method: "POST",
      body: formData
    }
    fetch(`https://bandter-backend.herokuapp.com/api/v1/songs/`, request)
    .then(r => r.json()).then(data => handleResponse(data))
    .catch(error => handleError(error))
  }
  
  //send song to redux store and close modal
  const handleResponse = (data) => {
    props.addSong(data)
    setOpen(false)
  }

  const handleError = (error) => {
    console.log(error)
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
            name="album" required={true} value={album} label="Album" 
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

export default connect(mapStateToProps, {addSong})(AddMusicModal)
