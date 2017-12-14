const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({
			name: 'Jeff',
			age: 41
		});
		//reject('Something went wrong!');
	}, 5000);
});

console.log('before');

promise.then((data) => {
	console.log('1', data);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('This is my other promise');
		}, 5000);
	});
}).then((str) => { // Chaining .then promises
	console.log('Does this run?', str); // str = some data from previous promise
}).catch((error) => {
	console.log('Error ', error)
});

console.log('after');