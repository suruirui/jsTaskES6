var abc = ()=>{
    console.log('es6 hello')
}
abc();

class Test{
    run(){
        console.log('es6 running');
    }
}
let t = new Test();
t.run();

const a = 1000;
console.log(a);

for(let i=0;i<10;i++){
    console.log(i);
}
let p = {name:"lisi",age:20};
console.log(p.name,p.age);
console.log(`我的名字是{p.name},年龄是{p.age}`);

let func = (a=2,b)=>{
    return a+b;
}
console.log(func(1,2));