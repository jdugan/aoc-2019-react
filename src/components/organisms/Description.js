import React from 'react';
import Day1 from '../pages/day01/Description'
import Default from '../pages/base/Description'

const Description = (props) => {
  const { selectedDay } = props
  const componentMap = {
    "1": Day1,
  }
  const DayDescription = componentMap[selectedDay] || Default

  return (
    <DayDescription />
  )
}

export default Description;
