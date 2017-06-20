import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { Grid, Header, Form, Button, Icon, Segment, Item } from 'semantic-ui-react'
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
    let current_user_id = this.props.current_user_id
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
                handleDeleteGift={this.props.handleDeleteGift}
                current_user_id={this.props.current_user_id}/>

              )
            })
          }
        })
        let friendCelebration = celebrations.find( c =>  c.friendship.friend_id === f.id )
        console.log("friendCelebration", friendCelebration)
        return (
          <Segment >
            <div className="float-right">
              <a href="#" textAlign="right" onClick={function(){handleRemove ({celebration_id: friendCelebration.id, current_user_id: current_user_id})}} ><Icon name="delete"/></a>
            </div>
            <div className="float-left">
            <h2><Link to={`/friends/${f.id}`}>{f.firstName} {f.lastName}</Link> </h2>
            </div>
            <div className="float-right">
            <AddGiftModal current_user_id={this.props.current_user_id} events={this.props.events} friend={f} handleAddGift={this.props.handleAddGift} />
            </div>
            <br/>
            <br/>
            {giftCards}
          </Segment>

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

      //time til event


      // end of time til event

      return (
        <div>
        <Segment basic>
          <Item.Group>
            <Item>
              <h1><ListComplete name={event.name} completedList={completedList} handleCompletedList={this.props.handleCompletedList}/></h1>
              <Item.Content verticalAlign='middle'>
                <Item.Extra>
                <div className="float-right"><EditEventListModal
                event_name={event.name}
                event_date={event.date}
                event_category={event.category}
                event_id={event.id}
                handleEditEvent={this.props.handleEditEvent}
                current_user_id={this.props.current_user_id}/></div>
                </Item.Extra>
                <Item.Header><h1>{event.name}</h1></Item.Header>
                <Item.Description><h3><Icon name="calendar"/>{event.date !== null ? moment(event.date).format("dddd MMMM Do, YYYY") : "Anytime!"}</h3>
                <h2 className="gold-font">{moment(event.date).fromNow()}!</h2>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <AddFriendToListModal current_user_id={this.props.current_user_id} event={this.props.event} friendships={this.props.friendships} handleAddFriendsToEventList={this.props.handleAddFriendsToEventList}/>
        {friends}
        </div>

      )
    } else {
      return ( <LoaderThing/>)
    }
  }

}

export default EventListShow
