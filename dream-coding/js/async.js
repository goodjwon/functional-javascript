// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
    // do network request is 10 secs...
    return 'jwon'
}

const user = fetchUser();
user.then(console.log)
console.log(user);


// 2. await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function getApple() {
    await delay(2000);
    return '🍎'
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

//직렬처리 6초 소요.
async function picFruits() {
    const apple = await getApple();
    const banaba = await getBanana();

    return `${apple} + ${banaba}`
}

picFruits().then(console.log)

//병렬처리 3초 소요
async function pickFruits() {
    const applePromise = getApple();
    const banabaPromise = getBanana();
    const apple = await applePromise;
    const banana = await banabaPromise;

    return `${apple} + ${banana}`
}

pickFruits().then(console.log)

// 병렬처리 세련되게
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' - '))

}

pickAllFruits().then(console.log)

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log)