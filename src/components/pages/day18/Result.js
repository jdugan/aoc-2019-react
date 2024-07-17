import React         from "react";
import Runner        from "./helpers/Runner"
import part1ProdData from "./data/puzzle1Prod"
import part1TestData from "./data/puzzle1Test"
import part2ProdData from "./data/puzzle2Prod"
import part2TestData from "./data/puzzle2Test"

const Result = (props) => {
  const { env, part } = props
  let   data
  if (env === 'test') {
    data = (part === "1") ? part1TestData : part2TestData
  } else {
    data = (part === "1") ? part1ProdData : part2ProdData
  }
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
