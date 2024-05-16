import Buzz from "./FizzBuzzers/Buzz";
import Fizz from "./FizzBuzzers/Fizz";
import IFizzBuzzer from "./FizzBuzzers/IFizzBuzzer";

export default class Main {
  fizzBuzzers: IFizzBuzzer[];

  constructor() {
    this.fizzBuzzers = [new Buzz(), new Fizz()];
  }

  Check = (): string => {
    this.fizzBuzzers.forEach((validator) => {
      validator.ReturnString(1);
    });
    return "";
  };
}

const main = new Main();
main.Check();
