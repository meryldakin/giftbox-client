import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

import AddFriendForm from './AddFriendForm'

class AddFriendModal extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state
    return (
      <div>
        <a href="#" onClick={this.show('inverted')}><Icon name="add"/>Friend</a>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Add a Friend</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg' />
            <Modal.Description>
              <Header>Details</Header>
              <AddFriendForm onSubmit={this.props.addFriend} current_user_id={this.props.current_user_id} onClick={this.close.bind(this)}/>
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

export default AddFriendModal
