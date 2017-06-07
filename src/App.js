import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css'

import GiftboxContainer from './containers/GiftboxContainer'
import Login from './components/Login'
import { logIn } from './api'


class App extends Component {
  constructor(){
    super()
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(params){
    logIn(params)
      .then(res => {
        localStorage.setItem('jwt', res.token)
        return <Redirect to="/home"/>
      })
  }

  render() {
    return (
      <Switch>
        <Route path="/login" render={() => <Login handleLogin={this.handleLogin} />}/>
          <Route path="/home" component={GiftboxContainer} />
          </Switch>
          )
  }
}

export default App
