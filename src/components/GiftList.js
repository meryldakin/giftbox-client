import React from 'react'
// import { Link } from 'react-router-dom'


export default function GiftList(props){
  const gifts = props.gifts.map( (gift, i) => <li key={i}>{gift.item}</li> )
  return (
    <div className="scrollable">

      <ul>
        {gifts}
      </ul>

    </div>
  )
}
