//函数的默认参数
let fn = (a=2,b=3)=>{
    console.log(a,b);
}
fn(3,5);

let zaoCan = (food='油条',drink='豆浆')=>{
    console.log(`今天早上吃的是${food}，还有${drink}`);
}
zaoCan('汉堡','蜂蜜柚子茶');

let func = (arr=[1,2],obj={a:2,b:4})=>{
    console.log(arr,obj);
}
func();