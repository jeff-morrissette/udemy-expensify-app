import * as firebase from 'firebase';

// Initialize Firebase
const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});
// 		console.log(expenses);
// 	});

// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
// 	console.log(expenses);
// });

// database.ref('expenses').push({
// 	description: 'Rent',
// 	note: '',
// 	amount: 109500,
// 	createdAt: 976123498763
// });

// database.ref('notes').push({
// 	title: 'Course topics',
// 	body: '.NET, Python, PHP'
// });

// const notes = [{
// 	id: '12',
// 	title: 'First note!',
// 	body: 'This is my note'
// },{
// 	id: '761ase',
// 	title: 'another note',
// 	body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// Challenge
// database.ref().on('value', (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// Use variable onValueChange so we can easily subscribe and unsubscribe.
// Subscribe to the database, changes to database will notify us.
// const onValueChange = database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// }, (e) => {
// 	console.log('Error with data fetching', e);
// });

// Unsubscribe to the database.
// setTimeout(() => {
// 	database.ref().off('value', onValueChange);
// }, 3500);

// Fetch data from the database once.
// database.ref()
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('error fetching data: ', e);
// 	});

// database.ref().set({
// 	name: 'Jeff Morrissette',
// 	age: 26,
// 	stressLevel: 6,
// 	job: {
// 		title: 'Software developer',
// 		company: 'Google'
// 	},
// 	location: {
// 		city: 'Winnipeg',
// 		country: 'Canada'
// 	}
// }).then(() => {
// 	console.log('Data is saved');
// }).catch((e) => {
// 	console.log('This failed: ', e);
// });

// Edit multiple
// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle'
// });

// Removes from database
//database.ref('isSingle').set(null);

// database.ref('isSingle')
// 	.remove()
// 	.then(() => {
// 		console.log('Data was removed successfully')
// 	}).catch((e) => {
// 		console.log('Did not remove data, error: ', e)
// 	});

//database.ref().set('This is my data.')

// Update database
// database.ref('age').set(27);
// database.ref('location/city').set('Vancouver');

// database.ref('attributes').set({
// 	height: 68,
// 	weight: 163
// }).then(() => {
// 	console.log('Second set call worked');
// }).catch((e) => {
// 	console.log('Things didn\'t for the second error ', e);
// });