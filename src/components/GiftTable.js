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

    let celebrations = this.props.celebrations
    let exchanges = celebrations.map( celebration => celebration.exchanges.concat(celebration.event) ).filter( exchange => !!exchange[0] && !!exchange[1])
    let mappedGifts = exchanges.map( singleExchange => <GiftCard handleDeleteGift={this.props.handleDeleteGift} handleEditGift={this.props.handleEditGift} friend={this.props.friend} exchanges= {singleExchange} handlePurchasedGifts={this.props.handlePurchasedGifts}/> )

    return (
      <div>
        <Grid >
          <Grid.Row>
            <Grid.Column floated='left' width={5}>
              <Header as='h2'>Gifts</Header>
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
            <AddGiftModal friend={this.props.friend} handleAddGift={this.props.handleAddGift} />
              {mappedGifts}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default GiftTable
