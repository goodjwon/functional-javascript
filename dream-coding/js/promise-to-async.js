// Callback Hell example


class UserStorage {
    async loginUser(id, password) {
        if (
            (id === 'jwon' && password === 'dream') ||
            (id === 'coder' && password === 'callback')
        ) {
            return id;
        } else {
            return new Error('not found');
        }
    }

    async getRoles(user) {
        if (user === 'jwon') {
            return {name: 'jwon', role: 'admin'};
        } else {
            return new Error('on access');
        }
    }

    async dealay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
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

userStorage.dealay(1000).loginUser(id, password)
    .catch(console.log)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role}`))
    .catch(console.log)

