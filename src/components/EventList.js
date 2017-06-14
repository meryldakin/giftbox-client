import React from 'react'
import { Link } from 'react-router-dom'
import LoaderThing from './LoaderThing'


export default function EventList(props){
  if (props.events){
    let formattedlist = props.events.map( (event, i) => {
      if (!!event){
        return <li key={i}><Link to={`/events/category/${event.category}`}>{event.category}</Link></li>
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
