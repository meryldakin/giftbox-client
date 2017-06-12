import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Form, Button, TextArea, Checkbox, Message } from 'semantic-ui-react'


class AddGiftForm extends Component {
  constructor(){
    super()
    this.state = { item: "", category: "", event_id: "", price: "", link: "", friend_id: 0 }
  }

  componentDidMount(){
    this.setState({
      friend_id: this.props.friend.id
    })
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.props.onClick()
  }

  // handleCheckboxes = (e) => {
  //   let eventsArray = this.state.events
  //   let targetEvent = e.target.innerHTML
  //   if (eventsArray.includes(targetEvent)){
  //     return eventsArray.splice(eventsArray.indexOf(targetEvent), 1)
  //   } else {
  //     return eventsArray.push(targetEvent)
  //   }
  // }

  render() {
    const { item, category, event_id, price, link } = this.state
    console.log("state from gift form", this.state)
    console.log("props from gift form", this.props)
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input placeholder='Item' name='item' value={item} onChange={this.handleChange} />
            <Form.Input placeholder='Category' name='category' value={category} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Input placeholder='Event ID' name='event_id' value={event_id} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Input placeholder='Price' name='price' value={price} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Input placeholder='Link' name='link' value={link} onChange={this.handleChange}  />
          </Form.Group>
          <Form.Group>
            <Button positive icon='checkmark' labelPosition='right' content="Save Gift" onClick={this.close} />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default withRouter(AddGiftForm)
