import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Icon, Segment, Header, Grid, Container, Button } from 'semantic-ui-react'

import GiftCard from './GiftCard'

const GiftTable = () => {
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
               <Link to='/amigo/gifts'><Button positive>Gifts</Button></Link>
               <Button.Or />
               <Link to='/amigo/events'><Button >Events</Button></Link>
             </Button.Group>
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <GiftCard/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default GiftTable
