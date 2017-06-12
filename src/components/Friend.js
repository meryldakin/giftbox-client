import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'


import { Container, Divider, Grid, Header, Icon, Segment, Form, Button } from 'semantic-ui-react'

import NavBar from './NavBar'
import GiftTable from './GiftTable'
import EventsFriend from './EventsFriend'
import FriendEditForm from './FriendEditForm'
import { editFriend } from '../api'


class Friend extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: 0,
      firstName: '',
      lastName: '',
      birthday: '',
      notes: '',
      events: []
    }
  }


  componentDidMount(){

    this.setState({
      id: this.props.friend.friend.id,
      firstName: this.props.friend.friend.firstName,
      lastName: this.props.friend.friend.lastName,
      birthday: this.props.friend.friend.birthday,
      notes: this.props.friend.friend.notes,
      events: this.props.events
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log("next props friend," , nextProps)
    this.setState({
       id: nextProps.friend.friend.id,
       firstName: nextProps.friend.friend.firstName,
       lastName: nextProps.friend.friend.lastName,
       birthday: nextProps.friend.friend.birthday,
       notes: nextProps.friend.friend.notes,
       events: nextProps.friend.friend.events
    })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("should comp update nextprops, next state", nextProps, nextState);
  //   return this.state !== nextState;
  //
  //   return true;
  // }

  handleDelete(e){
    e.preventDefault()
    this.props.handleDelete({id: this.state.id})
  }


  render(){
    if (this.state.id === 0){
      return (<div>"Loading!"</div>)
    } else {
      console.log("friend page props: ", this.props.friend.celebrations)
      console.log("friend page state: ", this.state)
      let friend = this.state
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
                  <Link to={`/friends/${friend.id}/edit`}>Edit Friend</Link>
                  <Form onSubmit={this.handleDelete.bind(this)}>
                    <Form.Group>
                      <Button content="Delete Friend"  />
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
                        return <GiftTable friend={friend} celebrations={celebrations} handlePurchasedGifts={this.props.handlePurchasedGifts}/>
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
  }


}
export default withRouter(Friend)
