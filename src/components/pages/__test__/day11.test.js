import Runner  from "../day11/helpers/Runner"
import data    from "../day11/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(2478)
  expect(runner.compute("2")).toEqual("see console")
})
