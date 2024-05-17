import Main from "./main.ts";
import { jest, test, expect } from "@jest/globals";

const _main = new Main();

test("3 equals Fizz", () => {
  expect(_main.Check(3)).toBe("Fizz");
});
