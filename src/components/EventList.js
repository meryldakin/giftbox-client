import React from 'react'
import { Link } from 'react-router-dom'
import LoaderThing from './LoaderThing'


export default function EventList(props){
  if (props.events){
    let categoryNames = props.events.map( e => e.category )
    let unique = categoryNames.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
    let formattedlist = unique.map( (event, i) => {
      if (!!event){
        return <li key={i}><Link to={`/events/category/${event}`}>{event}</Link></li>
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
