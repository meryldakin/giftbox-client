import React from 'react'
import { Link } from 'react-router-dom'
import LoaderThing from './LoaderThing'
import moment from 'moment';


import {Segment} from 'semantic-ui-react'


export default function EventList(props){

  if (props.events){
    console.log(props)
    // let categoryNames = props.events.map( e => e.category )
    // let unique = categoryNames.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
    let sortedList = props.events.filter( event => {
      return moment(event.date) > moment() || event.date === null
    }).sort( (a,b) => {
      return new Date(b.date) - new Date(a.date)
    }).reverse()

    console.log("sorted list", sortedList)

    let formattedlist = sortedList.map( (event, i) => {
      if (!!event){
        return (<Segment vertical key={i}>
        <p>{event.date ? moment(event.date).format("MM/DD/YYYY") : null } | <Link to={`/events/${event.id}`}>{event.name}</Link></p>
        </Segment>)
      }
    })
    return (
      <div>
        <Segment floated='right' className="scrollable">
        <h1>Upcoming Events</h1>
        {formattedlist}
        </Segment>
      </div>
    )
  } else {
    return <LoaderThing/>
  }
}
