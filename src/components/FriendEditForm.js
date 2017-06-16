import React, { Component } from 'react'
import { Form, Button, TextArea, Checkbox, Message } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


class FriendEditForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: props.friend.id,
      firstName: props.friend.firstName,
      lastName: props.friend.lastName,
      birthday: moment(props.friend.birthday),
      notes: props.friend.notes,
      events: props.events
    }
  }
  handleDate = (date) => {
   this.setState({
     birthday: date
   })
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state, this.state.id)
  }

  handleCheckboxes = (e) => {
    this.state.events.push(e.target.innerHTML)
  }

  render() {
    const { id, firstName, lastName, birthday, notes, events } = this.state
    return (

      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group widths='equal'>
            <Form.Input placeholder='First Name' name='firstName' value={firstName} onChange={this.handleChange} />
            <Form.Input placeholder='Last Name' name='lastName' value={lastName} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
          Birthday:
          <DatePicker selected={this.state.birthday} onChange={this.handleDate} />
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

export default FriendEditForm
