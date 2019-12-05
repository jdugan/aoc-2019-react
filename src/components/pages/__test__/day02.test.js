import Runner  from "../day02/helpers/Runner"
import data    from "../day02/data/prod"

it("should yield correct answers", () => {
  const runner = new Runner(data)

  expect(runner.compute("1")).toEqual(3516593)
  expect(runner.compute("2")).toEqual(7749)
})
