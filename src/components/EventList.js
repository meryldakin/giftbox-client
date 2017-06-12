import React from 'react'

export default function EventList(props){
  return (
    <div className="scrollable">
    
      <ul>
        {props.events.map( (event, i) => <li key={i}> {event.name} </li>)}
      </ul>
    </div>
  )
}
