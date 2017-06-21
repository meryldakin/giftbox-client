import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Grid, Container, Button } from 'semantic-ui-react'

import EventCard from './EventCard'

const EventsFriend = (props) => {
  return (
    <div>
      <Grid >
        <Grid.Row>
          <Grid.Column floated='left' width={5}>
            <Header as='h2'>Events</Header>
          </Grid.Column>
          <Grid.Column floated='right' width={5}>
            <Container>
              <Button.Group compact fluid>
               <Link to={`/friends/${props.friend.id}`}><Button compact>Gifts</Button></Link>
               <Button.Or />
               <Link to={`/friends/${props.friend.id}/events`}><Button positive>Events</Button></Link>
             </Button.Group>
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <EventCard/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default EventsFriend
