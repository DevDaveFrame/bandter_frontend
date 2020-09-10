import React from 'react'
import { Modal } from 'semantic-ui-react'

function PhotoDisplay(props) {
  const {photo} = props
  return (
    <Modal className="photo-modal"
    size={'small'}
    trigger={<img className='photo-thumb' src={photo.attributes.img_url} alt='fix this'/>}
    >
      <img className='photo-display' src={photo.attributes.img_url} alt='fix this'/>
    </Modal>
  )
}

export default PhotoDisplay;

