import React from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Container, Grid } from 'semantic-ui-react'



import FriendList from '../components/FriendList'
import LoaderThing from './LoaderThing'
import Friend from './Friend'

class FriendsPage extends React.Component {
  constructor(){
    super()
    this.state ={
      friendships: []
    }
  }

  // componentWillReceiveProps(nextProps) {
  //  this.setState({
  //    friendships: nextProps.friendships
  //    });
  //  }

  render(){
    if(this.props.friendships){
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
                    <Route render={ ({match}) => {
                      const friend = this.props.friendships.find(friendship => friendship.friend.id === parseInt(this.props.match.params.id))
                      return <Friend
                        friend={friend}
                        handleAddGift={this.props.handleAddGift}
                        handleDelete={this.props.handleDelete}
                        handlePurchasedGifts={this.props.handlePurchasedGifts}
                        handleEdit={this.props.handleEdit}
                        handleEditGift={this.props.handleEditGift} />
                    } }/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>
        )
      } else {
        return (
          <LoaderThing />
        )
      }
    } else {
      return ( <LoaderThing/>)
    }
  }
}

export default withRouter(FriendsPage)
