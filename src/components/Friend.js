import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'


import { Grid, Header, Form, Button } from 'semantic-ui-react'

import GiftTable from './GiftTable'
import EventsFriend from './EventsFriend'
import FriendEditForm from './FriendEditForm'
import LoaderThing from './LoaderThing'



class Friend extends React.Component {

  handleDelete = (e) => {
    // console.log(this.props.friend.friend.id)
    e.preventDefault()
    this.props.handleDelete({id: this.props.friend.friend.id})
  }



  render(){
    console.log("friend page props: ", this.props.friend)
    if(this.props.friend){
      if (this.props.friend.friend.id === 0){
        return (<LoaderThing/>)
      } else {
        let friend = this.props.friend.friend
        let celebrations = this.props.friend.celebrations
        // let events = celebrations.map( celebration => celebration.event ).filter( event => !!event )
        return (
          <div>
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
                    <Link to={`/friends/${friend.id}/edit`}><Button content="Edit Friend"  /></Link>
                    <br/>
                    <br/>
                    <Form onSubmit={this.handleDelete}>
                      <Form.Group>
                        <Button content="Delete Friend"/>
                      </Form.Group>
                    </Form>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Switch>
                      <Route exact path="/friends/:id" render={ ({match}) => {
                          return <GiftTable friend={friend} celebrations={celebrations} handleAddGift={this.props.handleAddGift} handlePurchasedGifts={this.props.handlePurchasedGifts}/>
                        } }/>
                        <Route exact path="/friends/:id/edit" render={ ({match}) => {
                          return <FriendEditForm friend={friend}  onSubmit={this.props.handleEdit} />
                        } }/>
                      <Route exact path="/friends/:id/events" render={ ({match}) => {
                          return <EventsFriend friend={friend} />
                        } }/>
                    </Switch>
                  </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        )
      }
    } else {
        return (<LoaderThing/>)
      }
}

}
export default withRouter(Friend)
