import React from 'react';

function BioSection(props) {
  const user = props.user;
  
  return (
    <div className='biosection'>
      <h2 className='bio-name'>{user.name}</h2>

    </div>
  )
}

export default BioSection;