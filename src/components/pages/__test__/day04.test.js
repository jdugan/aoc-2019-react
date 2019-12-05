import Runner  from "../day04/helpers/Runner"
import data    from "../day04/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(1665)
  expect(runner.compute("2")).toEqual(1131)
})
