import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();


export {firebase, database as default};























// //child_remove
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// this is for the subscriber list
// const show = (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// }; 

// database.ref('expenses').on('value', show);

// setTimeout(() => {
//     database.ref('expenses/-LkySMGaoLcEungz_oxp/createdAt').set('999999');
// }, 5000);

// database.ref('expenses')
//     .once('value')
//     .then(show)
//     .catch((e) => {
//         console.log('Error: ', e)
//     });





// database.ref('expenses').push({
//     description: 'Credit card',
//     note: '',
//     amount: 4500,
//     createdAt:  moment(0).add(4, 'days').valueOf()
// });


// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'Java, c++, c'
// });




// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('job/company').set('AT&T');
// }, 3500);


// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Matthew Gilman',
//     age: 23,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Saint Louis',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log("This failed. ", e);
// });



// database.ref().update({
//     stressLevel: 9,
//     'location/city': 'Seattle',
//     'job/company': 'Amazon'
// });










// database.ref('isSingle').remove().then(() => {
//     console.log('Removed is single');
// }).catch((e) => {
//     console.log('Failed to Deleted: ', e);
// });

// same as calling remove
// database.ref('isSingle').set(null);


// // database.ref().set('This is my data');

// // database.ref('age').set(24);
// // database.ref('location/city').set('Jersey');

// database.ref('attributes').set({
//     height: 72,
//     weight: 186
// }).then(()=> {
//     console.log('Adding attributes worked');
// }).catch((e) => {
//     console.log('Error attributes: ', e);
// });