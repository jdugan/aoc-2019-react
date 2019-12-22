import Runner  from "../day15/helpers/Runner"
import data    from "../day15/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(282)
  expect(runner.compute("2")).toEqual(286)
})
