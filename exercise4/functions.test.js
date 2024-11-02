import {
  getNthFibonacciNumber,
  isPalindrome,
  whatTypeIsIt,
  amountToCoins,
} from "./functions";

describe("Funkcja getFibonacciNumber", () => {
  test("powinna zwrócić 0 gdy chcemy zobaczyć 1-szą liczbę z ciągu", () => {
    expect(getNthFibonacciNumber(1)).toBe(0);
  });

  test("powinna zwrócić 1 gdy chcemy zobaczyć 2-gą liczbę z ciągu", () => {
    expect(getNthFibonacciNumber(2)).toBe(1);
  });

  test("powinna zwrócić 1 gdy chcemy zobaczyć 3-cią liczbę z ciągu", () => {
    expect(getNthFibonacciNumber(3)).toBe(1);
  });

  test("powinna zwrócić 144 gdy chcemy zobaczyć 13-tą liczbę z ciągu", () => {
    expect(getNthFibonacciNumber(13)).toBe(144);
  });
});

describe("Funkcja isPalindrome", () => {
  test("powinna zwrócić true dla 'kajak'", () => {
    expect(isPalindrome("kajak")).toBe(true);
  });

  test("powinna zwrócić false dla 'kajaki'", () => {
    expect(isPalindrome("kajaki")).toBe(false);
  });

  test("powinna zwrócić true dla 'a'", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  test("powinna zwrócić true dla ''", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("powinna zwrócić true dla 'zooooz'", () => {
    expect(isPalindrome("abba")).toBe(true);
  });

  test("powinna zwrócić false dla 'zoo'", () => {
    expect(isPalindrome("abb")).toBe(false);
  });
});

describe("Funkcja whatTypeIsIt", () => {
  test("powinna zwrócić number dla 4", () => {
    expect(whatTypeIsIt(4)).toBe("number");
  });

  test("powinna zwrócić string dla '4'", () => {
    expect(whatTypeIsIt("4")).toBe("string");
  });

  test("powinna zwrócić boolean dla true", () => {
    expect(whatTypeIsIt(true)).toBe("boolean");
  });

  test("powinna zwrócić function dla () => {}", () => {
    expect(whatTypeIsIt(() => {})).toBe("function");
  });

  test("powinna zwrócić object dla {}", () => {
    expect(whatTypeIsIt({})).toBe("object");
  });

  test("powinna zwrócić undefined dla undefined", () => {
    expect(whatTypeIsIt(undefined)).toBe("undefined");
  });

  test("powinna zwrócić null dla null", () => {
    expect(whatTypeIsIt(null)).toBe("null");
  });

  test("powinna zwrócić symbol dla Symbol()", () => {
    expect(whatTypeIsIt(Symbol())).toBe("symbol");
  });

  test("powinna zwrócić bigint dla BigInt(314)", () => {
    expect(whatTypeIsIt(BigInt(314))).toBe("bigint");
  });
});

describe("Funkcja amountToCoins", () => {
  test("powinna zwrócić [25, 10, 10, 1] dla 46, [25,10,5,2,1]", () => {
    expect(amountToCoins(46, [25, 10, 5, 2, 1])).toEqual([25, 10, 10, 1]);
  });

  test("powinna zwrócić [5, 5] dla 10 i [5]", () => {
    expect(amountToCoins(10, [5])).toEqual([5, 5]);
  });

  test("powinna zwrócić [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] dla 10 i [1]", () => {
    expect(amountToCoins(10, [1])).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  });
});
