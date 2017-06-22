import React from 'react'
import LoaderThing from '../LoaderThing'
import giftboxSurprise from '../../images/giftboxSurprise.png'
import box from '../../images/box.png'

export default class ListComplete extends React.Component {

  render(){
    if(this.props){
      if (this.props.completedList === true){
        return (
          <div className="animated bounceIn"><img src={giftboxSurprise}/></div>
        )
      } else {
        return(
          <div className="animated flipInX"><img src={box}/></div>
        )
      }

    } else {
      return (<LoaderThing />)
    }
  }
}
