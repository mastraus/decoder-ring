const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("returns false if alphabet is not 26 characters long", () => {
    const input = "hello"
    const alphabet = "abcde"
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false
  });
  it("correctly translates the input based on given alphabet", () => {
    const input = "abc"
    const alphabet = "*!%abdcefghijklmnopqrstuvw"
    const actual = substitution(input, alphabet);
    const expected = "*!%"
    expect(actual).to.equal(expected);
  });
  it("returns false if alphabet contains any duplicate characters", () => {
    const input = "hello"
    const alphabet = "aabcdefghijklmnopqrstuvwxy"
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false
  });
  it("maintains spaces when encoding", () => {
    const input = "a b c"
    const alphabet = "*!%abdcefghijklmnopqrstuvw"
    const actual = substitution(input, alphabet);
    const expected = "* ! %"
    expect(actual).to.equal(expected);
  });
  it("maintains spaces when decoding", () => {
    const input = "* ! %"
    const alphabet = "*!%abdcefghijklmnopqrstuvw"
    const actual = substitution(input, alphabet, encode=false);
    const expected = "a b c"
    expect(actual).to.equal(expected);
  });
  it("ignores capital letters", () => {
    const input = "DEF"
    const alphabet = "*!%abdcefghijklmnopqrstuvw"
    const actual = substitution(input, alphabet);
    const expected = "abd"
    expect(actual).to.equal(expected);
  });
});