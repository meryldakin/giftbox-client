import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

import AddGiftForm from './AddGiftForm'

class AddGiftModal extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state
    return (
      <div>
        <Button  circular icon='add' onClick={this.show('inverted')} />
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Add a Gift</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='http://www.britishmuseumshoponline.org/content/ebiz/britishmuseumonlineshop/invt/I./I./f./cmcp42340/cmc-viking-toy-duck_productlarge.jpg' />
            <Modal.Description>
              <Header>Details</Header>
              <AddGiftForm friend={this.props.friend} onSubmit={this.props.handleAddGift} onClick={this.close.bind(this)}/>
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

export default AddGiftModal
