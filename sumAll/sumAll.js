const sumAll = function (integer1, integer2) {

   // get any errors dealt with

   if (integer1 < 0 || integer2 < 0) {
      return "ERROR";
   }

   // if (isNaN(integer1) || isNaN(integer2)) {
   //    return "ERROR";
   // }

   if (typeof (integer1) != "number" || typeof (integer2) != "number") {
      return "ERROR";
   }
   // No errors then we can safely proceed

   let totalSum = 0;
   let startingInteger = integer1;
   let endingInteger = integer2;

   if (integer1 > integer2) {
      startingInteger = integer2;
      endingInteger = integer1;
   }
   for (let i = startingInteger; i <= endingInteger; i++) {

      totalSum += i;
   }
   return totalSum;

}

module.exports = sumAll
