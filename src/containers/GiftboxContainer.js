import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import { withRouter } from 'react-router'
import { Container, Grid, Header, Segment, Button, Sidebar, Menu, Icon, Image } from 'semantic-ui-react'

import EventList from '../components/EventList'
import FriendList from '../components/FriendList'
import GiftList from '../components/GiftList'
import FriendsPage from '../components/FriendsPage'
import NavBar from '../components/NavBar'
import EventsPage from '../components/EventsPage'

import {
  decodeToken,
  fetchGifts,
  fetchFriends,
  fetchEventLists,
  addFriend,
  editFriend,
  deleteFriend,
  addGift,
  editGift,
  editExchange,
  editCelebration,
  deleteGift,
  addEvent,
  editEvent,
  findOrCreateCelebrations,
  deleteFriendFromList,
  editExchangeCompleted,
  editCompletedList } from '../api'
// import isAuthenticated from '../components/hocs/isAuthenticated'
//
// const AuthedFriendsPage = isAuthenticated(FriendsPage)

class GiftboxContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      gifts: [],
      friendships: [],
      eventLists: [],
      current_user_id: props.current_user_id,
      events_visible: false,
      friends_visible: false
    }

  }

  makeFetches = (res) => {
    fetchGifts().then( data => this.setState({ gifts: data.gifts }))
    fetchFriends(res).then( data => this.setState({ friendships: data.user.friendships }))
    fetchEventLists().then( data => this.setState({ eventLists: data.event_lists }))
  }

  componentDidMount(){
    decodeToken({token: localStorage.jwt})
    .then( res => {
      console.log(res)
      this.makeFetches(res)
    })
  }

  handleEditSubmit = (state, friendID) => {
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


  handleAddFriend = (state) => {
      addFriend(state)
      .then( data => {
        this.setState(prevState => {
          return {
            friendships: data.users
          }
      }, this.props.history.push(`/friends/${data.users[data.users.length-1].friend.id}`)
    )})
    }

  handleDeleteFriend = (id) => {
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

  handlePurchasedGifts = (event, propsFromGift) => {
    let checked = propsFromGift.checked
    let exchange_id = propsFromGift.value
    editExchangeCompleted({exchange_id: exchange_id, checked: checked})
    .then( data => {
      this.setState({
        eventLists: data.exchanges
      })
    })
    fetchFriends()
      .then( data => this.setState({
        friendships: data.user.friendships
      }))
  }

  handleAddEvent = (eventState) => {
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

  handleEditEvent = (eventState) => {
    // console.log("HANDLE EDIT EVENT", eventState)
    editEvent(eventState)
    .then( data => {
      this.setState(prevState => {
        return {
          eventLists: data.event_lists
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

handleCompletedList = (completedBoolean, event_id) => {
  editCompletedList({completed: completedBoolean, event_list_id: event_id})
  .then( data => {
    this.setState(prevState => {
    return {
      eventLists: data.event_lists
      }
    })
  })
  fetchFriends()
    .then( data => this.setState({
      friendships: data.user.friendships
    }))
}

toggleEventVisibility = () => this.setState({ events_visible: !this.state.events_visible })
toggleFriendVisibility = () => this.setState({ friends_visible: !this.state.friends_visible })

  render(){
    const { friends_visible, events_visible } = this.state
    console.log("props from GIFTBOX", this.props, this.state)
    return (
      <Container>

        <NavBar addFriend={this.handleAddFriend.bind(this)} handleAddEvent={this.handleAddEvent} current_user_id={this.props.current_user_id}/>

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
              current_user_id={this.props.current_user_id}
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
              handlePurchasedGifts={this.handlePurchasedGifts}
              handleDeleteFriendFromList={this.handleDeleteFriendFromList}
              handleEditEvent={this.handleEditEvent}
              handleCompletedList={this.handleCompletedList}
              current_user_id={this.state.current_user_id}
            /> } />
          <Route exact path="/" render={() =>

          <div>
                <Sidebar.Pushable>
                  <Sidebar
                    animation='overlay'
                    width='wide'
                    direction='right'
                    visible={events_visible}
                    icon='labeled' >
                    <EventList events={this.state.eventLists}/>
                  </Sidebar>
                  <Sidebar
                    animation='overlay'
                    width='wide'
                    direction='left'
                    visible={friends_visible}
                    icon='labeled' >
                    <FriendList friends={this.state.friendships}/>
                  </Sidebar>
                <Sidebar.Pusher>
                    <Segment basic padded>
                    </Segment>
                    <Segment basic padded textAlign='center'>
                      <h1 className="title">GIFTBOX</h1>
                    <div>
                    <Button.Group>
                      <Button basic onClick={this.toggleFriendVisibility}>Friends</Button>
                      <Button.Or />
                      <Button basic onClick={this.toggleEventVisibility}>Event Lists</Button>
                    </Button.Group>
                    </div>
                    <Segment basic padded>
                    </Segment>
                    <Segment basic padded>
                    </Segment>
                    <Segment basic padded>
                    </Segment>
                    <Segment basic padded>
                    </Segment>
                    </Segment>
                  </Sidebar.Pusher>
                  </Sidebar.Pushable>
            </div>
         }/>
        </Switch>
      </Container>
    )

  }


}
export default withRouter(GiftboxContainer)
