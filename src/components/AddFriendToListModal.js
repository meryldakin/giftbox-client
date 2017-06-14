import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

import AddFriendToListForm from './AddFriendToListForm'

class AddFriendToListModal extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    console.log("props from friendlist modal", this.props)
    const { open, dimmer } = this.state
    return (
      <div>
        <Button onClick={this.show('inverted')}><Icon name="add"/>Add Friends To list</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Add Friends to Event List</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='http://www.britishmuseumshoponline.org/content/ebiz/britishmuseumonlineshop/invt/I./I./f./cmcp42340/cmc-viking-toy-duck_productlarge.jpg' />
            <Modal.Description>
              <Header>Pick some friends!</Header>
              <AddFriendToListForm event={this.props.event} friendArray={[]} friendships={this.props.friendships} onSubmit={this.props.handleAddFriendsToEventList} onClick={this.close.bind(this)}/>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default AddFriendToListModal


// onSubmit={this.props.addFriend} onClick={this.close.bind(this)
