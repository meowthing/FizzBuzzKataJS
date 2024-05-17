import IFizzBuzzer from "./IFizzBuzzer.ts";

export default class Fizz implements IFizzBuzzer {
  ReturnString(input: number): string {
    if (input % 3 == 0) {
      return "Fizz";
    } else {
      return "";
    }
  }
}
