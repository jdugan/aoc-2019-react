import React    from 'react';
import Day1     from '../pages/day01/Result'
import Day2     from '../pages/day02/Result'
import Day3     from '../pages/day03/Result'
import Day4     from '../pages/day04/Result'
import Day5     from '../pages/day05/Result'
import Day6     from '../pages/day06/Result'
import Day7     from '../pages/day07/Result'
import Day8     from '../pages/day08/Result'
import Day9     from '../pages/day09/Result'
import Day10    from '../pages/day10/Result'
import Day11    from '../pages/day11/Result'
import Day12    from '../pages/day12/Result'
import Day13    from '../pages/day13/Result'
import Default  from '../pages/base/Result'

const componentMap = {
  "1": Day1,
  "2": Day2,
  "3": Day3,
  "4": Day4,
  "5": Day5,
  "6": Day6,
  "7": Day7,
  "8": Day8,
  "9": Day9,
  "10": Day10,
  "11": Day11,
  "12": Day12,
  "13": Day13,
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
