const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should return false if shift amount is 0", () => {
    const input = "abc"
    const shift = 0;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
  it("should return false if shift amount is above 25", () => {
    const input = "abc"
    const shift = 27;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
  it("should return false if shift amount is less than -25", () => {
    const input = "abc"
    const shift = -26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
  it("should return false if shift is not present", () => {
    const input = "abc"
    const actual = caesar(input);
    expect(actual).to.be.false;
  });
  it("should ignore capital letters", () => {
    const input = "ABC"
    const shift = 1;
    const actual = caesar(input, shift);
    const expected = "bcd"
    expect(actual).to.equal(expected);
  });
  it("should reach around the alphabet when reaching z", () => {
    const input = "xyz"
    const shift = 1;
    const actual = caesar(input, shift);
    const expected = "yza"
    expect(actual).to.equal(expected);
  });
  it("maintains spaces and other nonalphabetic symbols", () => {
    const input = "a bc"
    const shift = 1;
    const actual = caesar(input, shift);
    const expected = "b cd"
    expect(actual).to.equal(expected);
  });
});
