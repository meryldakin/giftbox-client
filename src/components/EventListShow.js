import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'


import { Grid, Header, Form, Button, Icon, Segment } from 'semantic-ui-react'


import LoaderThing from './LoaderThing'
import GiftCard from './GiftCard'
import AddFriendToListModal from './AddFriendToListModal'



class EventListShow extends React.Component {


  render(){

    if(this.props){

      console.log("props from EventListShow", this.props)
      let friendsOnList = this.props.event.friendships.map( (friendship, i) => {
        console.log("friendship", friendship)
        let exchange = friendship.celebrations[0].exchanges[0]
        let eventList = friendship.celebrations[0].event_list
        let friend = friendship.friend
        let giftCardData = {exchanges: [exchange, eventList], friend: friend}

        return (
          <div>
          <Segment><Header as='h3'><Link to={`/friends/${friendship.friend.id}`}>{friendship.friend.firstName} {friendship.friend.lastName}</Link></Header>
          {!!exchange ? <GiftCard handleEditGift={this.props.handleEditGift} handleDeleteGift={this.props.handleDeleteGift} exchanges={[exchange, eventList]} friend={friend}/> : null}</Segment>
          </div>
        )
      })

      return (
        <div>
        <Header as="h2">{this.props.event.name}</Header>
        <AddFriendToListModal event={this.props.event} friendships={this.props.friendships} handleAddFriendsToEventList={this.props.handleAddFriendsToEventList}/>
        <div>{this.props.event.day}/{this.props.event.month}</div>
        <div>{friendsOnList}</div>
        </div>

      )
    } else {
      return ( <LoaderThing/>)
    }
  }

}

export default EventListShow
