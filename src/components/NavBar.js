import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { Button, Menu, Icon, Segment } from 'semantic-ui-react'

import AddFriendModal from './AddFriendModal'
import AddEventModal from './AddEventModal'
import giftbox_white from './giftbox_white.png'

class NavBar extends Component {
  state = { activeItem: 'Dashboard' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.history.push('/')
  }

  logout = () => {
    localStorage.clear()
    this.props.history.push('/')
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Segment inverted>
        <Menu size='huge' inverted secondary>
        <Menu.Item onClick={this.handleItemClick} ><img src={giftbox_white} /> Welcome, {this.props.current_user_id}
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <AddFriendModal addFriend={this.props.addFriend} current_user_id={this.props.current_user_id}/>
            </Menu.Item>
            <Menu.Item>
              <AddEventModal current_user_id={this.props.current_user_id}  handleAddEvent={this.props.handleAddEvent}  />
            </Menu.Item>
            <Menu.Item>
              <Button onClick={this.logout} >Log Out</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
      </div>
    )
  }
}

export default withRouter(NavBar)
