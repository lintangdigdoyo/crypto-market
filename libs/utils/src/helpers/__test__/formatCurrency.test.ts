import formatCurrency from "../formatCurrency";

describe("formatCurrency function", () => {
  it("should return correct currency format", () => {
    expect(formatCurrency(10000)).toBe("Rp 10.000");
    expect(formatCurrency(100000)).toBe("Rp 100.000");
    expect(formatCurrency(1000)).toBe("Rp 1.000");
    expect(formatCurrency(0)).toBe("Rp 0");
  });
});
