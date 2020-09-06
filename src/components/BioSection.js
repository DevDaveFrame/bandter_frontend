import React from 'react';
import {connect} from 'react-redux';

function BioSection(props) {
  const user = props.user;
  
  return (
    <div className='biosection'>
      <h2 className='bio-name'>{user.name}</h2>

    </div>
  )
}

const mapStateToProps = state => {
  return { 
    user: state.user
  };
};

export default connect(mapStateToProps)(BioSection);