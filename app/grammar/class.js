//定义类
class Person{
    //构造函数
    constructor(name){
        this.name = name;
    }
    run(){
        console.log(`${this.name} running..`);
    }
    static speak(){  //静态成员不能调用非静态成员
        console.log(`i am speaking now ...`)
    }
}
//定义静态属性
Person.fee = 0;
let p = new Person('lisi');
console.log(p.name);
p.run();
Person.speak();

class Child extends Person{
    constructor(name,age){
        super(name);      //调用父类构造函数
        this.age = age;
    }
    
    sing(){
        console.log(`${this.name}在唱下个路口见`)
    }
    //继承后对父类方法的重写
    run(){
        console.log(`${this.name} running and dancing..`)
    }
}
let c = new Child('liyuchun',30);
console.log(c.name);
console.log(c.age);
//使用父类的静态属性和方法
Child.fee = '30w';
Child.speak();
console.log(Child.fee);
c.run();
c.sing();
