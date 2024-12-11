
//注意：Promise状态一旦确定下来，那么就是不可更改的（锁定）
new Promise((resolve,reject) =>{

  //pending状态
console.log("-------");
resolve()//处于fulfilled状态，已锁定状态
//reject()//处于rejected状态，已拒绝状态
}).then((res)=>{
  console.log("res",res);
  
}).catch((err)=>{
  console.log("err",err);

})