import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import { withRouter } from 'react-router'
import { Container, Grid, Header, Segment } from 'semantic-ui-react'

import EventList from '../components/EventList'
import FriendList from '../components/FriendList'
import GiftList from '../components/GiftList'
import FriendsPage from '../components/FriendsPage'
import NavBar from '../components/NavBar'
import EventsPage from '../components/EventsPage'

import { fetchGifts, fetchFriends, fetchEventLists, addFriend, editFriend, deleteFriend, addGift, editGift,  editExchange, editCelebration, deleteGift, addEvent, findOrCreateCelebrations, deleteFriendFromList } from '../api'
// import isAuthenticated from '../components/hocs/isAuthenticated'
//
// const AuthedFriendsPage = isAuthenticated(FriendsPage)

class GiftboxContainer extends Component {
  constructor(){
    super()
    this.state = {
      gifts: [],
      friendships: [],
      eventLists: [],
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
    fetchEventLists()
      .then( data => this.setState({
        eventLists: data.event_lists
      }))
  }

  handleEditSubmit(state, friendID){
    editFriend(state)
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
      addFriend(state)
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
      this.setState(prevState => {
        return {
          friendships: data.users
        }
      }, this.props.history.push(`/friends/${data.users[0].friend.id}}`))
    })
  }

  handleAddGift = (stateFromAddGift) => {

    addGift(stateFromAddGift)
    .then( data => {
      console.log("data from ADD GIFT" , data.friendships, data.event_lists)
      this.setState(prevState => {
        return {
          friendships: data.users
        }
      })
    })
    fetchEventLists()
      .then( data => this.setState({
        eventLists: data.event_lists
      }))

  }

  handleEditGift = (stateFromEditGiftForm, friendID) => {
    editGift(stateFromEditGiftForm)
    editExchange(stateFromEditGiftForm)
    .then( data => {
      // console.log("DATA FROM EDIT GIFT API", data) })
      this.setState(prevState => {
        return {
          friendships: data.exchanges
        }
      })
    })
    fetchEventLists()
      .then( data => this.setState({
        eventLists: data.event_lists
      }))
  }

  handleDeleteGift = (exchange_id) => {
    console.log("exchange_id from deleete GIFT", exchange_id)
    deleteGift(exchange_id)
    .then( data => {
      this.setState(prevState => {
        return {
          friendships: data.users
        }
      })
    })
    fetchEventLists()
      .then( data => this.setState({
        eventLists: data.event_lists
      }))
  }

  handlePurchasedGifts(e, props){
    this.state.purchasedGifts.push(props.value)
  }

  handleAddEvent = (eventState) => {
    console.log("event state from giftbox", eventState)
    addEvent(eventState)
    .then( data => {
      this.setState(prevState => {
        return {
          eventLists: data.celebrations
        }
      })
    })
    fetchFriends()
      .then( data => this.setState({
        friendships: data.user.friendships
      }))
  }

  handleAddFriendsToEventList = (eventListParams) => {
    findOrCreateCelebrations(eventListParams)

    .then( data => {
      // console.log("data from add friend list" , data)
      this.setState(prevState => {
        return {
          eventLists: data.celebrations
        }
      })
    })
    fetchFriends()
      .then( data => this.setState({
        friendships: data.user.friendships
      }))
  }

handleDeleteFriendFromList = (celebration_id) => {
  deleteFriendFromList(celebration_id)
  .then( data => {
    // console.log("DELETE CELEBRATION", data)
    this.setState(prevState => {
    return {
      eventLists: data.celebrations
      }
    })
  })
  fetchFriends()
    .then( data => this.setState({
      friendships: data.user.friendships
    }))
}

  render(){
    console.log("state from giftbox: ", this.state)
    return (
      <div>
      <Container>
        <NavBar addFriend={this.handleAddFriend.bind(this)} handleAddEvent={this.handleAddEvent} />
      </Container>
        <Switch>
          <Route path="/friends/:id" children={() =>
            <FriendsPage
              events={this.state.eventLists}
              friendships={this.state.friendships}
              handleEdit={this.handleEditSubmit.bind(this)}
              handlePurchasedGifts={this.handlePurchasedGifts}
              handleDelete={this.handleDeleteFriend.bind(this)}
              handleAddGift={this.handleAddGift}
              handleEditGift={this.handleEditGift}
              handleDeleteGift={this.handleDeleteGift}
            /> } />
          <Route path="/events" children={() =>
            <EventsPage
              events={this.state.eventLists}
              handleEditGift={this.handleEditGift}
              handleDeleteGift={this.handleDeleteGift}
              friendships={this.state.friendships}
              handleAddFriendsToEventList={this.handleAddFriendsToEventList}
              handleAddGift={this.handleAddGift}
              handleEditGift={this.handleEditGift}
              handleDeleteGift={this.handleDeleteGift}
              handleDeleteFriendFromList={this.handleDeleteFriendFromList}
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
                    <EventList events={this.state.eventLists} />
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
