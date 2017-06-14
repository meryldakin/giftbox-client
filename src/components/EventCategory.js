import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'


import { Grid, Header, Form, Button, Icon } from 'semantic-ui-react'


import LoaderThing from './LoaderThing'



class EventCategory extends React.Component {

  render(){
    console.log("events category props" , this.props)
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
