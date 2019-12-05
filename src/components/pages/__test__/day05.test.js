import Runner  from "../day05/helpers/Runner"
import data    from "../day05/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(2845163)
  expect(runner.compute("2")).toEqual(9436229)
})
