//定义类
class Person{
//公有属性（推荐定义在这里）
name
//定义属性并设置默认值
age=18

//构造函数
constructor(name){
  //构造函数内部的this是实例化对象
  this.name=name
  //动态添加属性（不推荐）
  this.food=['西兰花炒蛋','花菜炒蛋']
  }
  //公有方法
  sayHi(){
    console.log('你好呀');
    console.log(this.name)
  }
  sayHello(){
    console.log('hello');
    console.log(this.food)
  }
}

const p=new Person('Juice')
p.sayHi();//你好呀 //;Juice
p.sayHello() //hello //[("西兰花炒蛋", "花菜炒蛋")];

