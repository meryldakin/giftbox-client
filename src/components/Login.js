import React from 'react'
// import { Route } from 'react-router-dom'

import {Form, Button, Segment, Image} from 'semantic-ui-react'
import {giftbox} from "../images/giftbox.png"

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
      <Segment basic padded>
      <Image src={giftbox}/>
      <Form onSubmit={this.handleSubmit}>
       <h1 >LOG IN</h1>
        <Form.Group>
        <Form.Input label="Email" type='text' value={this.state.email} onChange={ e => this.handleChange('email', e.target.value)}/>
        <Form.Input label="Password" type='password' value={this.state.password}onChange={ e => this.handleChange('password', e.target.value)} />
        </Form.Group>
        <Button type='submit' value='Log In'>Submit</Button>
      </Form>
      </Segment>
    )
  }
}

export default Login
