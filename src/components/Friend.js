import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import { Container, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react'

import NavBar from './NavBar'
import GiftTable from './GiftTable'
import EventsFriend from './EventsFriend'

export default function Friend(props){
  let friend = props.friend.friend
  let celebrations = props.friend.celebrations
  let events = celebrations.map( celebration => celebration.event ).filter( event => !!event )

    return (
      <div>

        <Container>

          <Grid columns={1}>

            <Grid.Column>
            </Grid.Column>

          </Grid>

          <Grid columns={1}>

            <Grid.Row>

              <Grid.Column>
                  <Header as='h1'></Header>
              </Grid.Column>

            </Grid.Row>

          </Grid>

          <Grid celled='internally'>

            <Grid.Row>

              <Grid.Column width={3}>
              </Grid.Column>

              <Grid.Column width={10}>
                <Header as="h1">{friend.firstName} {friend.lastName}</Header>
                <h4>Birthday: {friend.birthday}</h4>
                <h4>Notes:</h4>
                <p>{friend.notes}</p>
              </Grid.Column>

              <Grid.Column width={3}>
              </Grid.Column>

            </Grid.Row>

            <Grid.Row>

              <Grid.Column width={3}>
              </Grid.Column>

              <Grid.Column width={10}>

              <Switch>
                <Route exact path="/friends/:id" render={ ({match}) => {
                    return <GiftTable friend={friend} celebrations={celebrations} handlePurchasedGifts={props.handlePurchasedGifts}/>
                  } }/>
                <Route exact path="/friends/:id/events" render={ ({match}) => {
                    return <EventsFriend friend={friend} events={events} />
                  } }/>
              </Switch>

              </Grid.Column>

              <Grid.Column width={3}>
              </Grid.Column>

            </Grid.Row>

          </Grid>

        </Container>

      </div>
    )


}
