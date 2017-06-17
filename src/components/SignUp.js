import React from 'react'
// import { Route } from 'react-router-dom'

import { Form } from 'semantic-ui-react'

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
      <Form onSubmit={this.handleSubmit}>
        <label>First Name</label>
        <input type='text' value={this.state.firstName} onChange={ e => this.handleChange('firstName', e.target.value)}/>
        <label>Last Name</label>
        <input type='text' value={this.state.lastName} onChange={ e => this.handleChange('lastName', e.target.value)}/>
        <label>Birthday</label>
        <input type='text' value={this.state.birthday} onChange={ e => this.handleChange('birthday', e.target.value)}/>
        <label>Email</label>
        <input type='text' value={this.state.email} onChange={ e => this.handleChange('email', e.target.value)}/>
        <label>Password</label>
        <input type='password' value={this.state.password}onChange={ e => this.handleChange('password', e.target.value)} />
        <label>Password Confirmation</label>
        <input type='password' value={this.state.password_confirmation}onChange={ e => this.handleChange('password_confirmation', e.target.value)} />
        <input type='submit' value='Log In' />
      </Form>
    )
  }
}

export default SignUp
