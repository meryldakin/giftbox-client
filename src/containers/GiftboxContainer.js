import React, { Component } from 'react'

import EventList from '../components/EventList'
import FriendList from '../components/FriendList'
import GiftList from '../components/GiftList'
import NavBar from '../components/NavBar'
import Notifications from '../components/Notifications'
import { fetchGifts, fetchFriends, fetchEvents } from '../api'

import { Container, Divider, Grid } from 'semantic-ui-react'


export default class GiftboxContainer extends Component {
  constructor(){
    super()
    this.state = {
      gifts: [],
      friends: [],
      events: []
    }
  }

  componentDidMount(){
    fetchGifts()
      .then( data => this.setState({
        gifts: data.gifts
      }))
    fetchFriends()
      .then( data => this.setState({
        friends: data.users
      }))
    fetchEvents()
      .then( data => this.setState({
        events: data.events
      }))
  }

  render(){
    console.log('state: ', this.state.friends) // array of objects
    return (
      <Container>

        
        <Grid celled>
          <Grid.Row>
            <NavBar />
          </Grid.Row>
          <Grid.Row>
            <Notifications />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <FriendList friends={this.state.friends}/>
            </Grid.Column>
            <Grid.Column width={4}>
              <GiftList gifts={this.state.gifts}/>
            </Grid.Column>
            <Grid.Column width={4}>
              <EventList events={this.state.events} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )

  }


}
