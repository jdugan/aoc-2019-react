import Runner  from "../day19/helpers/Runner"
import data    from "../day19/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(173)
  // expect(runner.compute("2")).toEqual(42178738)
})
