import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import './App.css'

import GiftboxContainer from './containers/GiftboxContainer'
import Login from './components/Login'
import { logIn } from './api'
import isAuthenticated from './components/hocs/isAuthenticated'

const AuthedGiftboxContainer = isAuthenticated(GiftboxContainer)

class App extends Component {
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(params){
    logIn(params)
    .then(res => {
        if (res.error) {
          return
        }
        localStorage.setItem('jwt', res.token)
        this.props.history.push('/home')
      })
  }

  render() {
    return (
      <Switch>
        <Route exact path="/login" render={() => <Login handleLogin={this.handleLogin} />}/>
        <Route path="/" component={AuthedGiftboxContainer} />
      </Switch>
    )
  }
}

export default withRouter(App)
