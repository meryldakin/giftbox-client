import React from 'react'
import { Route } from 'react-router-dom'
// import { withRouter } from 'react-router'
import { Container, Grid } from 'semantic-ui-react'
import EventList from './EventList'
import EventListShow from './EventListShow'
import EventCategory from './EventCategory'
import LoaderThing from './LoaderThing'

class EventsPage extends React.Component {
  constructor(){
    super()
  }

  render(){
    console.log("eventspage props", this.props)
    if(this.props){


      if(this.props.events){
        let eventsList = this.props.events

        eventsList.map( event => {
          return event.category
        })
        console.log("eventslist," , eventsList)
        if (eventsList.length > 0) {
          return (
            <div>
              <Container>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <div>
                        <EventList events={eventsList}/>
                      </div>
                    </Grid.Column>
                    <Grid.Column width={12}>
                    <Route exact path='/events/category/:category' render={ ({match}) => {
                      console.log("match object from events page," , match)
                      const category = eventsList.find(event => event.category === match.params.category)
                      const eventsInCategory = eventsList.filter(event => event.category === match.params.category)
                      console.log("events category from events page", eventsInCategory)
                      return (<EventCategory
                        eventsInCategory={eventsInCategory}
                        category={category}
                        />)
                      }}/>
                      <Route exact path='/events/:id' render={ ({match}) => {
                        console.log("match from events for events show page", match)
                        const event = eventsList.find(event => event.id === parseInt(match.params.id))
                        return (<EventListShow
                          event={event}
                          handleEditGift={this.props.handleEditGift}
                          handleDeleteGift={this.props.handleDeleteGift}
                          />)
                      }}/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </div>
          )
        } else {
          return (
            <LoaderThing />
          )
        }
      } else {
        return ( <LoaderThing/> )
      }
    } else {
      return ( <LoaderThing/> )
    }
  }






}

export default EventsPage
