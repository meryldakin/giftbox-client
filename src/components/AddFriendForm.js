import React, { Component } from 'react'
import { Form, Button, TextArea, Checkbox, Message } from 'semantic-ui-react'

import { addFriend } from '../api'


class AddFriendForm extends Component {
  constructor(){
    super()
    this.state = { first_name: '', last_name: '', birthday: '', notes: '', events: [] }
  }

  handleChange = (e, { name, value }) => {

    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { first_name, last_name, birthday, notes, events } = this.state
    this.setState({ first_name: first_name, last_name: last_name, birthday: birthday, notes: notes, events: events })
    addFriend(this.state)
  }

  handleCheckboxes = (e) => {
    this.state.events.push(e.target.innerHTML)
  }

  render() {
    const { first_name, last_name, birthday, notes, events } = this.state
    
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input placeholder='First Name' name='first_name' value={first_name} onChange={this.handleChange} />
            <Form.Input placeholder='Last Name' name='last_name' value={last_name} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Input placeholder='Birthday (mm/dd/yyyy)' name='birthday' value={birthday} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Input control={TextArea} placeholder='Notes' name='notes' value={notes} onChange={this.handleChange}  />
          </Form.Group>
          <Form.Group grouped >
            Add friend to existing event list:
            <Form.Field label='Birthday' control={Checkbox} onChange={this.handleCheckboxes}/>
            <Form.Field label='Christmas' control={Checkbox}  onChange={this.handleCheckboxes}/>
          </Form.Group>
          <Form.Group>
            <Button positive icon='checkmark' labelPosition='right' content="Save Friend" onClick={this.close} />
          </Form.Group>
          <Message
            success
            header='Friend Added!'
          />
          <Message
            error
            header='Friend not yet added...'
            content='Check your inputs and retry!'
          />
        </Form>
      </div>
    )
  }
}

export default AddFriendForm
