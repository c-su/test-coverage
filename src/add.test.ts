import { add } from "./add";

describe("add function", () => {
  it("adds two numbers 1", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("adds two numbers 2", () => {
    expect(add(1, 2)).toBe(5);
  });
});
