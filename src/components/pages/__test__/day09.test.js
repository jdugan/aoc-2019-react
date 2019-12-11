import Runner  from "../day09/helpers/Runner"
import data    from "../day09/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(4080871669)
  expect(runner.compute("2")).toEqual(75202)
})
