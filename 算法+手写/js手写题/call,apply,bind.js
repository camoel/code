//call
Function.prototype.myCall=function(context,...args){
  context=context||window
  const key=Symbol()
  context[key]=this
  const result=context[key](...args)
  delete context[key]
  return result
}

//call
// Function.prototype.aCall(context,...args){
//   context=context||window
//   const key=symbol()
//   context[key]=this
//   const result=args?context[key](...args):context[key]()
//   delete context[key]
//   return result
// }

//apply
Function.prototype.myApply=function(context,args){
  context=context||window
  const key=symbol()
  context[key]=this
  const result=args?context[key](...args):context[key]()
  delete context[key]
  return result
}


//bind
function fn(a,b,c,d){
  console.log(a,b,c,d);                                                             
  console.log(this);
}

Function.prototype.myBind=function A(ctx){
  let args=Array.prototype.slice.call(arguments,1)
  let fn=this
  return function(){
    let restArgs=Array.prototype.slice.call(arguments)
    let allArgs=args.concat(restArgs);
    //如果使用new方式调用的这个函数
    if(Object.getPrototypeOf(this)===A.prototype){
      return new fn(...allArgs)
    }else{
      return fn.apply(ctx,allArgs)
    }
  }
}

const newFn=fn.myBind('ctx',1,2)
const result=new newFn(3,4)
console.log(result);



//bind
// Function.prototype.myBind=function(context,...args){
//   const self=this;
//   return function(...innerArgs){
//     return self.apply(context,args.concat(innerArgs))
//   }
// }

