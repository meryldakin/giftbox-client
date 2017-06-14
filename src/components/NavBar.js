import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu, Icon } from 'semantic-ui-react'

import AddFriendModal from './AddFriendModal'
import AddEventModal from './AddEventModal'

export default class NavBar extends Component {
  state = { activeItem: 'Dashboard' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Menu size='huge' color='teal'>
        <Link to='/'><Menu.Item name='Homepage' active={activeItem === 'Dashboard'} onClick={this.handleItemClick} /></Link>

        <Menu.Menu position='right'>
          <Menu.Item>
            <AddFriendModal addFriend={this.props.addFriend}/>
            <AddEventModal />
          </Menu.Item>
          <Menu.Item>
            <Button >Log Out</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}
