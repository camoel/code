//------------ 父类 -----------
class Person{
  name
  constructor(name){
    this.name=name
  }
  sayHi(){
    console.log('父类的sayHi')
  }
}

//---------- 子类 -----------
//extends:继承父类
//super:一般用来调用父类的构造函数
class Student extends Person{
  age
  constructor(name,age){
    super(name)
    this.age=age
  }
sayHello(){
  console.log('子类的sayHello');
}
//同名方法：就近原则，沿着原型链向上查找，找到了就不会再继续往下
sayHi(){
  console.log('子类的sayHi')
  }
}

const s =new Student('西兰花',18)