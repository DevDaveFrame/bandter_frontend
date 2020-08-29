import React from 'react'
import { Modal, Menu, Segment, MenuItem } from 'semantic-ui-react'
import Signup from './Signup'
import Login from './Login'

function AuthModal(props) {
  const [open, setOpen] = React.useState(false)
  const [tab, setTab] = React.useState('login')

  return (
    <Modal
      size="tiny"
      centered={true}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<MenuItem>Login</MenuItem>}
    >
      <Menu attached='top' tabular>
        <Menu.Item
          name="login"
          active={tab === 'login'}
          onClick={() => setTab('login')}
          > Log In </Menu.Item>
          <Menu.Item
          name="signup"
          active={tab === 'signup'}
          onClick={() => setTab('signup')}
          > Sign Up </Menu.Item>
      </Menu>
      <Segment attached='bottom'>
        {tab === 'login' ? <Login handleLogin={props.handleLogin}/> : <Signup handleLogin={props.handleLogin}/> }
      </Segment>
    </Modal>
  )
}

export default AuthModal;
