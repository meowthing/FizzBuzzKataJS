import IFizzBuzzer from "./IFizzBuzzer.ts";

export default class Buzz implements IFizzBuzzer {
  ReturnString(input: number): string {
    if (input % 5 == 0) {
      return "Buzz";
    } else {
      return "";
    }
  }
}
