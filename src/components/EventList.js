import React from 'react'

export default function EventList(props){
  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {props.events.map( (event, i) => <li key={i}> {event.name} </li>)}
      </ul>
    </div>
  )
}
