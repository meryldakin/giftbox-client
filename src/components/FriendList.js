import React from 'react'
import { Link } from 'react-router-dom'

export default function FriendList(props){
  console.log("props from friend list,", props)
  let friendsList = props.friends.map( friendship => friendship.friend )
  let formattedlist = friendsList.map( (friend, i) => <li key={i}><Link to={`/friends/${friend.id}`}>{friend.firstName}</Link></li> )
  console.log("props from friend list", props)
  return (
    <div>
      <ul>
        {formattedlist}
      </ul>
    </div>
  )
}
