'use strict';

// Promise is a Javascript object for asynchronous operation.

// 1. Producer
const promise = new Promise((resolve, reject) => {
    console.log('doing something')
    setTimeout(() => {
        resolve('goodjwon');
        //reject(new Error('no network'))
    }, 2000);
});


//2. Consumer
promise
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('finally')
    })


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000)
        })
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000)
    });

const getEgg = hen =>  //hen을 받아와서
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 🥚`), 1000)
    });

const cook = egg =>  //egg를 받아와서..
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000)
    });

getHen()
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal))