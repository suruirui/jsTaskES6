//set数据结构  不重复数组
let langs = new Set();
// let langs = new Set('python');  //  会将字符串中的每个字符作为set集合的元素
console.log(langs.size); //查看长度
langs.add('php'); //添加元素
langs.add('c++');
langs.add('c++');
langs.add('java');

console.log(langs.size);
console.log(langs.has('python')); //判断是否包含元素
langs.delete('j'); //删除集合中的元素
//遍历集合
langs.forEach(lang => {
	console.log(lang);
});
//遍历集合2
for (let lang of langs) {
	console.log(lang);
}

langs.clear(); //清空集合
console.log(langs.size); //0

//用一个数组来初始化set集合
let set = new Set([1, 2, 3, 4, 4]);
console.log(set.size)
for (let i of set) {
	console.log(i);
}

//WeakSet