//创建多个Promise
const p1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(1111)
  },1000)
})

const p2=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(22222)
  },2000)
})

const p3=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(33333)
  },3000)
})


//所有的Promise都变成fulfilled时，再拿到结果
//注意：再拿到所有结果之前，有一个promise变成了reject，那么整个promise时rejected
Promise.all([p1,p2,p3,"aaaa"]).then(res=>{
  console.log(res);
  
}).catch(err=>{
  console.log(err);
  
})