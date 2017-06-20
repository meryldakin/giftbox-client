import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import './App.css'
import {Container, Grid} from 'semantic-ui-react'

import GiftboxContainer from './containers/GiftboxContainer'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { logIn, decodeToken, signUp } from './api'
import isAuthenticated from './components/hocs/isAuthenticated'

const AuthedGiftboxContainer = isAuthenticated(GiftboxContainer)

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      current_user_id: ''
    }

  }

  handleLogin = (params) => {
    logIn(params)
    .then(res => {
        if (res.error) {
          return
        }
        localStorage.setItem('jwt', res.token)
      
        this.setState({
            current_user_id: res.user.id
          })
        this.props.history.push('/')
      })

  }

  handleSignUp = (params) => {
    signUp(params)
    .then( res => {
        if (res.error) {
          return
        }
        localStorage.setItem('jwt', res.token)

        this.setState({
            current_user_id: res.user.id
          })
        this.props.history.push('/')
      })
  }

  componentDidMount(){
    if (localStorage.jwt && this.state.current_user_id === '') {
       decodeToken({token: localStorage.jwt})
       .then( data => {

         this.setState({
           current_user_id: data
         })
        }
       )
    }
  }

  render() {

    return (
      <Switch>
        <Route exact path="/login" render={() =>
          <div>
          <Container>
            <Grid >
              <Grid.Row centered>
                <h1 className="title">GIFTBOX</h1>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column floated="right">
                  <Login handleLogin={this.handleLogin} />
                </Grid.Column>
                <Grid.Column>
                  <SignUp handleSignUp={this.handleSignUp}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          </div>
        }/>
        <Route path="/" render={() => <AuthedGiftboxContainer current_user_id={this.state.current_user_id}/>} />
      </Switch>
    )
  }
}

export default withRouter(App)
