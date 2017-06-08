import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'


export default function FriendsPage(props) {
  return (
    <div>
    <h1>Friends Page</h1>
    <Route path="/friends/:id/gifts" render={ ({match}) => {
      const friend = this.state.friends.find(friend => friend.id === parseInt(match.params.id))
      console.log("from gb container", friend, match.params.id, this.state.friends)
      return <Friend friend={friend} />
    } }/>



    </div>
  )
}
