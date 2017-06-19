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
            <Image wrapped size='medium' src='http://www.bills.com.au/wp-content/themes/bills/images/gift-img.png' />
            <Modal.Description>
              <Header>Details</Header>
              <EditGiftForm
                events={this.props.events}
                celebration={this.props.celebration}
                exchange_id={this.props.exchange_id}
                gift={this.props.gift}
                event={this.props.event}
                completed={this.props.completed}
                friend={this.props.friend}
                onSubmit={this.props.handleEditGift}
                onClick={this.close.bind(this)}
                current_user_id={this.props.current_user_id}/>
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
