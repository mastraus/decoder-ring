// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


//false if shift amount is 0. above 25, or less than -25
//ignore capitals
//handle letters at end of alphabet or less than ASCII key

//if decoding, do the opposite of the shift to shift backwards and return result

//need to make all letters lowercase, split all the letters, then convert letters to their ASCII
const caesarModule = (function () {
  
  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift > 25 || shift < -25 || !shift) return false;
    if (encode === false) shift *= -1;
    let newInput = input.toLowerCase().split('');
    let ascii = newInput.map((letter) => letter.charCodeAt());
    let indAscii = ascii.map((numb) => {
      if (numb > 96 && numb < 123) {
        let newNumb = numb + shift;
        if (newNumb < 97) {newNumb += 26;}
        if (newNumb > 122) {newNumb = (newNumb % 122) + 96;}
        return newNumb;   
      } return numb;
    })
    let final = indAscii.map((eachNum) => String.fromCharCode(eachNum));
    return final = final.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
