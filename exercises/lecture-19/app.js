//1

let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

console.log(str1.length); //13
console.log(str2.length); //13

console.log(str1 == str2); //true
console.log(str1 === str2); //true


//2

let string5 = 'Hello World';

let c = string5[0];
console.log(c); //H

let d = string5.charAt(0);
console.log(d); //H


//3-5

let str3 = "Hello Javascript";

console.log(str3[6]); //J

console.log(str3[str3.length -1]); //t
console.log(str3.charAt(str3.length -1)); //t

function lastChar1(str3) {
    return str3.charAt(str3.length -1);
}
console.log(lastChar1(str3)); //t

function lastChar2(str3) {
    return str3.slice(-1);
}
console.log(lastChar2(str3)); //t

function lastChar3(str3) {
    return str3[str3.length -1];
}
console.log(lastChar3(str3)); //t

//6

let a = 'When candles are out,';
let b = a.concat (' all cats are grey.');
console.log(b); // 'When candles are out, all cats are grey.'


//7

// let e = 5;
// let f = 10;

var fact = "Fifteen is the same as " + (5 + 10);

console.log(fact);



//8
let firstName = "Tom";
let lastName = "Cat";

function getFullName (firstName, lastName) {
    return firstName + " " + lastName;
}


//9
function greeting(firstName, lastName) {
    return "Hello, " + getFullName(firstName, lastName) + "!";
}

console.log(greeting(firstName, lastName));


//10
let template = "<div><h1>" + "Hello, " + greeting(firstName, lastName) + "!" + "</h1></div>";
console.log(template); 


//11

let string1 = "  The name of our game  ";

console.log(string1.trim()); // "The name of our game"
console.log(string1.trimStart()); // "The name of our game  "
console.log(string1.trimEnd()); // "  The name of our game"

const phoneNumber = '\t  555-123\n ';

phoneNumber.trim();
console.log(phoneNumber.trim()); // '555-123'

phoneNumber.trimStart();
console.log(phoneNumber.trimStart()); // '555-123 \n'


//12

let sentence = 'Always look on the bright side of life';

console.log(sentence.includes('look up')); //false
console.log(sentence.includes('look on')); //true
console.log(sentence.includes('look on', 8)); //false


//13 

console.log(sentence.indexOf('l')); //1
console.log(sentence.indexOf('l', 3)); //7
console.log(sentence.indexOf('L')); //-1


//14

console.log(sentence.substring(7)); // look on the bright side of life
console.log(sentence.substring(0, 6)); // Always
console.log(sentence.substring(7, 11)); // look


//15
const user = /^[a-z0-9_]{8,16}$/;

function validate(username) {
    const user = /^[a-z0-9_]{8,16}$/;

    let matched = username.match(user);
    if (user.test(username)) {
        console.log("Username is valid", matched);
        return true;

    } else {
        console.log("Username isn´t valid", matched);
        return false;
    }
}

validate("katia22");


//16
const login = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/; 

function valid(email) {
    const login = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/; 

    let checked = email.match(login);
    if (login.test(email)) {
        console.log("Login is valid", checked);
        return true;
    } else {
        console.log("Login is not valid", checked);
        return false;
    }
}

valid('email@email.com');

//17

let sentence2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

function truncateText(sentence2) {
    if (sentence2.length < 50) {
        return sentence2;
    } else {
        return sentence2.substring(0, 50);
    }
}

console.log(truncateText(sentence2));

function truncateText2 (sentence2) {
    if (sentence2.length < 50) {
        return sentence2;
    } else {
        return sentence2.substr(0, 50);
    }
}
























