import React from 'react';

const DonationForm = () => {
  return (
    <div className='donation-form section'>
      <form>
        <label htmlFor='name'>Name: </label>
        <input id='name' name='name' type='text' />

        <label htmlFor='caption'>Caption: </label>
        <input id='caption' name='caption' type='text' />

        <label htmlFor='amount'>Amount: </label>
        <input
          id='amount'
          name='amount'
          type='range'
          min="0"
          max="1000"
        />

      </form>
    </div>
  )
}

export default DonationForm;
