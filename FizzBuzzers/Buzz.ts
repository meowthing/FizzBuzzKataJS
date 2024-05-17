import IFizzBuzzer from "./IFizzBuzzer.ts";

export default class Buzz implements IFizzBuzzer {
  ReturnString(input: number): string {
    return "Buzz";
  }
}
