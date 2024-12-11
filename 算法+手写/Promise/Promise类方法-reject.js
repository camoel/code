// const promise=Promise.reject("rejected message")
//相当于
// const promise2=new Promise((resolve,reject)=>{
//   reject("rejected message")
// })

//注意：无论传入什么样的值都是一样的 
const promise = Promise.reject({
  then:function(resolve,reject){
    resolve("11111")
  }
});
promise.then(res=>{
  console.log("res:".res);
  
}).catch(err=>{
  console.log("err:",err);
  
})