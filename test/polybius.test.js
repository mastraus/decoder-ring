const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("translates i and j to 42 when encoding", () => {
    const input = "ij"
    const actual = polybius(input);
    const expected = "4242"
    expect(actual).to.equal(expected);
  });
  it("translates 42 to (i/j) when decoding", () => {
    const input = "42"
    const actual = polybius(input, encode=false);
    const expected = "(i/j)"
    expect(actual).to.equal(expected);
  });
  it("ignores capital letters", () => {
    const input = "Abc"
    const actual = polybius(input);
    const expected = "112131"
    expect(actual).to.equal(expected);
  });
  it("maintains spaces when encoding", () => {
    const input = "a bc"
    const actual = polybius(input);
    const expected = "11 2131"
    expect(actual).to.equal(expected);
  });
  it("maintains spaces when decoding", () => {
    const input = "1121 31"
    const actual = polybius(input, encode=false);
    const expected = "ab c"
    expect(actual).to.equal(expected);
  });
});