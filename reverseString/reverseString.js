const reverseString = function (stringToReverse) {

   let reversedString = "";
   let nextCharacter = "";

   for (let i = 0; i < stringToReverse.length; i++) {

      // Get the nextCharacter from the end of the stringToReverse
      nextCharacter = stringToReverse[stringToReverse.length - 1 - i];

      // add the nextCharacter from the end onto the reversedString
      reversedString += nextCharacter;
   }
   return reversedString;
}

module.exports = reverseString
