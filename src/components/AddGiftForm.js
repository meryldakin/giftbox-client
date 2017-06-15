import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Form, Button, Dropdown} from 'semantic-ui-react'


class AddGiftForm extends Component {
  constructor(){
    super()
    this.state = { item: "", category: "", event_list_id: 0, price: "", link: "", friend_id: 0 }
  }

  componentDidMount(){
    this.setState({
      friend_id: this.props.friend.id
    })
  }

  handleChange = (e, { name, value }) => {
    console.log(e, { name, value })
    this.setState({ [name]: value })
    console.log("state of addgift", this.state)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.props.onClick()
  }

  render() {
    console.log("ADD GIFT FORM PROPS", this.props)
    const { item, category, event_list_id, price, link } = this.state
    let eventList = this.props.events.map( event => {

      return ( Object.assign({}, { key: event.id, value: event.id, text: event.name }) )
    })


    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input placeholder='Item' name='item' value={item} onChange={this.handleChange} />

          </Form.Group>

          <Form.Group>
            <Form.Input placeholder='Price' name='price' value={price} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Input placeholder='Link' name='link' value={link} onChange={this.handleChange}  />
          </Form.Group>
          <Form.Group>
            <Dropdown placeholder='Select Event List' name='event_list_id' fluid search selection options={eventList} onChange={this.handleChange}/>
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
