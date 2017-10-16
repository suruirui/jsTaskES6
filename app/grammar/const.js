//const
//1.一旦定义不可修改
//2.声明必须赋值
const func = ()=>{
    let a = 20;
    console.log(a);
}
func();

const PI = 3.1415926;

function getPereimeter(r){
    return 2*PI*r;
}
console.log(getPereimeter(2));

//使用const声明的常量，指向对象的引用，对象本身可以修改
const obj = {
    a:1
}
obj.a = 3;
console.log(obj);