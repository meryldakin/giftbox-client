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
              return (
                <Grid.Row>
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
                handleDeleteGift={this.props.handleDeleteGift} />
                </Grid.Row>
              )
            })
          }
        })

        let friendCelebration = celebrations.find( c =>  c.friendship.friend_id === f.id )
        return (<div>
          <Segment>
          <a href="#" onClick={function(){handleRemove ({celebration_id: friendCelebration.id})}} ><Icon name="delete"/>Remove from this list</a>
          <h3><Link to={`/friends/${f.id}`}>{f.firstName} {f.lastName}</Link></h3>
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
        <Grid>
          <Grid.Row>
          <EditEventListModal
            event_name={event.name}
            event_date={event.date}
            event_category={event.category}
            event_id={event.id}
            handleEditEvent={this.props.handleEditEvent}/>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={10}>
                <h2>{event.name}</h2>
                <h2>{moment(event.date).format("dddd, MMMM Do, YYYY")}</h2>
              </Grid.Column>
              <Grid.Column width={6}>
                <ListComplete completedList={completedList} handleCompletedList={this.props.handleCompletedList}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <AddFriendToListModal event={this.props.event} friendships={this.props.friendships} handleAddFriendsToEventList={this.props.handleAddFriendsToEventList}/>
            </Grid.Row>

              <div>{friends}</div>

          </Grid>
        </div>

      )
    } else {
      return ( <LoaderThing/>)
    }
  }

}

export default EventListShow
