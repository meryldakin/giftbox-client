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
        <Button basic fluid onClick={this.show('inverted')}><Icon name="add"/>Add Gift</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Add a Gift</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='http://www.bills.com.au/wp-content/themes/bills/images/gift-img.png' />
            <Modal.Description>
              <Header>Details</Header>
              <AddGiftForm current_user_id={this.props.current_user_id} events={this.props.events} friend={this.props.friend} onSubmit={this.props.handleAddGift} onClick={this.close.bind(this)}/>
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
