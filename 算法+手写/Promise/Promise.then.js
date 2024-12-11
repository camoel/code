/*
then方法-异步及多次调用
1.定义实例属性
2.保存回调函数
3.调用成功回调
4.调用失败回调
*/

const PENDING ='pending'
const FULFILLED='fulfilled'
const REJECTED='rejected'

class myPromise{
  //状态
  state=PENDING
  //原因
  result=undefined 
  //定义实例属性（私有 在前面加 # ） 
  #handlers=[] //[{onFulfilled,onRejected}]

  //构造函数
constructor(func){
  // pending->fulfilled
 const resolve=(result)=>{
  if(this.state===PENDING){
    this.state=FULFILLED
    this.result=result
    //调用成功回调
    this.#handlers.forEach(({onFulfilled})=>{
      onFulfilled(this.result)
    })
  }
 }

 //pending->rejected
 const reject=(result)=>{
  if(this.state=PENDING){
    this.state=REJECTED
    this.result=result
   this.#handlers.forEach(({onRejected})={
    onRejected(this.result)
   })
  }
 }
 func(resolve,reject)
}


//then方法
then(onFulfilled,onRejected){
  onFulfilled=typeof onFulfilled=='function'?onFulfilled:x=>x
  onRejected=typeof onRejected=='function'?onRejected:x=>{throw x}
}

if(this.state===FULFILLED){
  onFulfilled(this.result)
}else if(this.state===REJECTED){
  onRejected(this.result)
}else if(this.state===PENDING){
  onFulfilled.push(onFulfilled,onRejected)
}
}

