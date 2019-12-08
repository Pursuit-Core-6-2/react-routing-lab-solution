import React from 'react';

const Progress = (props) => {
  return (
    <div className='progress section'>
      <h6>Progress</h6>
      <p>${props.raisedAmount} from ${props.goalAmount}</p>
    </div>
  )
}

export default Progress;
