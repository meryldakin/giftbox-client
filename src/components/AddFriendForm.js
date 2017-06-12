import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Form, Button, TextArea, Checkbox, Message } from 'semantic-ui-react'


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
    this.props.onSubmit(this.state)
    this.props.onClick()
  }

  handleCheckboxes = (e) => {
    let eventsArray = this.state.events
    let targetEvent = e.target.innerHTML
    if (eventsArray.includes(targetEvent)){
      return eventsArray.splice(eventsArray.indexOf(targetEvent), 1)
    } else {
      return eventsArray.push(targetEvent)
    }
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

export default withRouter(AddFriendForm)
