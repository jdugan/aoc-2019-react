import Runner  from "../day06/helpers/Runner"
import data    from "../day06/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(254447)
  expect(runner.compute("2")).toEqual(445)
})
