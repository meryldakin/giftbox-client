import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon, Form } from 'semantic-ui-react'


import EditEventListForm from './EditEventListForm'

// props from parent exchange_id={exchange_id} gift={gift} event={event} completed={completed}

class EditEventListModal extends Component {
  state = { open: false }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state
    return (
      <div>
        <Button onClick={this.show('inverted')}><Icon name="write"/>Edit Event List</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Edit Event List</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='http://www.britishmuseumshoponline.org/content/ebiz/britishmuseumonlineshop/invt/I./I./f./cmcp42340/cmc-viking-toy-duck_productlarge.jpg' />
            <Modal.Description>
              <Header>Details</Header>
              <EditEventListForm
                event_name={this.props.event_name}
                event_date={this.props.event_date}
                event_category={this.props.event_category}
                event_id={this.props.event_id}
                onSubmit={this.props.handleEditEvent}
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

export default EditEventListModal
