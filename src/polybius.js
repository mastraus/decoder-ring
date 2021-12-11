// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//input is the inputted text to be encoded/decoded
//encode is whether you should encode/decode (set to true by default)
//when ENCODING, output should be string
//when DECODING, input should be even # of chars else return false
//capitals ignored
//I and J share space
//when encode, both are 42
//when decode, both letters should be shown
const polybiusModule = (function () {
  const decodeKey = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };
  const encodeKey = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  function polybius(input, encode = true) {
    let decipherKey = encodeKey;
    let changedString = "";
    //determine which key to use (encode vs decode)
    if (encode === false) {
      decipherKey = decodeKey;
      //decode check to see if chars (not spaces) is even or odd
      let myString = input.replace(/ /g, "");
      let len = myString.length;
      if (len % 2 !== 0) {
        //if chars are odd, return false
        return false;
      }
      for (let i = 0; i < input.length - 1;) {
        //if there's a space, push space into string
        if (input[i] === " ") {
          changedString += " ";
          i ++;
        } else {      
          //check every pair of numbers and push its corresponding letter into string
            let charPairs = input[i] + input[i + 1];
            // console.log(charPairs);
            for (const [key, value] of Object.entries(decipherKey)) {
              if (key === charPairs) {
                changedString += value;
                i += 2;
              }
            }
        }
      }//return string of letters
      return changedString;
    }

    //encode set all to lowercase
    if (encode === true) {
      let newStr = input.toLowerCase();
      //check to see if char or space
      newStr = newStr.split("");
      for (const char of newStr) {
        //if space, leave space and push into string
        if (char === " ") {
          changedString += char;
          //if char, find it's matching # pair in the encodekey and then push into string
        } else {
          for (const [key, value] of Object.entries(decipherKey)) {
            if (key === char) {
              changedString += value;
            }
          }
        }
        //return string of #s
      }
      return changedString;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
