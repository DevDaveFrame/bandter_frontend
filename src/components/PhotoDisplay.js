import React, {useState} from 'react'
import { Modal } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {deletePhoto} from '../actions/userActions'

function PhotoDisplay(props) {
  console.log('props: ', props);
  const {photo} = props
  console.log('photo: ', photo);
  const [open, setOpen] = useState(false)
  const deletePhoto = () => {
    let request = {
      method: "DELETE",
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}` 
      }
    }
    fetch(`http://localhost:3000/api/v1/photos/${photo.id}`, request)
    .then(r => r.json())
    .then(data => handleResponse(data))
  }
  const handleResponse = (photo) => {
    props.deletePhoto(photo)
    setOpen(false);
  }
  return (
    <Modal className="photo-modal"
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    size={'small'}
    trigger={<img className='photo-thumb' src={photo.attributes.img_url} alt='fix this'/>}
    >
      <img className='photo-display' src={photo.attributes.img_url} alt='fix this'/>
      {props.user.id == photo.attributes.user_id ? <a href="#" onClick={()=>deletePhoto()}>DELETE</a> : null }
    </Modal>
  )
}
const mapStateToProps = state => {
  return {  
    user: state.user
  }
}

export default connect(mapStateToProps, {deletePhoto})(PhotoDisplay);

