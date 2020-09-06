import React from 'react'
import { Modal } from 'semantic-ui-react'

function PhotoDisplay(props) {
  const {photo} = props
  return (
    <Modal
    trigger={<img className='photo-thumb' src={photo}/>}
    >
      <img className='photo-display' src={photo}/>
    </Modal>
  )
}

export default PhotoDisplay;

