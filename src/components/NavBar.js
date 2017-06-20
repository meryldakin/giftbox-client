import React, { Component } from 'react'
import { withRouter } from 'react-router'

import { Button, Menu, Segment } from 'semantic-ui-react'

import AddFriendModal from './AddFriendModal'
import AddEventModal from './AddEventModal'
import giftbox_white from './giftbox_white.png'

class NavBar extends Component {

  logout = () => {
    localStorage.clear()
    this.props.history.push('/')
  }

  render() {


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
