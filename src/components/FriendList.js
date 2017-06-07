import React from 'react'

export default function FriendList(props){
  return (
    <div>
      <h2>Friend List</h2>
      <ul>
        {props.friends.map( (friend, i) => <li key={i}>{friend.firstName}</li>)}
      </ul>
    </div>
  )
}
