import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

import AddEventForm from './AddEventForm'

class AddEventModal extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state
    return (
      <div>
        <a href="#" onClick={this.show('inverted')}><Icon name="add"/>Event List</a>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Add Event List</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='http://worldartsme.com/images/gold-sparkle-clipart-1.jpg' />
            <Modal.Description>
              <Header>Details</Header>
              <AddEventForm current_user_id={this.props.current_user_id} onSubmit={this.props.handleAddEvent} onClick={this.close.bind(this)}/>
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

export default AddEventModal


// onSubmit={this.props.addFriend} onClick={this.close.bind(this)
