import React from 'react';

const Star = (props) => {
  const { level = 0 } = props
  const modifier = ["none", "first", "both"][level]

  return (
    <span className={ "star star--" + modifier }>*</span>
  )
}

export default Star;
