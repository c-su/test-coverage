import { add } from "./add";

describe("add function", () => {
  it("adds two numbers 5", () => {
    expect(add(1, 2)).toBe(5);
  });
});
