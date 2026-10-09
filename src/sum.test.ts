import { sum } from "./server";

describe("sum", () => {
  let sumResult: number;
  beforeAll(() => {
    sumResult = 10;
    console.log("Executado antes dos teste", sumResult);
  });

  afterAll(() => {
    sumResult = 0;
    console.log("Executado depois dos teste", sumResult);
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
