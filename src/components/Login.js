import React from 'react'
// import { Route } from 'react-router-dom'

class Login extends React.Component {

  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
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
    this.props.handleLogin(this.state)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email</label>
        <input type='text' value={this.state.email} onChange={ e => this.handleChange('email', e.target.value)}/>
        <label>Password</label>
        <input type='password' value={this.state.password}onChange={ e => this.handleChange('password', e.target.value)} />
        <input type='submit' value='Log In' />
      </form>
    )
  }
}

export default Login
