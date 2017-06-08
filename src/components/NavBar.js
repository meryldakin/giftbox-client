import React, { Component } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'Dashboard' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='huge' color='teal'>
        <Menu.Item name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Dropdown item text='See my'>
            <Dropdown.Menu>
              <Dropdown.Item>Friends</Dropdown.Item>
              <Dropdown.Item>Events</Dropdown.Item>
              <Dropdown.Item>Gifts</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button >Log Out</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
