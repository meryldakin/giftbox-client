import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon, Form } from 'semantic-ui-react'

import EditGiftForm from './EditGiftForm'

// props from parent exchange_id={exchange_id} gift={gift} event={event} completed={completed}

class GiftEditModal extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state
    return (
      <div>
        <Form>
          <a href="#" onClick={this.show('inverted')}><Icon name="write"/></a>
        </Form>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Edit Gift</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='http://www.britishmuseumshoponline.org/content/ebiz/britishmuseumonlineshop/invt/I./I./f./cmcp42340/cmc-viking-toy-duck_productlarge.jpg' />
            <Modal.Description>
              <Header>Details</Header>
              <EditGiftForm
                exchange_id={this.props.exchange_id}
                gift={this.props.gift}
                event={this.props.event}
                completed={this.props.completed}
                friend={this.props.friend}
                onSubmit={this.props.handleEditGift}
                onClick={this.close.bind(this)}/>
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

export default GiftEditModal
