import React from 'react'
// import { Route } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import { Form, Segment, Button } from 'semantic-ui-react'

class SignUp extends React.Component {

  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      birthday: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleDate = (date) => {
   this.setState({
     birthday: date
   })
 }

  handleChange(prop, value){
    this.setState({
      [prop]: value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.handleSignUp(this.state)
  }

  render(){
    return (
      <Segment basic padded>
      <Form onSubmit={this.handleSubmit}>
        <h1>SIGN UP</h1>
        <Form.Group>
        <Form.Input label="First Name" type='text' value={this.state.firstName} onChange={ e => this.handleChange('firstName', e.target.value)}/>
        <Form.Input label="Last Name" type='text' value={this.state.lastName} onChange={ e => this.handleChange('lastName', e.target.value)}/>
        </Form.Group>
        <Form.Group>
        <Form.Input label="Email" type='text' value={this.state.email} onChange={ e => this.handleChange('email', e.target.value)}/>
        <Form.Input label="Password" type='password' value={this.state.password}onChange={ e => this.handleChange('password', e.target.value)} />
        </Form.Group>
        <Form.Group>
        <label>Birthday:</label>
        </Form.Group>
        <Form.Group>
        <DatePicker selected={this.state.birthday} onChange={this.handleDate} />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
      </Segment>
    )
  }
}

export default SignUp
