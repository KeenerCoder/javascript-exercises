const palindromes = function (letters) {

   let original = stripNonLetters(letters.toLowerCase());
   let reverse = "";
   for (let i = original.length - 1; i >= 0; i--) {
      if (original.charCodeAt(i) >= 97 && original.charCodeAt(i) <= 122)
         reverse += original[i];
   }

   return reverse === original;
}
function stripNonLetters(string) {
   let lettersOnlyString = "";

   for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122)
         lettersOnlyString += string[i];
   }
   return lettersOnlyString;
}

module.exports = palindromes
