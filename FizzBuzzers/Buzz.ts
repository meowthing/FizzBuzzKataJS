import IFizzBuzzer from "./IFizzBuzzer";

export default class Buzz implements IFizzBuzzer {
  ReturnString(input: number): string {
    return "Buzz";
  }
}
