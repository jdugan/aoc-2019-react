import Runner  from "../day14/helpers/Runner"
import data    from "../day14/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(97422)
  // expect(runner.compute("2")).toEqual(13108426)  <== correct, but takes ~20mins <grimacing>
})
