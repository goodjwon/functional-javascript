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

    async getUserWithRole(user, password) {
        const login = await this.loginUser(user, password);
        const role = await this.getRoles(login);
        return role;
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

userStorage
    .getUserWithRole(id, password) //
    .catch(console.log)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role}`));
