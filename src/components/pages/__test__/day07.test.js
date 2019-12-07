import Runner  from "../day07/helpers/Runner"
import data    from "../day07/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(422858)
  expect(runner.compute("2")).toEqual(14897241)
})
