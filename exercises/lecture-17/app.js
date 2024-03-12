//2

//&& - логічне множення, || - логічне додавання ?? - нульовий оператор об`єднання 

let x = 3;
let y = 4;
let z = 5;

x ||= y; // x = 3
x || (y = z); // x = 3
x &&= y; // x = 4
x && (y = z); // x = 4, y = 5 
x ??= y; // x = 4
x ?? (y = z); // x = 4, y = 5

//3 - guess the number 3

let numb = prompt("Type the number from 1 to 20");

if (numb == 3) {
   alert("Congratulations, You did it!");
} else if (numb > 3) {
  alert("The number is too long");
} else if (numb < 3) {
    alert("The number is too short");
} else {
   alert("Try again");
}

//4 - day of the week

let day = prompt("Type day of the week");

switch (day) {
    case "Monday":
    case "Понеділок":
        alert("Start of the work week!");
        break;
     case "Friday":
     case "П´ятниця":
         alert("End of the work week!");
        break;
    default:
       alert("A regular day");
}


//5 - exam grades

let score = prompt("Type your score");
let grade;

if (score < 50) {
    grade = alert("You have F!");
} else if (score < 70) {
    grade = alert("You have D!");
} else if (score < 80) {
    grade = alert("You have C!");
} else if (score < 90) {
    grade = alert("You have B!");
} else {
    grade = alert("You have A!");
}


// Тернарний оператор
// let score = 100;

// const grade = score < 50 ? "F" : 
//               score < 70 ? "D" : 
//               score < 80 ? "C" : 
//               score < 90 ? "B" : 
//               "A";
// console.log("Your grade", grade);

// 6 - fix the bugs

let firstName = null;
let lastName = undefined;
let username = firstName ?? lastName ?? "Guest";

console.log(username); // "Guest"






