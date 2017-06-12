import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import { withRouter } from 'react-router'
import { Container, Grid, Header, Segment } from 'semantic-ui-react'

import EventList from '../components/EventList'
import FriendList from '../components/FriendList'
import GiftList from '../components/GiftList'
import FriendsPage from '../components/FriendsPage'
import NavBar from '../components/NavBar'


import { fetchGifts, fetchFriends, fetchEvents, addFriend, editFriend, deleteFriend, addGift } from '../api'
// import isAuthenticated from '../components/hocs/isAuthenticated'
//
// const AuthedFriendsPage = isAuthenticated(FriendsPage)

class GiftboxContainer extends Component {
  constructor(){
    super()
    this.state = {
      gifts: [],
      friendships: [],
      events: [],
      purchasedGifts: []
    }
    this.handlePurchasedGifts = this.handlePurchasedGifts.bind(this)
  }

  componentDidMount(){
    fetchGifts()
      .then( data => this.setState({
        gifts: data.gifts
      }))
    fetchFriends()
      .then( data => this.setState({
        friendships: data.user.friendships
      }))
    fetchEvents()
      .then( data => this.setState({
        events: data.events
      }))
  }

  handleEditSubmit(state, friendID){
    console.log("handleEditSubmit state,", state)
    editFriend(state)
    // .then(data => console.log("data after edit friend,", data.users))
    .then( data => {
      this.setState(prevState => {
        return {
          friendships: data.users
        }
      })
      this.props.history.push(`/friends/${friendID}`)

    })
  }


  handleAddFriend(state){
      // console.log("state from add friend in gift box, ", state)
      addFriend(state)
      // .then(data => console.log("data from addFriend", data.users[data.users.length-1].friend.id))
      .then( data => {
        this.setState(prevState => {
          return {
            friendships: data.users
          }
      }, this.props.history.push(`/friends/${data.users[data.users.length-1].friend.id}`)
    )})
    }

  handleDeleteFriend(id){
    deleteFriend(id)
    .then( data => {
      // return console.log(data)
      this.setState(prevState => {
        return {
          friendships: data.users
        }
      }, this.props.history.push(`/friends/${data.users[0].friend.id}}`))
    })
  }

  handleAddGift = (state) => {
    console.log("state from addGIFT in gift box, ", state)
    addGift(state)
    // .then(data => console.log("data from addGIFT in giftbox", data))
    .then( data => {
      this.setState(prevState => {
        return {
          friendships: data.users
        }
    }, this.props.history.push(`/friends/${state.friend_id}`)
  )})
  }

  handlePurchasedGifts(e, props){
    this.state.purchasedGifts.push(props.value)
  }


  render(){
    console.log('state from giftbox container: ', this.state) // array of objects
    return (
      <div>
      <Container>
        <NavBar addFriend={this.handleAddFriend.bind(this)} />
      </Container>
        <Switch>
          <Route path="/friends/:id" children={() =>
            <FriendsPage
              friendships={this.state.friendships}
              handleEdit={this.handleEditSubmit.bind(this)}
              handlePurchasedGifts={this.handlePurchasedGifts}
              handleDelete={this.handleDeleteFriend.bind(this)}
              handleAddGift={this.handleAddGift}
            /> } />
          <Route exact path="/" render={() =>
            <Container>
              <Grid columns={1}>
                <Grid.Column>
                </Grid.Column>
              </Grid>
              <Grid columns={1}>
                <Grid.Row>
                  <Grid.Column>
                      <Header as="h1">Giftbox</Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid >
                <Grid.Row>
                  <Grid.Column width={2}>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Segment>
                      <Header as="h2">Hey, Meryl!</Header>
                      <p>This is where you will have notifications for upcoming events! And it will look so cool!</p>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={2}>
                  </Grid.Column>

                </Grid.Row>
                </Grid>
                <Grid columns='equal'>
                <Grid.Row stretched>
                  <Grid.Column width={5}>
                    <h2>Friends</h2>
                    <FriendList friends={this.state.friendships}/>
                  </Grid.Column>

                  <Grid.Column width={6}>
                  <h2>Gifts</h2>
                    <GiftList gifts={this.state.gifts}/>
                  </Grid.Column>

                  <Grid.Column width={5}>
                  <h2>Events</h2>
                    <EventList events={this.state.events} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
         }/>
        </Switch>
      </div>
    )

  }


}
export default withRouter(GiftboxContainer)
