import React from 'react'
import { Link } from 'react-router-dom'
import LoaderThing from './LoaderThing'


export default function EventList(props){
  console.log("events props,", props.events)
  if (props.events){
    let formattedlist = props.events.map( (event, i) => {
      if (!!event){
        return <li key={i}><Link to={`/events/category/${event.category}`}>{event.category}</Link></li>
      } else {
        return <LoaderThing/>
      }
    })


    console.log("formatted list " , formattedlist)
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
