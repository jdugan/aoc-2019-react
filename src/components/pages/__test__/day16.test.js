import Runner  from "../day16/helpers/Runner"
import data    from "../day16/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(67481260)
  expect(runner.compute("2")).toEqual(42178738)
})
