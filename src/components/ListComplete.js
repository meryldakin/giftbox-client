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
          <div>{this.props.name} <Icon name="check"/></div>
        )
      } else {
        // this.props.handleCompletedList(false, this.props.event_id)
        return(
          <div>{this.props.name} <Icon name="square outline"/></div>
        )
      }

    } else {
      return (<LoaderThing />)
    }
  }
}
