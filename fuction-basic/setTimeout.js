function hello1(){
    console.log('1. welcome to code');
}

function hello2(){
    console.log('2. welcome to code');
}

setTimeout(hello1, 4000)
setTimeout(hello2, 1000)


function hello3(number, name){
    console.log('3. welcome to code');
    console.log(`${number} : ${name}`);
}


setTimeout(hello3, 1000, 1, 'coding world')