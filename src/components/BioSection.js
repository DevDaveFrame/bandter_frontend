import React from 'react';
import {Card, Image, Icon} from "semantic-ui-react";
import UserUpdate from "./UserUpdate";

function BioSection(props) {

  const {user} = props
  
  return (
    <Card>
  <Image src={user.img_url || "image"} wrapped ui={false} circular />
  <Card.Content>
    <Card.Header>{user.name}</Card.Header>
    <Card.Meta>
        <span className='location'>{user.location || "location"}</span><br/>
      </Card.Meta>
    <Card.Description>
      {user.bio || "Add a bio!"}
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
    <a href={'/chat'}>
      <Icon name='user' />
      {0} Matches
    </a>
    <UserUpdate handleLogin={props.handleLogin} user={user} />
  </Card.Content>
</Card>
  )
}

export default BioSection;