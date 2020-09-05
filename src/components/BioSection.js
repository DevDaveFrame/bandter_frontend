import React from 'react';
import {connect} from 'react-redux';
import {Card, Image, Icon} from "semantic-ui-react";
import UserUpdate from "./UserUpdate";

function BioSection(props) {
  const user = props.user;
  
  return (
    <div className='biosection'>

    </div>
  )
}

const mapStateToProps = state => {
  return { 
    user: state.user
  };
};

export default connect(mapStateToProps)(BioSection);