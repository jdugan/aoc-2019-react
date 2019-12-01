import React from 'react';
import Star from '../atoms/Star'

const Status = (props) => {
  return (
    <div className="status">
      <span className="status__label">{ props.count }</span>
      <Star level="2" />
    </div>
  )
}

export default Status;
