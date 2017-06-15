import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Header, Grid, Container, Button, Icon } from 'semantic-ui-react'

import GiftCard from './GiftCard'
import AddGiftModal from './AddGiftModal'

class GiftTable extends Component {
  constructor(){
    super()
    this.state = {
      purchasedGifts: []
    }
  }


  render(){
    console.log("props from GIFTTABLE", this.props)
    let celebrations = this.props.celebrations.filter( c => {
      return c.exchanges.length > 0
    })

    let giftCards = celebrations.map( c => {
       return c.exchanges.map( e => {
          return (
            <GiftCard
            celebration={c}
            events={this.props.events}
            exchange={e}
            gift={e.gift}
            eventList={c.event_list}
            handleDeleteGift={this.props.handleDeleteGift}
            handleEditGift={this.props.handleEditGift}
            friend={this.props.friend}
            handlePurchasedGifts={this.props.handlePurchasedGifts}/>
          )
        })
      })

    console.log("CELEBRATIONS", giftCards)

    return (
      <div>
        <Grid >
          <Grid.Row>
            <Grid.Column floated='left' width={5}>

              <AddGiftModal events={this.props.events} friend={this.props.friend} handleAddGift={this.props.handleAddGift} />
            </Grid.Column>
            <Grid.Column floated='right' width={5}>
              <Container>
                <Button.Group compact fluid>
                 <Link to={`/friends/${this.props.friend.id}`}><Button positive>Gifts</Button></Link>
                 <Button.Or />
                 <Link to={`/friends/${this.props.friend.id}/events`}><Button >Events</Button></Link>
               </Button.Group>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {giftCards}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default GiftTable
