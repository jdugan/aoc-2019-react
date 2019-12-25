import Runner  from "../day17/helpers/Runner"
import data    from "../day17/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(7720)
  expect(runner.compute("2")).toEqual(1681189)
})
