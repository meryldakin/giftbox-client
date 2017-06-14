import React from 'react'
import { Link } from 'react-router-dom'
import LoaderThing from './LoaderThing'


export default function EventList(props){
  console.log("EVENT LIST PROPS", props.events.map( e => e.category))

  let categoryNames = props.events.map( e => e.category )
  let unique = categoryNames.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
  console.log("UNIQUE", unique)

  if (props.events){
    let formattedlist = unique.map( (event, i) => {
      if (!!event){
        return <li key={i}><Link to={`/events/category/${event}`}>{event}</Link></li>
      } else {
        return <LoaderThing/>
      }
    })

    // const categories = [
    //   "Just Because/Other",
    //   "Anniversary",
    //   "Birthday",
    //   "New Baby",
    //   "Graduation",
    //   "Wedding",
    //   "Valentine's Day",
    //   "Passover",
    //   "Easter",
    //   "Mother's Day",
    //   "Father's Day",
    //   "Hanukkah",
    //   "Christmas"
    // ]

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
