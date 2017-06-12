import React from 'react'
import {Icon, Segment, Header, Grid, Container, Checkbox, Form } from 'semantic-ui-react'

export default function GiftCard (props) {

    let giftFromProps = props.exchanges.filter( exchange => !!exchange.gift ).map( exchange => exchange.gift )
    let eventFromProps = props.exchanges.filter( exchange => !!exchange.name )
    let completedFromProps = props.exchanges.map( exchange => exchange.completed )
    let gift = giftFromProps[0]
    let event = eventFromProps[0]
    let completed = completedFromProps[0]

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
            <Icon name="delete"/>
            <Icon name="write"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      </div>
    )

}
