import Runner  from "../day24/helpers/Runner"
import data    from "../day24/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(3186366)
  // expect(runner.compute("2")).toEqual(42178738)
})
