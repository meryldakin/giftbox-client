import React, { Component } from 'react'
import { Popup, Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

import AddFriendForm from './AddFriendForm'

class AddFriendModal extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    return (
      <div>
        <Button onClick={this.show('inverted')}><Icon name="add"/>Friend</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Add a Friend</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='http://www.britishmuseumshoponline.org/content/ebiz/britishmuseumonlineshop/invt/I./I./f./cmcp42340/cmc-viking-toy-duck_productlarge.jpg' />
            <Modal.Description>
              <Header>Details</Header>
              <AddFriendForm />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Done
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default AddFriendModal
