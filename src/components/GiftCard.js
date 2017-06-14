import React from 'react'
import { Link } from 'react-router-dom'
import {Icon, Segment, Header, Grid, Container, Checkbox, Form } from 'semantic-ui-react'

import GiftEditModal from './GiftEditModal'
import LoaderThing from './LoaderThing'

export default function GiftCard (props) {
  console.log("props from GIFTCARD"  , props)
  if (props && props.exchanges){
    let giftFromProps = props.exchanges.filter( exchange => !!exchange && !!exchange.gift ).map( exchange => exchange.gift )
    let eventFromProps = props.exchanges.filter( exchange => !!exchange && !!exchange.name )
    let completedFromProps = props.exchanges.filter( exchange => !!exchange ).map( exchange => exchange.completed )
    let idFromProps = props.exchanges.filter( exchange => !!exchange ).map( exchange => exchange.id )

    let gift = giftFromProps[0]
    let event = eventFromProps[0]
    let completed = completedFromProps[0]
    let exchange_id = idFromProps[0]

    const completedExchanges = true

    return (
      <div>
        <Segment padded color='green'>
          <Grid >
            <Grid.Row>
              <Grid.Column width={8}>
              <Header as='h3'>{gift.item}</Header>
                <p>Price: {gift.price}</p>
              </Grid.Column>
            <Grid.Column width={5}>
              <Header as='h3'>{event.name}</Header>
              <p>{event.date}</p>
              <Container>
                <Form>
                  <Checkbox label='Purchased' toggle value={gift.id} onChange={props.handlePurchasedGifts}/>
                </Form>
              </Container>
            </Grid.Column>
            <Grid.Column width={3}>
              <GiftEditModal
              exchange_id={exchange_id}
              gift={gift}
              event={event}
              completed={completed}
              handleEditGift={props.handleEditGift}
              friend={props.friend} />

              <a href="#" onClick={function(){props.handleDeleteGift({exchange_id: exchange_id})}}><Icon name="delete"/></a>

            </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  } else {
    return (<LoaderThing/>)
  }

}
