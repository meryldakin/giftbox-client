import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { Grid, Icon, Item } from 'semantic-ui-react'
import moment from 'moment';

import GiftTable from '../GiftComponents/GiftTable'
import EventsFriend from '../EventComponents/EventsFriend'
import FriendEditForm from './FriendEditForm'
import LoaderThing from '../LoaderThing'
import rightChevronGold from '../../images/rightChevronGold.png'

class Friend extends React.Component {

  handleDelete = (e) => {
    e.preventDefault()
    this.props.handleDelete({id: this.props.friend.friend.id})
  }

  render(){


    if(this.props.friend){
      if (this.props.friend.friend.id === 0){
        return (<LoaderThing/>)
      } else {
        let friend = this.props.friend.friend
        let celebrations = this.props.friend.celebrations

        return (
          <div >
              <Grid className="animated fadeIn">
                <Grid.Row>
                  <Grid.Column width={2}>
                  </Grid.Column>
                  <Grid.Column width={10}>
                  <Item.Group>
                    <Item>
                      <Item.Image size='small' src='https://s-media-cache-ak0.pinimg.com/736x/c2/b6/c1/c2b6c1af10cbbd8df560495fd7fa5415.jpg' />
                      <Item.Content verticalAlign='middle'>
                        <Item.Extra>
                        <div className="float-right"><Link to={`/friends/${friend.id}/edit`}><Icon name="edit"/></Link> <a href="#" onClick={this.handleDelete}><Icon name="delete"/></a></div>
                        </Item.Extra>
                        <Item.Header><h1>{friend.firstName} {friend.lastName}</h1></Item.Header>
                        <Item.Description><h3>{friend.birthday ? `Birthday: ${moment(friend.birthday).format("MMMM Do, YYYY")}` : `No birthday added. Edit ${friend.firstName}'s profile to add birthday!`}</h3>
                        <h3>Notes:</h3><p>{friend.notes}</p> </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                  </Grid.Column>
                  <Grid.Column width={4}>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2}>

                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Switch>
                      <Route exact path="/friends/:id" render={ ({match}) => {
                          return <GiftTable
                            events={this.props.events}
                            friend={friend}
                            celebrations={celebrations}
                            handleAddGift={this.props.handleAddGift}
                            handlePurchasedGifts={this.props.handlePurchasedGifts}
                            handleEditGift={this.props.handleEditGift}
                            handleDeleteGift={this.props.handleDeleteGift}
                            current_user_id={this.props.current_user_id}/>

                        } }/>
                        <Route exact path="/friends/:id/edit" render={ ({match}) => {
                          return <FriendEditForm  current_user_id={this.props.current_user_id} friend={friend}  onSubmit={this.props.handleEdit} />
                        } }/>
                      <Route exact path="/friends/:id/events" render={ ({match}) => {
                          return <EventsFriend
                          friend={friend} />
                        } }/>
                    </Switch>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Link to="/events/2"><img src={rightChevronGold}/></Link>
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
