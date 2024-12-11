var a = function () {
  this.b = 3;
};
var c = new a();
a.prototype.b = 9;
var b = 7;
a();

//分别输出什么？为什么？
console.log(b);//7
console.log(c.b);//3


for(var i=0;i<4;i++){
  setTimeout(()=>console.log(i),1000)
}
//问输出结果(4444)，问是不是一起输出的(是)
//如果要输出1234怎么改(var改成let)，如果要每隔一秒输出呢?

