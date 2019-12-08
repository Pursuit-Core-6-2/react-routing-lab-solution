import React from 'react'

const Donation = (props) => {
  return (
    <li>
      <p>{props.name} Donated ${props.amount}</p>
      <p>{props.caption}</p>
    </li>
  )
}

export default Donation;
