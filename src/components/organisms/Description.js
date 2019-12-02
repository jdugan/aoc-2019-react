import React from 'react';
import Day1 from '../pages/day01/Description'
import Default from '../pages/base/Description'

const componentMap = {
  "1": Day1,
}

const Description = (props) => {
  const { day } = props
  const DayDescription = componentMap[day] || Default

  return (
    <DayDescription />
  )
}

export default Description;
