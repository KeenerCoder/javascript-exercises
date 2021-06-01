const fibonacci = function (position) {
   if (position < 0) {
      return "OOPS";
   }
   let result = 0;
   let fibonacciArray = [0, 1];
   for (let i = 0; i <= position; i++) {

      if (i === 0 || i === 1) {
         result = fibonacciArray[i];
      }
      else {
         result = fibonacciArray[i - 2] + fibonacciArray[i - 1];
         fibonacciArray[i] = result;
      }
   }
   return result;

}

module.exports = fibonacci
