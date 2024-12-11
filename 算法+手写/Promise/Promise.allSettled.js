/**类方法-allSettled
 * 1.返回Promise
 * 2.数组判断 错误信息：Argument is not iterable
 * 3.为空直接敲定
 * 4.等待全部敲定
 *  4.1记录结果
 *  4.2处理兑现{ status: 'fulfilled', value: 1 }
 *  4.3处理拒绝{ status: 'rejected', reason: 3 }
 */
Promise.myallSettled=function(promises){
  return new Promise((resolve,reject)=>{
    //数组判断
    if(!Array.isArray(promises)){
      return reject(new TypeError('Argument is not iterable'))
    }
    //为空则直接敲定
    promises.length===0 && resolve(promises)
    //4.等待全部敲定
    //4.1记录结果
    const result=[]
    let count=0
    promises.forEach((p,index)=>{
      Promise.resolve(p).then(res=>{
        //处理兑现
        result[index]={status:"fulfilled",value:res}
        count++
        count===promises.length&&resolve(result)
      },err=>{
        result[index]={status:"rejected",reason:err}
        count++
        count===promises.length&&resolve(result)
      })
    }
  )

  })
}




//test
const p1=Promise.resolve(1)
const p2=2
const p3=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject(3)
  },1000)
})

Promise.myallSettled([p1,p2,p3]).then(res=>{
  console.log("res:",res);
},err=>{
  console.log("err:",err);
  
})
/*
Promise.allSettled
1.传入Promise都变成已敲定，即可获取兑现的结果
2.结果数组res: [{ status: 'fulfilled', value: 1 },{ status: 'rejected', reason: 3 }]
3.结果数组的顺序，和传入的Promise数组的顺序一致
4.空数组，直接兑现
5.不传入数组，直接报错 
*/
/* Promise.allSettled([p1,p2,p3]).then(res=>{
  console.log('res:',res);
},err=>{
  console.log('err:',err);
})
 */
