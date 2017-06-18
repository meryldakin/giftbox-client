import React from 'react'
import { Link } from 'react-router-dom'
import {Icon, Segment, Header, Grid, Container, Checkbox, Form, Item } from 'semantic-ui-react'

import GiftEditModal from './GiftEditModal'
import LoaderThing from './LoaderThing'

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default class GiftCard extends React.Component {
  constructor(){
    super()
    this.state = {
      purchased: false
    }
  }

  componentDidMount(){
    this.setState({
      purchased: this.props.exchange.completed
    })
  }

  handleChange = () => {
    this.setState({
      purchased: !this.state.purchased
    })
  }

  render (){
    if (this.props){
      let gift = this.props.gift
      let event = this.props.eventList
      let exchange_id = this.props.exchange.id
      let completed = this.props.exchange.completed

      return (
        <div>
          <Segment >
            <Grid >
              <Grid.Row >
                <Grid.Column width={4}>
                  <Grid.Row>
                  <Item.Image size='tiny' src='http://www.bills.com.au/wp-content/themes/bills/images/gift-img.png' />
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Grid.Row >
                    <h3>{gift.item}</h3>
                  </Grid.Row>
                  <Grid.Row >
                    <Segment basic>
                    </Segment>
                  </Grid.Row>
                  <Grid.Row>
                  <h4>Give it for: <Link to={`/events/${event.id}`}>{event.name}</Link></h4>
                  </Grid.Row>
                  <Grid.Row >
                  <h4>Get it from: Target</h4>
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Grid.Row >
                    <Grid.Column >
                      <div className="inline-block float-right">
                        <GiftEditModal
                        celebration={this.props.celebration}
                        events={this.props.events}
                        exchange_id={exchange_id}
                        gift={gift}
                        event={event}
                        completed={completed}
                        handleEditGift={this.props.handleEditGift}
                        friend={this.props.friend} />
                      </div>
                      <div className="inline-block float-right">
                        <a href="#" onClick={function(){this.props.handleDeleteGift({exchange_id: exchange_id})}}><Icon name="delete"/></a>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Segment basic padded>
                    </Segment>
                  </Grid.Row>
                  <Grid.Row >

                      <Form>
                      Acquired:
                      <Checkbox

                      toggle
                      checked={this.state.purchased}
                      value={exchange_id}
                      onClick={this.handleChange}
                      onChange={this.props.handlePurchasedGifts}/>
                      </Form>

                  </Grid.Row>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Segment>
        </div>
      )
    } else {
      return (<LoaderThing/>)
    }
  }

}
