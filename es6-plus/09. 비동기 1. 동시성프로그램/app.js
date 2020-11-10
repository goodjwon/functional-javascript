const promise = new Promise((resolve, reject) =>{
    if(true) {
        resolve('처리결과')
    } else {
        reject('오류메세지;')
    }
})



const promise2 = new Promise((resolve, reject)=>{
    let succeeded = false;
    console.log('처리 중');
    succeeded = true;

    if(succeeded) {
        resolve('처리결과')
    }else{
        reject('오류메세지')
    }
})

promise2.then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
});


const promise3 = new Promise((resolve, reject)=>{
    console.log('promise3');
    resolve('promise3 처리 완료')
})

const promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('promise4');

        resolve('promise4 처리 완료');
    }, 1000)
})

Promise.all([promise3, promise4]).then(results =>{
    console.log('Promise All ',results);
})