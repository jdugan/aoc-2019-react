import React     from "react";
import Runner    from "./helpers/Runner"
import prodData  from "./data/prod"
import testData1 from "./data/test1"
import testData2 from "./data/test2"

const Result = (props) => {
  const { env, part } = props
  const data   = (env === "test") ? (part === "1") ? testData1 : testData2 : prodData
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
