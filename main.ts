import Buzz from "./FizzBuzzers/Buzz.ts";
import Fizz from "./FizzBuzzers/Fizz.ts";
import IFizzBuzzer from "./FizzBuzzers/IFizzBuzzer.ts";

export default class Main {
  fizzBuzzers: IFizzBuzzer[];

  constructor() {
    this.fizzBuzzers = [new Buzz(), new Fizz()];
  }

  Check = (num: number): string => {
    this.fizzBuzzers.forEach((validator) => {
      validator.ReturnString(num);
    });
    return "";
  };
}

const main = new Main();
main.Check(1);
