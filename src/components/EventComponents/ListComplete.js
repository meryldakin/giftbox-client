import React from 'react'
import LoaderThing from '../LoaderThing'
import giftboxSurprise from '../../images/giftboxSurprise.png'
import box from '../../images/box.png'

export default class ListComplete extends React.Component {

  render(){
    if(this.props){
        let exchanges = this.props.celebrations.map( c => c.exchanges )
        let exchangeCompletedArray = exchanges.map( exs => {
          return exs.length > 0 ? exs.map( ex => {
            return ex.completed === false ? false : true  } )
            : false } ).reduce( (cum, curr) => {
              return cum.concat(curr)
            }, [])
        let completedList = exchangeCompletedArray.includes(false) || exchangeCompletedArray.length === 0 ? false : true

      if (completedList === true){
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
