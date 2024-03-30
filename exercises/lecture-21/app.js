//1
// const fruits = 'apple banana cantaloupe blueberries grapefruit';

let fruits = 'apple banana cantaloupe blueberries grapefruit';
fruits = fruits.split(" ");
console.log(fruits);

//2- for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//3 - while
let a = fruits.length;
while (a < fruits.length) {
    console.log(fruits[a]);
    a++;
} a = 0;

//4 - do...while
do {
    console.log(fruits[a]);
    a++;
} while (a < fruits.length)

//5 - for...of
for(const fruit of fruits) {
    console.log(fruit);
}


//6 - even numbers
const Numbs = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
        console.log(Numbs[i]);
    }
}

//7
const names = ['Batman'];
names.push('Joker');
console.log(names);

//8
const Joker = ['Batman'];
Joker.unshift('Joker');
console.log(Joker);

//9 
const Gotham = ['Batman', 'Joker', 'Bane'];
Gotham.unshift('Catwoman');
console.log(Gotham);

//10
const DC = ['Batman', 'Joker', 'Bane'];
const Catwoman = ['Catwoman', ... DC];
console.log(Catwoman);

//11
var dark = ['Batman', 'Joker', 'Bane'];
dark.splice(1, 0, 'Catwoman');
console.log(dark);


//12
var Names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
Names.splice(1, 2);
console.log(Names);

//13
const change = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const indexC = change.indexOf('Catwoman');
const indexJ = change.indexOf('Joker');

if (indexC, indexJ !== -1) {
    change.splice(1, 2, 'Alfred');
} 

console.log(change);


//14
const change2 = ['Batman', 'Catwoman', 'Joker', 'Bane'];

if (!change2.includes('Alfred')) {
    change2.push('Alfred');
}

console.log(change2);


//15
const change3  = ['Batman', 'Catwoman', 'Joker', 'Bane'];
const indexA = change3.indexOf('Alfred');

if (indexA !== -1) {
    change3.splice(indexA, 1, 'Alfred');
} else {
    console.log("Alfred doesn´t exist")
}

console.log(change3);