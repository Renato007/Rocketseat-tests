import { sum } from "./server";

describe("sum", () => {
  let sumResult: number;
  beforeAll(() => {
    sumResult = 10;
  });
  it("should do sum of 3 + 7 must be 10 ", () => {
    const result = sum(3, 7);
    expect(result).toBe(10);
  });

  test("teste se o valor é par", () => {
    const result = sum(3, 7) % 2 === 0;

    expect(result).toBe(true);
  });
});
