import Runner  from "../day20/helpers/Runner"
import data    from "../day20/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(510)
  // expect(runner.compute("2")).toEqual(42178738)
})
