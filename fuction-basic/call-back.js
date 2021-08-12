const hello = (name, callback) => {
  console.log(`Hi~ ${name}`);
  callback();
};

const callbackFun = () => {
    console.log('this is call back~!!');
};

// hello("goodjwon", callbackFun);



setTimeout(hello, 2000, 'timeOut~2초', callbackFun)