//1   
function calculate(operation, value, numbers) {
    let result = value;
    for (const number of numbers) {
        result = operation(result, number);
    }
    return result;
}

function sum(n1, n2) {
    return n1 + n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

console.log(calculate(sum, 0, [1, 2, 4])); //7
console.log(calculate(multiply, 1, [1, 2, 4])); //8


//2
const student_names = ["Wick", "Malcolm", "Smith"]

student_names.map((item, index, array) => {
    console.log(`name: ${item} | index: ${index}, | array: [${array.join(', ')}]`);
});


//3
const students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
];

max = 600;

students_information.map((student) => {
    const percentage = (student.degree / max) * 100;
    console.log({...student, percentage});
});


//4
const arr = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];
const reduce = arr.reduce((a, b) => {
    return a.concat(b);
}, []);

console.log(reduce);

//5
Array.prototype.upperCase = function() {
    for (let n = 0; n < this.length; n++) {
        this[n] = this[n].toUpperCase();
    }
};

function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
}

myFunc(); //uppercase arr

