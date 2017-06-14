import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Form, Button, TextArea, Checkbox, Message } from 'semantic-ui-react'

class EditGiftForm extends Component {
  constructor(){
    super()
    this.state = {
      item: "",
      category: "",
      event_list_id: "",
      price: "",
      link: "",
      friend_id: 0,
      exchange_id: 0,
      gift_id: ""

     }
  }

  componentDidMount(){
    this.setState({
      item: this.props.gift.item,
      category: this.props.gift.category,
      event_list_id: this.props.event.id,
      price: this.props.gift.price,
      link: this.props.gift.link,
      friend_id: this.props.friend.id,
      exchange_id: this.props.exchange_id,
      gift_id: this.props.gift.id
    })
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state, this.state.friend_id)
    this.props.onClick()
  }

  render() {
    console.log("edit gift form props", this.props)
    const { item, category, event_list_id, price, link } = this.state
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input placeholder='Item' name='item' value={item} onChange={this.handleChange} />
            <Form.Input placeholder='Category' name='category' value={category} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Input placeholder='Event ID' name='event_list_id' value={event_list_id} onChange={this.handleChange} />
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

export default withRouter(EditGiftForm)
