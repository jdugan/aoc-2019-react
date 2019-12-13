import Runner  from "../day12/helpers/Runner"
import data    from "../day12/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(8287)
  // expect(runner.compute("2")).toEqual("see console")
})
