import Runner  from "../day01/helpers/Runner"
import data    from "../day01/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(3282386)
  expect(runner.compute("2")).toEqual(4920708)
})
