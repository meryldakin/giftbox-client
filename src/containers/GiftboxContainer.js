import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import { withRouter } from 'react-router'
import { Container, Segment, Button, Sidebar,  } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import EventList from '../components/EventComponents/EventList'
import FriendList from '../components/FriendComponents/FriendList'
import FriendsPage from '../components/FriendComponents/FriendsPage'
import NavBar from '../components/NavBar'
import EventsPage from '../components/EventComponents/EventsPage'

import {
  editGift,
  editExchange,
editExchangeCompleted,
  } from '../api'

class GiftboxContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      events_visible: false,
      friends_visible: false
    }

  }

  handleEditSubmit = (state, friendID) => {
    this.props.editFriend(state)
    this.props.history.push(`/friends/${friendID}`)
  }


  handleAddFriend = (friendInfo) => {
      this.props.addFriend(friendInfo)
      this.props.history.push(`/friends/${this.props.friendships[this.props.friendships.length - 1].friend.id}`)
  }

  handleDeleteFriend = (idsFromFriendPage) => {
    let id = idsFromFriendPage.id
    this.props.deleteFriend({current_user_id: this.props.current_user_id, id: id})
    this.props.history.push(`/friends/${this.props.friendships[0].friend.id}}`)
  }

  handleAddGift = (stateFromAddGift) => {
    this.props.addGift(stateFromAddGift)
    this.props.fetchEventLists(this.props.current_user_id)
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
    this.props.fetchEventLists(this.props.current_user_id)
  }

  handleDeleteGift = (dataFromGift) => {
    let friend = dataFromGift.friend
    let exchange = dataFromGift.exchange_id
    this.props.deleteGift({exchange_id: exchange, current_user_id: this.props.current_user_id, friend: friend, event: dataFromGift.event})
    this.props.fetchEventLists(this.props.current_user_id)
  }

  handlePurchasedGifts = (propsFromGift) => {
    console.log("PROPS FROM GIFT", propsFromGift)
    let checked = propsFromGift.checked
    let event = propsFromGift.event
    let exchange_id = propsFromGift.exchange_id
    editExchangeCompleted({exchange_id: exchange_id, event: event, checked: checked})
  }

  handleAddEvent = (eventState) => {
    this.props.addEvent(eventState)
  }

  handleEditEvent = (eventState) => {
    this.props.editEvent(eventState)
  }

  handleCompletedList = (completedBoolean, event_id) => {
    this.props.editCompletedList({completed: completedBoolean, event_list_id: event_id})
  }

  handleAddFriendsToEventList = (eventListParams) => {
    this.props.findOrCreateCelebrations(eventListParams)
  }

handleDeleteFriendFromList = (celebration_id) => {
  this.props.deleteFriendFromList(celebration_id)
}

toggleEventVisibility = () => this.setState({ events_visible: !this.state.events_visible })
toggleFriendVisibility = () => this.setState({ friends_visible: !this.state.friends_visible })

  render(){
    const { friends_visible, events_visible } = this.state

    return (
      <Container>

        <NavBar addFriend={this.handleAddFriend.bind(this)} handleAddEvent={this.handleAddEvent} current_user_id={this.props.current_user_id}/>

        <Switch>
          <Route path="/friends/:id" children={() =>
            <FriendsPage
              events={this.props.event_lists}
              friendships={this.props.friendships}
              handleEdit={this.handleEditSubmit}
              handlePurchasedGifts={this.handlePurchasedGifts}
              handleDelete={this.handleDeleteFriend}
              handleAddGift={this.handleAddGift}
              handleEditGift={this.handleEditGift}
              handleDeleteGift={this.handleDeleteGift}
              current_user_id={this.props.current_user_id}
            /> } />
          <Route path="/events" children={() =>
            <EventsPage
              events={this.props.event_lists}
              handleEditGift={this.handleEditGift}
              handleDeleteGift={this.handleDeleteGift}
              friendships={this.props.friendships}
              handleAddFriendsToEventList={this.handleAddFriendsToEventList}
              handleAddGift={this.handleAddGift}
              handlePurchasedGifts={this.handlePurchasedGifts}
              handleDeleteFriendFromList={this.handleDeleteFriendFromList}
              handleEditEvent={this.handleEditEvent}
              current_user_id={this.props.current_user_id}
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
                    <EventList events={this.props.event_lists}/>
                  </Sidebar>
                  <Sidebar
                    animation='overlay'
                    width='wide'
                    direction='left'
                    visible={friends_visible}
                    icon='labeled' >
                    <FriendList friends={this.props.friendships}/>
                  </Sidebar>
                <Sidebar.Pusher className="animated fadeIn">
                    <Segment basic padded>
                    </Segment>
                    <Segment basic padded textAlign='center'>
                      <h1 className="title" >GIFTBOX</h1>
                    <div>
                    <Button.Group>
                      <Button basic onClick={this.toggleFriendVisibility}>Friends</Button>
                      <Button.Or />
                      <Button basic onClick={this.toggleEventVisibility}>Gift Lists</Button>
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

const mapStateToProps = (state) => (
  {
    loading: state.loading,
    current_user_id: state.current_user_id,
    friendships: state.friendships,
    event_lists: state.event_lists
  }
)

export default withRouter(connect(mapStateToProps, actions)(GiftboxContainer))
