console.log('아래 배렬에서 짝수에 대해서 4를 곱한 값의 합을 구하라.')

//given
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function a(data){
    let result = new Array;

    for(i = 0; i < data.length; i++){
        if(data[i] % 2 == 0 ){
            result.push(data[i])
        }
    }
    return result
}

function b(data){
    let result = new Array;

    for(i = 0; i < data.length; i++){
        result.push(data[i]*4)
    }
    return result
}

function c(data){
    let result = 0;
    for(i = 0; i < data.length; i++){
        result = result + data[i] 
        console.log(result)
    }
    return result;
}


console.log(a(data))
console.log(b(data))
console.log(b(a(data)))
console.log(c(b(a(data))))


// 함수처리.
console.log(
    data
        .filter(data => data % 2 == 0)
        .map(data=> data*4)
        .reduce((prev, curr) => prev + curr)
)

