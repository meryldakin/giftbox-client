import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'


import './App.css'
import {Container, Grid} from 'semantic-ui-react'

import GiftboxContainer from './containers/GiftboxContainer'
import Login from './components/LoginComponents/Login'
import SignUp from './components/LoginComponents/SignUp'
import { logIn, signUp } from './api'
import isAuthenticated from './components/hocs/isAuthenticated'
import * as actions from './actions'

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
      this.props.fetchCurrentUser({token: localStorage.jwt})
    }
    console.log("after fetch user")
  }

  componentDidUpdate(){
    console.log("update component")
    if(this.props.current_user_id > 0 && this.props.friendships === 0){
      console.log("current user exists")
      this.props.fetchFriends(this.props.current_user_id)
      this.props.fetchEventLists(this.props.current_user_id)
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
        <Route path="/" render={() => <AuthedGiftboxContainer />} />
      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    current_user_id: state.current_user_id,
    friendships: state.friendships,
    event_lists: state.event_lists,
    loading: state.loading
  }
}

export default withRouter(connect(mapStateToProps, actions)(App))
