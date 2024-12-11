//lodash的get
const get=(obj,str)=>{
  const strArr=str.split('.')
  let result=obj
  for(const item of strArr){
    if(item in result&&typeof result==='object'){
      result=result[item]
    }
  }
  return result
}

//lodash的set
const set=(obj,str,targetValue)=>{
  const arr=str.split('.')
  const lastKey=arr.pop()
  let res=obj
  for(let item of arr){
    if(item in res ){
      res=res[item]
    }
  }
  res[lastKey]=targetValue
  return obj
}