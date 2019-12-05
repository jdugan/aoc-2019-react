import React from 'react';
import Day1 from '../pages/day01/Result'
import Day2 from '../pages/day02/Result'
import Day3 from '../pages/day03/Result'
import Day4 from '../pages/day04/Result'
import Day5 from '../pages/day05/Result'
import Default from '../pages/base/Result'

const componentMap = {
  "1": Day1,
  "2": Day2,
  "3": Day3,
  "4": Day4,
  "5": Day5,
}

const Result = (props) => {
  const { day, env, part } = props
  const DayResult = componentMap[day] || Default

  return (
    <>
      <h3>--- Result ---</h3>
      <DayResult env={ env } part={ part } />
    </>
  )
}

export default Result;
