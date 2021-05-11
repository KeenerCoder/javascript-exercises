const removeFromArray = function (array, ...remove) {


   let list = Array.prototype.slice.call(array);

   for (let i = 0; i < remove.length; i++) {
      let indexOfItemToRemove = list.indexOf(remove[i]);
      if (indexOfItemToRemove > -1) {
         list.splice(indexOfItemToRemove, 1);
      }
   }
   return list;
}

module.exports = removeFromArray
