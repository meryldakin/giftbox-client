import React from 'react'
import { Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Container, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react'



import FriendList from '../components/FriendList'
import Friend from './Friend'

class FriendsPage extends React.Component {
  constructor(){
    super()
    this.state ={
      friendships: []
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("next props friendspage," , nextProps)
   this.setState({
     friendships: nextProps.friendships
     });
   }

  render(){
    console.log("friendspage this.props: ", this.props)
    if (this.props.friendships.length > 0) {
      return (
        <div>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column width={4}>
                  <div>
                    <FriendList friends={this.props.friendships}/>
                  </div>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Route path="/friends/:id" render={ ({match}) => {
                    console.log("match from friends page," , match)
                    const friend = this.props.friendships.find(friendship => friendship.friend.id === parseInt(match.params.id))
                    return <Friend friend={friend} handleDelete={this.props.handleDelete} handlePurchasedGifts={this.props.handlePurchasedGifts} handleEdit={this.props.handleEdit}/>
                  } }/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      )
    } else {
      return (
        <h1>Loading</h1>
      )
    }
  }
}

export default withRouter(FriendsPage)
