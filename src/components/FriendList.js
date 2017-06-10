import React from 'react'
import { Link } from 'react-router-dom'

export default function FriendList(props){
  console.log(props)
  let friendsList = props.friends.map( friendship => friendship.friend )
  console.log(friendsList)

  let formattedlist = friendsList.map( (friend, i) => <li key={i}><Link to={`/friends/${friend.id}`}>{friend.firstName}</Link></li> )

  return (
    <div>

      <ul>
        {formattedlist}
      </ul>
    </div>
  )
}
