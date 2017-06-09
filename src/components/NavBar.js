import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Dropdown, Menu, Icon } from 'semantic-ui-react'

import AddFriendModal from './AddFriendModal'

export default class NavBar extends Component {
  state = { activeItem: 'Dashboard' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Menu size='huge' color='teal'>
        <Link to='/'><Menu.Item name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick} /></Link>

        <Menu.Menu position='right'>
          <Menu.Item>
            <AddFriendModal />
          </Menu.Item>
          <Menu.Item>
            <Icon name="add"/>Gift
          </Menu.Item>
          <Menu.Item>
            <Icon name="add"/>Event List
          </Menu.Item>

          <Dropdown item text='See my'>
            <Dropdown.Menu>
              <Link to='/friends'><Dropdown.Item>Friends</Dropdown.Item></Link>
              <Link to='/events'><Dropdown.Item>Events</Dropdown.Item></Link>
              <Link to='/gifts'><Dropdown.Item>Gifts</Dropdown.Item></Link>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button >Log Out</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}
