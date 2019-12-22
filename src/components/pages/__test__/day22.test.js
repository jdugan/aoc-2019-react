import Runner  from "../day22/helpers/Runner"
import data    from "../day22/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(2480)
  // expect(runner.compute("2")).toEqual(42178738)
})
