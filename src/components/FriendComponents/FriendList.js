import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import {Segment} from 'semantic-ui-react'



import LoaderThing from '../LoaderThing'

export default function FriendList(props){
  console.log("props from friend list ", props)
  if (props.friends){
    let friendsList = props.friends.map( friendship => friendship.friend )

    let sortedList = friendsList.sort( (a,b) => {
      let textA = a.firstName.toUpperCase();
      let textB = b.firstName.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })

    let formattedlist = sortedList.map( (friend, i) => {
      if (!!friend){
        return (<Segment vertical key={i}>
          <p><Link to={`/friends/${friend.id}`}>{friend.firstName} {friend.lastName}</Link></p>
          </Segment>)
      } else {
        return <LoaderThing/>
      }
    })
    return (
      <div className="scrollable">
      <Segment>
      <h1>Friends</h1>
      {formattedlist}
      </Segment>
      </div>
    )
  } else {
    return <LoaderThing/>
  }
}
