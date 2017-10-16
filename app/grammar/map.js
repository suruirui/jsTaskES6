//map 键值对
let stu = new Map();
console.log(stu);

stu.set('001','jack');
stu.set('002','marry');
stu.set('003','xiaoming');

stu.set('001','lisa');

stu.delete('001');  //删除元素
console.log(stu);
console.log(stu.size);

console.log(stu.get('001'));  //用key找value
// console.log(stu.get('jack'));  //undefined
console.log(stu.has('001'));  //判断是否有键值对
//遍历集合
stu.forEach((value,key)=>{  //类似于遍历数组的方法
	console.log(`${key}:${value}`);
	// console.log(`${value}`);
});
for (let key of stu.keys()) {
  document.write(key+ ' ');
  document.write('<br/>');
}


for (let value of stu.values()) {
  document.write(value+ ' ');
   document.write('<br/>');
}


for (let item of stu.entries()) {
  document.write(item[0], item[1]);
   document.write('<br/>');
}


// 或者
for (let [key, value] of stu.entries()) {
  document.write(key, value);
   document.write('<br/>');
}

// 等同于使用map.entries()
for (let [key, value] of stu) {
  document.write(key, value);
   document.write('<br/>');
}

//转为数组
console.log([...stu.keys()]);
console.log([...stu.values()]);
console.log([...stu.entries()]);

stu.clear();  //清空集合
console.log(stu);
