//1
const person1 = {
    name:'Narrator',
    age:'30',
}

console.log(person1);
console.log('Name:', person1.name);
console.log('Age:', person1.age);

//2
const person2 = {
    name: {
        firstName: 'Tyler',
        lastName: 'Durden'
    },
    age: '30',

    //3
    bio:function() {
        return `Information: ${this.name.firstName} ${this.name.lastName}, ${this.age}`;
    },

    //4
    introduceSelf() {
        return `Hi! I´m ${this.name.firstName}`;
    }
}


console.log(person2);
console.log(person2.name.firstName, person2.name.lastName);

console.log(person2.bio());

console.log(person2.introduceSelf());


//5
function createPerson(name) {
    return {
        name: name,
        introduceSelf() {
            return console.log(`Hi! I´m ${this.name}`);
        },
    };
}

let a = createPerson('Marla');
let b = createPerson('Robert');

a.introduceSelf();
b.introduceSelf();


//6
function Person(name) {
    this.name = name;
    this.introduceSelf = function() {
        console.log(`Hi! I´m ${this.name}`);
    }
}

let c = new Person('Mary');
let d = new Person('Tom');

c.introduceSelf();
d.introduceSelf();

//6.1
console.log(Object.hasOwn(c, 'prop')); //false


//7
const DirtyMartini = {
    gin: 6,
    dryVermouth: 1,
    oliveBrine: 1,
    stuffedGreenOlives: 4,
    avoirdupois: 28.4131,

    excuse_my_french() {
        return `ingrédients:
        ${this.gin * this.avoirdupois} ml de gin
        ${this.dryVermouth} trait de vermouth sec (0.0351951ml)
        ${this.avoirdupois} ml de saumure du pot d'olive
        ${this.stuffedGreenOlives} olives vertes farcies`
    },
    
    english_please() {
        return `ingedients:
        ${this.gin} fluid ounces gin
        ${this.dryVermouth} trait de vermouth sec (0.0351951ml)
        ${this.oliveBrine} fluid ounce brine from olive jar
        ${this.stuffedGreenOlives} stuffed green olives`
    }

}

console.log(DirtyMartini.excuse_my_french());
console.log(DirtyMartini.english_please());
