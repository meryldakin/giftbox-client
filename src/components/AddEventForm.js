import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Form, Button, TextArea, Radio, Message } from 'semantic-ui-react'


class AddEventForm extends Component {
  constructor(){
    super()
    this.state = { name: '', date: '', category: '', user_id: 1 } //passing User ID as 1 for now
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
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input placeholder='Event List Name' name='name' value={name} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Input placeholder='Date' name='date' value={date} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group grouped >
          Choose a category:
            <Form.Field>
              <Radio label='Just Because/Other' name='category' value='Just Because/Other' checked={this.state.category === 'Just Because/Other'} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Radio label='Birthday' name='category' value='Birthday' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Radio label='Christmas' name='category' value='Christmas' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Radio label='Hanukkah' name='category' value='Hanukkah' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Radio label='Wedding' name='category' value='Wedding' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Radio label='Graduation' name='category' value='Graduation' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Radio label="Mother's Day" name='category' value="Mother's Day" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Radio label="Father's Day" name='category' value="Father's Day" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Radio label="Valentine's Day" name='category' value="Valentine's Day" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Radio label="Anniversary" name='category' value='Anniversary' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Radio label='New Baby' name='category' value='New Baby' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Radio label='Easter' name='category' value='Easter' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Radio label='Passover' name='category' value='Passover' onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Radio label='Easter' name='category' value='Easter' onChange={this.handleChange} />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Button positive icon='checkmark' labelPosition='right' content="Save Event List" onClick={this.close} />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default withRouter(AddEventForm)
