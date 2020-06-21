'use strict';

// javascript is synchronous.
// Execute the code block by orger after hoisting.

console.log('1')

setTimeout(function () {
    console.log('2')
}, 1000)
console.log('3');

//Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'))

//Asynchronous call back
function printWithDelay(print, timeout) {
    setTimeout(print, timeout)
}

printWithDelay(() => console.log('async callback'), 2000)


// Callback Hell example

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'jwon' && password === 'dream') ||
                (id === 'coder' && password === 'callback')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'))
            }
        }, 2000)
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'jwon') {
                onSuccess({name: 'jwon', role: 'admin'});
            } else {
                onError(new Error('on access'))
            }
        }, 1000);
    }
}


/**
 * 1. id, pass
 * 2. login
 * 3. roles
 * 4. user Object
 */

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password, user => {
        userStorage.getRoles(
            user,
            userWidthRole => {
                alert(`Hello ${userWidthRole.name}, you have a ${userWidthRole.role}`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error)
    }
);







