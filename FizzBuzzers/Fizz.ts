import IFizzBuzzer from "./IFizzBuzzer.ts";

export default class Fizz implements IFizzBuzzer {
  ReturnString(input: number): string {
    return "Fizz";
  }
}
