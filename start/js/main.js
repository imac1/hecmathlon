class HECMAthlon {

  static getMaxValue(input) {
        return input.split(",").reduce((first, second) => first > second ? first : second);
    }

   static getGreaterThan (input) {
        return [1,2,3,4,5,6,7,8,9,10].filter(val => val > parseInt(input));
    }

    static fizzBuzz (input) {
     return [...Array(parseInt(input) + 1).keys()].map(number => {
        if (number % 5 === 0 && number % 3 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return number;
     })
    }
}
export default HECMAthlon;