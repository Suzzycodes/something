console.log('Hello World');
console.error('this is an error');
console.warn('this is a warning');

// let, const

// let age = 30;
// age = 31;
// console.log(age);

// let score;
// score = 10;
// console.log(score);

// string, numbers, boolean, null, undefined

/* const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof z)

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);

//Template String
const hello = `My name is ${name} and I am ${age}`;
console.log(hello)


const s = 'Hello World';
console.log(s.toUpperCase());

console.log(s.substring(0, 5).toUpperCase());

const t = 'technology, computers, it, code';
console.log(t.split(','));

*/

//arrays 

/* const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears']
fruits[3] = 'grapes';

fruits.push('mangoes');
fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('oranges'))
console.log(fruits);
*/

/*
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }

}

console.log(person.firstName, person.lastName);

console.log(person.hobbies[1]);

console.log(person.address.city);

const {firstName, lastName, address:{ city }} = person;
console.log(city);


person.email = 'john@gmail.com';
console.log(person)
*/

/*
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
]

console.log(todos);

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

/*
// For loop
for(let i = 0; i <= 10; i++) {
    console.log(i);
}

//While
let i = 0;
while(i < 10){
    console.log(`While Loop Number: ${i}`);
    i++;
}
*/

/*
// looping arrays method 1
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}
//loops for arrays method 2
for(let todo of todos) {
    console.log(todo.id)
}

// other loop methods
// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoCompleted = todos.filter(function(todo) {
        return todo.isCompleted === true;
}).map (function(todo) {
    return todo.text;
})

console.log(todoCompleted);
*/


const x = 10;
if(x == 10) {
    console.log('x is 10');
}





























