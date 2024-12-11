const promise=new Promise((resolve,reject)=>{
  reject("reject message")
})

//无论是fulfilled 还是rejected状态，finally都会执行
promise.then(res=>{
  console.log("res",res);
  
}).catch(err=>{
   console.log("err", err);
}).finally(()=>{
  console.log("finally code execute");
  
})