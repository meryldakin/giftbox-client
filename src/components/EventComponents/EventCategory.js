import React from 'react'
import { Link } from 'react-router-dom'

class EventCategory extends React.Component {

  render(){
    let eventsInCategory = this.props.eventsInCategory
    let formattedEvents = eventsInCategory.map( (event, i) => {
      return (
        <ul>
          <Link to={`/events/${event.id}`}><li key={i}>{event.name}</li></Link>
        </ul>
      )
    })
    return(
      <div>
        <div>{this.props.category.category}</div>
        { formattedEvents }
      </div>
    )
  }
}

export default EventCategory
