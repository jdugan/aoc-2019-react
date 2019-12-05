import Runner  from "../day03/helpers/Runner"
import data    from "../day03/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(651)
  expect(runner.compute("2")).toEqual(7534)
})
