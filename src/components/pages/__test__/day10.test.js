import Runner  from "../day10/helpers/Runner"
import data    from "../day10/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(274)
  expect(runner.compute("2")).toEqual(305)
})
