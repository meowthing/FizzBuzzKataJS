import Buzz from "./FizzBuzzers/Buzz.ts";
import Fizz from "./FizzBuzzers/Fizz.ts";
import IFizzBuzzer from "./FizzBuzzers/IFizzBuzzer.ts";

export default class Main {
  fizzBuzzers: IFizzBuzzer[];

  constructor() {
    this.fizzBuzzers = [new Fizz(), new Buzz()];
  }

  Check = (input: number): string => {
    this.fizzBuzzers.forEach((validator) => {
      validator.ReturnString(input);
    });

    let resultsString = this.fizzBuzzers
      .map((validator) => validator.ReturnString(input))
      .join('');

    return resultsString.length > 0 ? resultsString : input.toString();
  };
}

const main = new Main();
main.Check(1);
