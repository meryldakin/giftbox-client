import React, { Component } from 'react'

import GiftCard from './GiftCard'
import AddGiftModal from './AddGiftModal'

class GiftTable extends Component {
  constructor(){
    super()
    this.state = {
      purchasedGifts: []
    }
  }


  render(){

    let celebrations = this.props.celebrations.filter( c => {
      return c.exchanges.length > 0
    })

    let giftCards = celebrations.map( c => {
       return c.exchanges.map( e => {
          return (
            <GiftCard
            celebration={c}
            events={this.props.events}
            exchange={e}
            gift={e.gift}
            eventList={c.event_list}
            handleDeleteGift={this.props.handleDeleteGift}
            handleEditGift={this.props.handleEditGift}
            friend={this.props.friend}
            handlePurchasedGifts={this.props.handlePurchasedGifts}
            current_user_id={this.props.current_user_id}
            />
          )
        })
      })



    return (
      <div>

      <AddGiftModal
        current_user_id={this.props.current_user_id}
        events={this.props.events}
        friend={this.props.friend}
        handleAddGift={this.props.handleAddGift} />
      {giftCards}

      </div>
    )
  }
}



export default GiftTable
