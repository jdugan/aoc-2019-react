import React from 'react';
import Day1 from '../pages/day01/Description'
import Day2 from '../pages/day02/Description'
import Day3 from '../pages/day03/Description'
import Day4 from '../pages/day04/Description'
import Day5 from '../pages/day05/Description'
import Day6 from '../pages/day06/Description'
import Day7 from '../pages/day07/Description'
import Day8 from '../pages/day08/Description'
import Day9 from '../pages/day09/Description'
import Day10 from '../pages/day10/Description'
import Day11 from '../pages/day11/Description'
import Default from '../pages/base/Description'

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
}

const Description = (props) => {
  const { day } = props
  const DayDescription = componentMap[day] || Default

  return (
    <DayDescription />
  )
}

export default Description;
