import React from 'react'
import { Link } from 'react-router-dom'

import LoaderThing from './LoaderThing'

export default function FriendList(props){
  if (props.friends){
    let friendsList = props.friends.map( friendship => friendship.friend )
    let formattedlist = friendsList.map( (friend, i) => {
      if (!!friend){
        return <li key={i}><Link to={`/friends/${friend.id}`}>{friend.firstName} {friend.lastName}</Link></li>
      } else {
        return <LoaderThing/>
      }
    })
    return (
      <div className="scrollable">
      <ul >
      {formattedlist}
      </ul>
      </div>
    )
  } else {
    return <LoaderThing/>
  }
}
