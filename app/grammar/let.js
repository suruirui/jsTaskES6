//"use strict" //ES5中开启严格模式 变量未声明不能引用 ES6默认开启严格模式
function test(){
    let a = 1;
    for(let i = 1;i<3;i++){
        console.log(i);
    }
  //  console.log(i) //Uncaught ReferenceError: i is not defined
    //let a = 2;  //Duplicate declaration let不能重复声明
}

test();
console.log('let')