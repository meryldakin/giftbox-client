import React from 'react'
import { Link } from 'react-router-dom'
import {Icon, Segment, Header, Grid, Container, Checkbox, Form } from 'semantic-ui-react'

import GiftEditModal from './GiftEditModal'

export default function GiftCard (props) {
  console.log(props)
    let giftFromProps = props.exchanges.filter( exchange => !!exchange.gift ).map( exchange => exchange.gift )
    let eventFromProps = props.exchanges.filter( exchange => !!exchange.name )
    let completedFromProps = props.exchanges.map( exchange => exchange.completed )
    let idFromProps = props.exchanges.map( exchange => exchange.id )

    let gift = giftFromProps[0]
    let event = eventFromProps[0]
    let completed = completedFromProps[0]
    let exchange_id = idFromProps[0]

    const completedExchanges = true

    // function handleDeleteGift(e){
    //   console.log("did this hit")
    //   e.preventDefault()
    //   props.handleDeleteGift(exchange_id)
    // }

    return (
      <div>
      <Segment padded color='green'>
        <Grid >
          <Grid.Row>
            <Grid.Column width={8}>
              <a href={gift.link}><Header as='h3'>{gift.item}</Header></a>
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

}
