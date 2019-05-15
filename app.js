//constructor

class Person{
  constructor(birthday, yearBorn) {
    this.birthday = birthday;
    this.yearBorn = yearBorn;
  }
}

Person.prototype.getSummary = function() {
  return `${this.birthday} is your birthday`;
};

let cindy = new Person('05-13','1994');
console.log(cindy.getSummary());

// function sayHappyBirthday(){
//   let q = new Date();
//   let month = q.getMonth();
//   let day = q.getDay();
//   let year = q.getFullYear();
//   let
//
//   let date = new Date(month, day);
//   if( date == Person){}
// }
