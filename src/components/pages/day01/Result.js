import React    from 'react';
import Runner   from './helpers/Runner'
import prodData from './data/prod'
import testData from './data/test'

const Result = (props) => {
  const { env, part } = props
  const data   = (env === 'test') ? testData : prodData
  const runner = new Runner(data)
  const answer = runner.compute(part)

  return (
    <section className="result">
      <p>
        The puzzle answer is <strong className="green">{ answer }</strong>.
      </p>
    </section>
  )
}

export default Result;
