const addFunc = new Promise((resolve, reject)=>{
    const ret = 1+1;
    if(ret == 2){
        resolve('Success')
    } else {
        reject('Filed')
    }
});


addFunc
    .then(ret =>{
        console.log('then ' + ret);
    })
    .catch(ret => {
        console.log('catch '+ret);
    })
    .finally(()=>{
        console.log('finally');
    });



console.clear();

const testOdd = true;
const testEven = true;

const complexCallBack = (callback, error) => {
    if(!testOdd){
        error({
            testOdd: testOdd
        })
    } else if (!testEven){
        error({
            testEven: testEven
        })
    } else {
        callback('complexCallBack Success')
    }
}


complexCallBack((result)=>{
    console.log(result);
}, (error) => {
    console.log(error);
});
