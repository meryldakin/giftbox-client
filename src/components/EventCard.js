import React from 'react'
import {Icon, Segment, Header, Grid, Form, Checkbox } from 'semantic-ui-react'

export default function EventCard(props){
  return (
    <div>
    <Segment padded color='green'>
      <Grid >
        <Grid.Row>
          <Grid.Column width={3}>
            <Icon name="calendar"/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h3'>Birthday</Header>
            <ul>
              <li>Xbox <Icon name="checkmark"/></li>
            </ul>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as='h3'>8/13/17</Header>

            <Form>
              <Checkbox label='Completed' toggle />
            </Form>

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
            <Header as='h3'>Christmas</Header>
            <ul>
              <li>Cat</li>
              <li>Beer</li>
            </ul>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as='h3'>12/25/17</Header>
            <Form>
              <Checkbox label='Completed' toggle />
            </Form>
           
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    </div>
  )
}
