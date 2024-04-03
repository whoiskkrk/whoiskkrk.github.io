//1
const colors = ['blue', 'green', 'white'];

function iter(item) {
    console.log(item);
}

colors.forEach(iter);


//2
function iterate1(item, index) {
    console.log(`${item} has index ${index}`);
}

colors.forEach(iterate1);

function iterate2(item, index, array) {
    console.log(item);

    if (index === array.length -1) {
        console.log('The last iteration!');
    }
}

colors.forEach(iterate2);


//3
const letters = ['a', 'b', 'c'];

function iterate3(letter) {
    console.log(this === window);
}

letters.forEach(iterate3); //logs 3 times true


//4
const Numbers = [22, 3, 4, 10];

let allEven1 = true;
Numbers.forEach (function(number) {
    if (number % 2 === 1) {
        allEven1 = false;
    }
});

console.log(allEven1); //false


//5
const allEven2 = Numbers.every(function (number) {
    return number % 2 === 0;
});

console.log(allEven2); //false


//6
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === "blueberries");
console.log(index); //3


//7
const arr = [7, 33, 47, 99, 2, 103, 79];
const find = arr.find(element => element > 10);
console.log(find); //33


//8
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even)); //true


//9
const numbers = [1, 30, 4, 21, 100000];
numbers.sort(function (a, b) {
    return a - b;
});

console.log(numbers); //1, 4, 21, 30, 100000







