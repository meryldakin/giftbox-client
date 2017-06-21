import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Form, Button, Dropdown } from 'semantic-ui-react'

class EditGiftForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: "",
      event_list_id: "",
      price: "",
      link: "",
      friend_id: 0,
      exchange_id: 0,
      gift_id: "",
      celebration_id: "",
      current_user_id: props.current_user_id

     }
  }

  componentDidMount(){
    this.setState({
      item: this.props.gift.item,
      event_list_id: this.props.event.id,
      price: this.props.gift.price,
      link: this.props.gift.link,
      friend_id: this.props.friend.id,
      exchange_id: this.props.exchange_id,
      gift_id: this.props.gift.id,
      celebration_id: this.props.celebration.id
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

    let eventList = this.props.events.map( event => {
      return ( Object.assign({}, { key: event.id, value: event.id, text: event.name }) )
    })

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>

            <Form.Input placeholder='Item' name='item' value={item} onChange={this.handleChange} />
            <Form.Input placeholder='Link or Store' name='link' value={link} onChange={this.handleChange}  />
            <Dropdown placeholder='Select Event List' name='event_list_id' fluid search selection options={eventList} onChange={this.handleChange}/>
            <br/>
            <Button color="blue" icon='checkmark' labelPosition='right' content="Save Gift" onClick={this.close} />

        </Form>
      </div>
    )
  }
}

export default withRouter(EditGiftForm)
