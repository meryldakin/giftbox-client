import React from 'react'
import { Link } from 'react-router-dom'

export default function FriendList(props){
  let friendsList = props.friends
  let formattedlist = friendsList.map( (friend, i) => <li key={i}><Link to={`/friends/${friend.id}`}>{friend.firstName}</Link></li> )

  return (
    <div>
      
      <ul>
        {formattedlist}
      </ul>
    </div>
  )
}
