const repeatString = function (stringToRepeat, numberOfTimes) {

   if (numberOfTimes < 0) return "ERROR";

   let repeatedString = "";

   for (let i = 0; i < numberOfTimes; i++) {

      repeatedString += stringToRepeat;

   }
   return repeatedString;
}

module.exports = repeatString
