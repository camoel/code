Promise.race=function(promises){
return new Promise((resolve,reject)=>{
  if(!Array.isArray){
     throw new TypeError("Argument is not iterable");
  }
  //等待一个敲定
  promises.forEach(p=>{
    Promise.resolve(p).then(res=>{resolve(res)},err=>{reject(err)})
  })
})
}



//test
const p1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(1)
  },2000)
})

const p2=new Promise((resolve,reject)=>{
setTimeout(()=>{
  reject(2)
},1000)
})

Promise.race([p1,p2,'race']).then((res)=>{
  console.log('res:',res);
  
},err=>{
  console.log('err:',err);
  
})