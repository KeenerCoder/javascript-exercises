let findTheOldest = function (people) {
   let oldestPerson = people.reduce((oldest, currentPerson) => {
      console.log(oldest);
      if (getPersonAge(oldest.yearOfBirth, oldest.yearOfDeath) >
         getPersonAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)) {
         return oldest;
      }
      else {
         return currentPerson;
      }

   });
   return oldestPerson;
};

const getPersonAge = function (birthYear, deathYear) {
   if (!deathYear) {
      deathYear = new Date().getFullYear();
   }
   return deathYear - birthYear;
};


// const findTheOldest = function (ppl) {
//    return ppl.reduce((oldest, current) => {
//       if (getAge(oldest.yearOfBirth, oldest.yearOfDeath) > getAge(current.yearOfBirth, current.yearOfDeath)) {
//          return oldest;
//       } else {
//          return current;
//       }
//    });
// };

const getAge = function (birth, death) {
   if (!death) {
      death = new Date().getFullYear();
   }
   return death - birth;
};

module.exports = findTheOldest
