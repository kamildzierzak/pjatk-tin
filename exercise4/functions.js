// https://en.wikipedia.org/wiki/Fibonacci_sequence
function getNthFibonacciNumber(nth) {
  if (nth === 1) {
    return 0;
  }

  if (nth === 2) {
    return 1;
  }

  let currentNumber = 1;
  let previousNumber = 1;

  for (let i = 3; i < nth; i++) {
    let holdIt = currentNumber;
    currentNumber += previousNumber;
    previousNumber = holdIt;
  }

  return currentNumber;
}

// https://en.wikipedia.org/wiki/Palindrome
function isPalindrome(text) {
  let reversedText = text.split("").reverse().join("");
  return text === reversedText;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
function whatTypeIsIt(value) {
  if (value === null) {
    return "null";
  }

  return typeof value;
}

function amountToCoins(amount, coins) {
  let result = [];
  let sum = 0;

  for (let i = 0; i < coins.length; i++) {
    while (sum + coins[i] <= amount) {
      result.push(coins[i]);
      sum += coins[i];
    }
  }

  return result;
}

export { getNthFibonacciNumber, isPalindrome, whatTypeIsIt, amountToCoins };
