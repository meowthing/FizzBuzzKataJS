import Main from "./main.ts";

const _main = new Main();

test("3 equals Fizz", () => {
  expect(_main.Check(3)).toBe("Fizz");
});

test("5 equals Buzz", () => {
  expect(_main.Check(5)).toBe("Buzz");
});

test("15 equals FizzBuzz", () => {
  expect(_main.Check(15)).toBe("FizzBuzz");
});

