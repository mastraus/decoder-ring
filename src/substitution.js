// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet = 0, encode = true) {
    //check if alphabet exists, if all characters are unique, and if alphabet length is 26 characters
    if (!alphabet || new Set(alphabet).size != alphabet.length || alphabet.length !== 26) {
      return false;
    }
    newInput = input.toLowerCase();
    let alph = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    //iterate through each character in the input
    for (let i = 0; i < newInput.length; i++) {
      //plug spaces into final string
      if (newInput[i] === " ") {
        result = result + " ";
        //store the index of each variable from the input and replace with the corresponding index from the inputted alphabet param
      } else {
        if (encode === true) {
          let ind = alph.indexOf(newInput.charAt(i));
          result = result + alphabet.charAt(ind);
        }
        if (encode === false) {
          let ind = alphabet.indexOf(newInput.charAt(i));
          result = result + alph.charAt(ind);
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
