import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Friend from './Friend'


export default function FriendsPage(props) {
  if (props.friends.length > 0) {
    return (
      <div>
      <h1>Friends Page</h1>
      <Route path="/friends/:id" render={ ({match}) => {
        const friend = props.friends.find(friend => friend.id === parseInt(match.params.id))
        return <Friend friend={friend} />
      } }/>
      </div>
    )
  } else {
    return (
      <h1>Loading</h1>
    )
  }
}
//
// <Route path="/friends/:id/gifts" render={ ({match}) => {
//   const friend = props.friends.find(friend => friend.id === parseInt(match.params.id))
//   return <Friend friend={friend} />
// } }/>
// <Route path="/friends/:id/events" render={ ({match}) => {
//   const friend = props.friends.find(friend => friend.id === parseInt(match.params.id))
//   return <Friend friend={friend} />
// } }/>
