//箭头函数
//旧的写法
// var fn = function(n){
// 	return n;
// }
let fn = n => n;
console.log(fn(2));
console.log(fn.name);  //函数名称的属性

let demo = ()=>console.log('hello arrow');
let test = (n,m) => n + m;
demo()
console.log(test(1,3));
console.log(test('hello',' world'));


