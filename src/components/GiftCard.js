import React from 'react'
import {Icon, Segment, Header, Grid, Button, Container } from 'semantic-ui-react'

export default function GiftCard(props){
  return (
    <div>
    <Segment padded color='green'>
      <Grid >
        <Grid.Row>
          <Grid.Column width={3}>
            <Icon name="calendar"/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h3'>Xbox</Header>
            <p>Price: $500</p>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as='h3'>Birthday</Header>
            <Container>
            <Button.Group compact fluid>
             <Button compact>Wish List</Button>
             <Button.Or />
             <Button positive>Purchased</Button>
           </Button.Group>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment >
      <Grid >
        <Grid.Row>
          <Grid.Column width={3}>
            <Icon name="calendar"/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h3'>Cat</Header>
            <p>Price: $50</p>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as='h3'>Christmas</Header>
            <Container>
            <Button.Group compact fluid>
             <Button positive>Wish List</Button>
             <Button.Or />
             <Button >Purchased</Button>
           </Button.Group>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    </div>
  )
}
