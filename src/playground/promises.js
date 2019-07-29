const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Matthew',
        //     age: 23
        // });
        reject('Something went wrong!');
    }, 3000);
});

console.log('before');
promise.then((data) => {
    console.log('1', data);
}).then(() => {
    console.log('Does this run?');
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');