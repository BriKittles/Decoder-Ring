// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift < -25 || shift > 25 || shift === 0 || shift === undefined){
      return false;
    } 
    let results = "";
    if (encode === false){
      shift = shift * -1;
    }
    for (let i = 0; i < input.length; i++){
      const letter = input[i].toLowerCase();
      
      if(alphabet.includes(letter)){
        const letterIndex = alphabet.indexOf(letter);
        let indexShifted = letterIndex + shift;
      
      if (indexShifted > 25){
        indexShifted += -26;
      }
      if (indexShifted < 0 && indexShifted > -25){
        indexShifted += 26;
      }
      const letterShifted = alphabet[indexShifted];
      results += letterShifted;
    } else {
      results += letter
    }
  }
  return results;
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };


