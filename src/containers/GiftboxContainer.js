import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Container, Divider, Grid, Header } from 'semantic-ui-react'

import EventList from '../components/EventList'
import FriendList from '../components/FriendList'
import GiftList from '../components/GiftList'
import FriendsPage from '../components/FriendsPage'
import Friend from '../components/Friend'
import NavBar from '../components/NavBar'
import Notifications from '../components/Notifications'
import GiftTable from '../components/GiftTable'
import EventsFriend from '../components/EventsFriend'

import { fetchGifts, fetchFriends, fetchEvents } from '../api'
import isAuthenticated from '../components/hocs/isAuthenticated'

const AuthedFriendsPage = isAuthenticated(FriendsPage)

class GiftboxContainer extends Component {
  constructor(){
    super()
    this.state = {
      gifts: [],
      friends: [],
      events: []
    }
  }

  componentDidMount(){
    fetchGifts()
      .then( data => this.setState({
        gifts: data.gifts
      }))
    fetchFriends()
      .then( data => this.setState({
        friends: data.users
      }))
    fetchEvents()
      .then( data => this.setState({
        events: data.events
      }))
  }

  render(){
    console.log('state: ', this.state.friends) // array of objects
    return (
      <div>
      <Container>
        <NavBar />
      </Container>
        <Switch>
          <Route path="/friends" render={() => <FriendsPage friends={this.state.friends} /> } />
          <Route exact path="/" render={() =>
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
                    <Header as="h1">Giftbox Home Page</Header>


                  </Grid.Column>

                  <Grid.Column width={3}>

                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Link to="/friends"><h2>Friends</h2></Link>
                    <FriendList friends={this.state.friends}/>
                  </Grid.Column>

                  <Grid.Column width={6}>
                    <GiftList gifts={this.state.gifts}/>
                  </Grid.Column>

                  <Grid.Column width={5}>
                    <EventList events={this.state.events} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
         }/>
        </Switch>
      </div>
    )

  }


}
export default withRouter(GiftboxContainer)












// <Route exact path="/friends/:id" render={ ({match}) => {
//   const friend = this.props.friends.find(friend => friend.id === parseInt(match.params.id))
//   return <Friend friend={friend} onDelete={ this.props.onDelete }/>
// } }/>
