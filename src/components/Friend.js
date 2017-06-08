import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import { Container, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react'

import NavBar from './NavBar'
import GiftTable from './GiftTable'
import EventsFriend from './EventsFriend'

export default function Friend(props){
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
                <Header as="h1">{props.friend.firstName} {props.friend.lastName}</Header>
                <h4>Birthday: 8/13 </h4>
                <h4>Notes:</h4>
                <p>Likes ice cream, not into birds</p>
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
                    const friend = props.friend
                    return <GiftTable friend={friend} />
                  } }/>
                <Route exact path="/friends/:id/events" render={ ({match}) => {
                    const friend = props.friend
                    return <EventsFriend friend={friend} />
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
