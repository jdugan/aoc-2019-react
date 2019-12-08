import Runner  from "../day08/helpers/Runner"
import data    from "../day08/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(2480)
  expect(runner.compute("2")).toEqual("see console") // ZYBLH
})
