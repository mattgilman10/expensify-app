// Object Destructuring

// const person = {
//     name: 'Matthew',
//     age: 23,
//     location: {
//         city: 'Saint Louis',
//         temp: 91
//     }

// };

// const {name: firstName  = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`)

// const {city, temp: temperature} = person.location;

// if (city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// };

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Brian Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// // penguin, self-published
// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);



// Array Destructuring

const address = ['1299 S Juniper Stree', 'Philadelphia', 'Pennsylvania',  '19147'];

const [street, city, state = 'New York', zip] = address;
// can be this too
// [, city, state] destructure city and state only 

console.log(`You're in ${city} ${state}`)


const item = ['Coffee (hot)', '$2.00', '$2.51', '$2.75'];

const [drink, ,mediumPrice] = item

console.log(`A medium ${drink} costs ${mediumPrice}`);
