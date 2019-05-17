//constructor

// class Person{
//   constructor(birthday, yearBorn) {
//     this.birthday = birthday;
//     this.yearBorn = yearBorn;
//   }
// }
//
// Person.prototype.getSummary = function() {
//   return `${this.birthday} is your birthday`;
// };
//
// let cindy = new Person('05-13','1994');
//
// const getBirthday = () => {
//   let userBirthday = prompt('When is your birthday?');
//   return userBirthday;
// };
// getBirthday();
//
// console.log(cindy.getSummary());

//
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

let month  = [];
let day   = [];
let year = [];

let monthInput  = document.getElementById("month");
let dayInput   = document.getElementById("day");
let yearInput = document.getElementById("year");

let messageBox  = document.getElementById("display");

function insert ( ) {
 month.push( monthInput.value );
 day.push( dayInput.value );
 year.push( yearInput.value );

 clearAndShow();
}

function clearAndShow () {
  // Clear our fields
  monthInput.value = "";
  dayInput.value = "";
  yearInput.value = "";

  // Show our output
  messageBox.innerHTML = "";

  // let q = new Date();
  // let m = q.getMonth();
  // let d = q.getDay();
  // let date = new Date(m, d);

  var d = new Date();
  if (
    Number(document.getElementById("month").value) === (d.getMonth() + 1) &&
    Number(document.getElementById("day").value) === d.getDate()
  ) {
    messageBox.innerHTML = `Happy Birthday!`;
  } else {
    messageBox.innerHTML += `Your birthday is ${month}/${day}`;
  }
}
