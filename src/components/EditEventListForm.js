import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Form, Button, TextArea, Dropdown, Message } from 'semantic-ui-react'

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class EditEventListForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: props.event_id,
      name: props.event_name,
      date: moment(props.event_date),
      category: props.event_category,
      user_id: 1
    } //passing User ID as 1 for now
  }

  handleDate = (date) => {
   this.setState({
     date: date
   });

 }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.props.onClick()
  }



  render() {

    const { name, date, category, id, user_id } = this.state
    let eventCategories = ['Just Because/Other', 'Birthday', 'Christmas', 'Hanukkah', 'Wedding', 'Graduation', "Mother's Day", "Father's Day", "Valentine's Day", "Anniversary", 'New Baby', 'Easter', 'Passover']
    .map( category => {
      return ( Object.assign({}, { key: category, value: category, text: category}) )
    })

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input placeholder='Event List Name' name='name' value={name} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
          <DatePicker selected={this.state.date} onChange={this.handleDate} />
          </Form.Group>
          Current category: {this.state.category}
          <Form.Group>
            <Dropdown placeholder='Change Category' name='category' fluid search selection options={eventCategories} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group>
            <Button positive icon='checkmark' labelPosition='right' content="Save Event List" onClick={this.close} />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default withRouter(EditEventListForm)
