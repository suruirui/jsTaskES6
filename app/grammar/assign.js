//解构赋值
//解构赋值分类
// 数组解构赋值 对象解构赋值 字符串解构赋值 
//布尔值解构赋值 函数参数解构赋值 数值解构赋值

//解构赋值语法
{
    let a,b;
    [a,b] = [1,2]; //数组类型的解构复制
    console.log(a,b);   //1 2
}

{
    let a,b,rest;
    [a,b,...rest] = [1,2,3,4,5,6];
    console.log(a,b,rest);  //1 2 (4) [3, 4, 5, 6]
}

{
    let a,b;
    ({a,b}={a:1,b:2})  
    console.log(a,b)
}

{
    let a,b,c;
    let aa,bb,cc;
    [a,b,c=3] = [1,2]; 
    console.log(a,b,c) //1 2 3
}

{
    let aa,bb,cc;
    [aa,bb,cc] = [1,2];     //如果没有默认值 则为undefine
    console.log(aa,bb,cc); //1 2 undefined
}

//解构赋值使用场景
//1.交换变量
{
    let a=1;
    let b=2;
    [a,b] = [b,a];
    console.log("a="+a,"b="+b);
}
//2.函数返回多个值
{
    function fn(){
        return [2,3];
    }
    let a,b;
    [a,b] = fn();
    console.log(a,b);
    //旧的写法
    let arr = fn();
    console.log(arr[0]);  //2
}
//3.返回多个值并选择
{
    function fn(){
        return [1,23,4,5];
    }
    let a,b;
    [a,,,b] = fn();
    console.log(a,b)
}
{
    function fn(){
        return [1,2,3,4,5];
    }
    let a,b,c;
    [a,,...b] = fn();
    console.log(a,b);  // 1,[3,4,5]
}

//对象解构赋值
{
    let o = {p:42,q:true};
    let {p,q} = o;  //一定是p q
    console.log(p,q);
}
//对象解构复制应用场景 服务器端通信,获取json
{
    let data = {
        name:'jack',
        group:[{
            name:'三年级',
            teacher:'李老师'
        }]
    }

    let {name:stuName,group:[{name:groupName,teacher:teacher}]} = data;
    console.log(stuName,groupName,teacher);
}

//展开操作符...
let lang = ['js','php'];
let langArr = ['c',...lang];
console.log(langArr);





