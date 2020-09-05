import React, { useState } from 'react'
import { connect } from 'react-redux'
import {Modal, Form, Button, Icon} from "semantic-ui-react"


function ProfilePicUpdate (props) {
  console.log('props: ', props);
  const [open, setOpen] = useState(false)
  const [uploadable, setUploadable] = useState(null)


  const handleChange = (e) => {
    setUploadable(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append(
      "profile-picture",
      uploadable,
      uploadable.name
    )
    console.log(uploadable);
    let request = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    }
    fetch(`http://localhost:3000/users/${props.user.id}/profile_picture`, request)
    .then(r => r.json())
    .then(() => setOpen(false))
    .catch(console.log)
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
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Input onChange={(e) => handleChange(e)} 
            name="name" required={true} label="Name" 
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

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps)(ProfilePicUpdate)
