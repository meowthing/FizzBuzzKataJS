import IFizzBuzzer from "./IFizzBuzzer";

export default class Fizz implements IFizzBuzzer {
  ReturnString(input: number): string {
    return "Fizz";
  }
}
