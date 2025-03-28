function findMax(arr){
  let map=new Map()
  let max=0
  let res
  arr.forEach((item)=>{
    if(!map.has(item)){
      map.set(item,1)
    }
    map.set(item,map.get(item)+1)
  })

  for(const [key,value] of map){
    if(value>max){
      res=key
      max=value
    }
  }
  return res
}

console.log(findMax([1,2,3,4,5,6,7,6,6]))