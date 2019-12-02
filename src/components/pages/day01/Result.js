import React from 'react';
import Calculator from './helpers/Calculator'
import prodData from './data/prod'
import testData from './data/test'

const Result = (props) => {
  const { env, part } = props
  const data = (env === 'test') ? testData : prodData
  const calc = new Calculator(data)
  const answer = calc.compute(part)

  return (
    <section className="result">
      <p>
        The puzzle answer is <strong className="green">{ answer }</strong>.
      </p>
    </section>
  )
}

export default Result;
