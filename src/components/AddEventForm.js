import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Form, Button, Dropdown } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class AddEventForm extends Component {
  constructor(props){
    super(props)
    this.state = { name: '', date: '', category: '', current_user_id: props.current_user_id } //passing User ID as 1 for now
  }

  handleDate = (date) => {
   this.setState({
     date: date
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


  render() {
    const { name, date, category } = this.state
    let eventCategories = ['Just Because/Other', 'Birthday', 'Christmas', 'Hanukkah', 'Wedding', 'Graduation', "Mother's Day", "Father's Day", "Valentine's Day", "Anniversary", 'New Baby', 'Easter', 'Passover']
    .map( category => {
      return ( Object.assign({}, { key: category, value: category, text: category}) )
    })
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Field>
            <label>Event List Name</label>
            <Form.Input placeholder='Event List Name' name='name' value={name} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
            <label>Event Date</label>
            <DatePicker selected={this.state.date} onChange={this.handleDate} />
            </Form.Field>
          </Form.Group>
          <Form.Field>
          <Dropdown placeholder='Choose Category' name='category' fluid search selection options={eventCategories} onChange={this.handleChange}/>
          </Form.Field>
          <Button color="blue" icon='checkmark' labelPosition='right' content="Save Event List" onClick={this.close} />

        </Form>
      </div>
    )
  }
}

export default withRouter(AddEventForm)
