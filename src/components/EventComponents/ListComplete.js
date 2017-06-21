import React from 'react'
import LoaderThing from '../LoaderThing'
import giftboxSurprise from '../../images/giftboxSurprise.png'
import box from '../../images/box.png'

export default class ListComplete extends React.Component {

  render(){
    console.log("list complete component", this.props)
    if(this.props){
      if (this.props.completedList === true){
        // this.props.handleCompletedList(true, this.props.event_id)
        return (
          <div className="animated bounceIn"><img src={giftboxSurprise}/></div>
        )
      } else {
        // this.props.handleCompletedList(false, this.props.event_id)
        return(
          <div className="animated flipInX"><img src={box}/></div>
        )
      }

    } else {
      return (<LoaderThing />)
    }
  }
}
