import React from 'react'
import { Link } from 'react-router-dom'
import {Icon, Segment, Header, Grid, Container, Checkbox, Form } from 'semantic-ui-react'

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
          <Segment padded color='green'>
            <Grid >
              <Grid.Row>
                <Grid.Column width={8}>
                <Header as='h3'>{gift.item}</Header>
                  <p>Price: {gift.price}</p>
                </Grid.Column>
              <Grid.Column width={5}>
                <Header as='h3'><Link to={`/events/${event.id}`}>{event.name}</Link></Header>
                <p>{moment(event.date).format("M/DD/YYYY")}</p>
                <Container>
                  <Form>
                    <Checkbox
                      label='Purchased'
                      toggle
                      checked={this.state.purchased}
                      value={exchange_id}
                      onClick={this.handleChange}
                      onChange={this.props.handlePurchasedGifts}/>
                  </Form>
                </Container>
              </Grid.Column>
              <Grid.Column width={3}>
                <GiftEditModal
                celebration={this.props.celebration}
                events={this.props.events}
                exchange_id={exchange_id}
                gift={gift}
                event={event}
                completed={completed}
                handleEditGift={this.props.handleEditGift}
                friend={this.props.friend} />

                <a href="#" onClick={function(){this.props.handleDeleteGift({exchange_id: exchange_id})}}><Icon name="delete"/></a>

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
