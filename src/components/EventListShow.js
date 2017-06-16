import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { Grid, Header, Form, Button, Icon, Segment } from 'semantic-ui-react'
import moment from 'moment';


import LoaderThing from './LoaderThing'
import ListComplete from './ListComplete'
import GiftCard from './GiftCard'
import AddGiftModal from './AddGiftModal'
import AddFriendToListModal from './AddFriendToListModal'
import EditEventListModal from './EditEventListModal'



class EventListShow extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      listComplete: false,
      exchanges: []
    }
  }

  handleDeleteEvent = (e) => {
    e.preventDefault()
    this.props.handleDeleteEvent({event_id: this.props.event.id})
  }

  render(){
    console.log("EVENTLIST SHOW PROPS", this.props)
    if(this.props.event){
      let event = this.props.event
      let celebrations = this.props.event.celebrations
      let handleRemove = this.props.handleDeleteFriendFromList

      // RENDERS OUT THE GIFT CARDS WITH PROPER DATA
      let friends = this.props.event.friends.map( f => {
        let giftCards = celebrations.map( c => {
          if (c.friendship.friend_id === f.id) {
            return c.exchanges.map( e => {
              return (<div>
                <GiftCard
                celebration={c}
                events={this.props.events}
                gift={e.gift}
                eventList={event}
                event={event}
                friend={f}
                exchange_id={e.id}
                exchange={e}
                handleEditGift={this.props.handleEditGift}
                handlePurchasedGifts={this.props.handlePurchasedGifts}
                handleDeleteGift={this.props.handleDeleteGift} /></div>
              )
            })
          }
        })
        let friendCelebration = celebrations.find( c =>  c.friendship.friend_id === f.id )
        return (<div>
          <Segment>
          <a href="#" onClick={function(){handleRemove ({celebration_id: friendCelebration.id})}} ><Icon name="delete"/>Remove from this list</a>
          <Header as='h3'><Link to={`/friends/${f.id}`}>{f.firstName} {f.lastName}</Link></Header>
          <AddGiftModal events={this.props.events} friend={f} handleAddGift={this.props.handleAddGift} />
          {giftCards}</Segment>
          </div>
        )
      })
      // END OF RENDERING OUT GIFT CARDS
      // LOGIC FOR LIST COMPLETED
      let exchanges = this.props.event.celebrations.map( c => {
        return c.exchanges
      })

      let exchangeCompletedArray = exchanges.map( exs => {
        return exs.length > 0 ? exs.map( ex => {
          return ex.completed === false ? false : true  } )
          : false } ).reduce( (cum, curr) => {
            return cum.concat(curr)
          }, [])

      let completedList = exchangeCompletedArray.includes(false) || exchangeCompletedArray.length === 0 ? false : true

      // END LOGIC FOR LIST COMPLETED

      return (
        <div>
        <EditEventListModal
          event_name={event.name}
          event_date={event.date}
          event_category={event.category}
          event_id={event.id}
          handleEditEvent={this.props.handleEditEvent}/>

          <Header as="h2">{event.name}</Header>
          <Header as="h2">{moment(event.date).format("dddd, MMMM Do, YYYY")}</Header>

          <ListComplete completedList={completedList}/>
          <AddFriendToListModal event={this.props.event} friendships={this.props.friendships} handleAddFriendsToEventList={this.props.handleAddFriendsToEventList}/>
          <div>{friends}</div>
        </div>

      )
    } else {
      return ( <LoaderThing/>)
    }
  }

}

export default EventListShow
