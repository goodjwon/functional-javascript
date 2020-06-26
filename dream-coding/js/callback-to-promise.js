
// Callback Hell example

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if (
                    (id === 'jwon' && password === 'dream') ||
                    (id === 'coder' && password === 'callback')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'))
                }
            }, 1000)
        });

    }

    getRoles(user) {
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                if (user === 'jwon') {
                    resolve({name: 'jwon', role: 'admin'});
                } else {
                    reject(new Error('on access'))
                }
            }, 1000);
        })

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

userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role}`))
    .catch(console.log)

