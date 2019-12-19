import Runner  from "../day13/helpers/Runner"
import data    from "../day13/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(260)
  expect(runner.compute("2")).toEqual(12952)
})
