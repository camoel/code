/**
 * 手写bind方法
 * 1.定义myBind方法
 * 2.返回绑定this的新函数
 * 3.合并绑定和新传入参数
 */
//1.定义myBind方法
Function.prototype.myBind=function(thisArg,...args){
  return (...restArgs)=>{
    //this：原函数（原函数.myBind)
    //箭头函数有{}就得写return，无则不写
    return this.call(thisArg,...args,...restArgs)
  }
}




//----------------测试代码----------------
const person = {
  name: "西兰花🥦",
};

function func(numA, numB, numC, numD) {
  console.log(this);
  console.log(numA, numB, numC, numD);
  return numA + numB + numC + numD;
}

const bindFunc = func.myBind(person, 1, 2); //修改this指向传入两个值，返回绑定this的新函数

const res = bindFunc(3, 4); //继续向这个函数传值
console.log("返回值", res);
