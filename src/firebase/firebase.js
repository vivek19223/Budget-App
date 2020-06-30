import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp (firebaseConfig);

const database = firebase.database ();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider,database as default };




// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// // database.ref('expenses').push({
// //     description : 'Oyo',
// //     note : 'Went to a oYo date',
// //     amount : 1000,
// //     createdAt : 200002929920
// // })

// // database.ref('expenses').on('value',(snapshot)=>{
// //     const expenses = []
// //     snapshot.forEach(childSnapshot => {
// //                 expenses.push({
// //                     id : childSnapshot.key,
// //                     ...childSnapshot
// //                 })
// //             });
// //             console.log(expenses)
// // },(e)=>{
// //     console.log('Error : ',e)
// // })



// // database
// // .ref ('expenses')
// // .once ('value')
// // .then ((snapshot) => {
// //     const expenses = []
// //     snapshot.forEach(childSnapshot => {
// //         expenses.push({
// //             id : childSnapshot.key,
// //             ...childSnapshot
// //         })
// //     });
// //     console.log(expenses)
// // }).catch((e)=>{
// //     console.log('Error : ',e)
// // })

// // database.ref('expenses').push({
// //     description : 'Coffee',
// //     note : 'Went to a coffee date',
// //     amount : 1000,
// //     createdAt : 200002929920
// // })

// // database.ref('notes').push({
// //     title : 'Course Topic',
// //     body : 'React native,Angular,Python'
// // })

// // database.ref().on('value',(snapshot)=>{
// //     console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`)
// // })

// // setTimeout(()=>{
// //     database.ref('job/company').set('Amazon')
// // },5000)
// // database
// //   .ref ('location/city')
// //   .once ('value')
// //   .then (snapshot => {
// //     const val = snapshot.val ();
// //     console.log (val);
// //   })
// //   .catch (e => {
// //     console.log ('Error fetching data ', e);
// //   });

// // database.ref().set({
// //     name : 'Vivek Kumar',
// //     age : 25,
// //     stressLevel : 6,
// //     job : {
// //         title : 'Software developer',
// //         company : 'Google'
// //     },
// //     location : {
// //         city : 'Mumbai',
// //         country : 'India'
// //     }
// // }).then(()=>{
// //     console.log('Data is saved.!')
// // }).catch((e)=>{
// //     console.log('error : ',e)
// // })

// // database.ref().update({
// //     stressLevel : 9,
// //     'job/company' : 'Amazon',
// //    'location/city' : 'Bengaluru'
// // });

// // database.ref().remove().then(()=>{
// //     console.log('Data is removed successfully.')
// // }).catch((e)=>{
// //     console.log('Error : ',e)
// // })
