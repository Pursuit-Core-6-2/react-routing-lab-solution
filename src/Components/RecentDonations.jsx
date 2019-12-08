import React from 'react';
import Donation from './Donation';

// Parse array, display each donations
// Create list items (li)

const RecentDonations = (props) => {
  const donationsList = props.donations.map(donationObj => {
    return (
      <Donation
        name={donationObj.name}
        caption={donationObj.caption}
        amount={donationObj.amount}
      />
    )
  })

  return (
    <div className='recent-donations section'>
      <h6>Recent Donations</h6>
      <ul>{donationsList}</ul>
    </div>
  )
}

export default RecentDonations;
