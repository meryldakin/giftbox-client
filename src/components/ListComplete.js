import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

import LoaderThing from './LoaderThing'

export default class ListComplete extends React.Component {

  render(){
    console.log("list complete component", this.props)
    if(this.props){
      if (this.props.completedList === true){
        // this.props.handleCompletedList(true, this.props.event_id)
        return (
          <div><Header as="h4">List complete!</Header></div>
        )
      } else {
        // this.props.handleCompletedList(false, this.props.event_id)
        return(
          <div><Header as="h4">Add purchased gifts to your friends to complete this list</Header></div>
        )
      }

    } else {
      return (<LoaderThing />)
    }
  }
}
