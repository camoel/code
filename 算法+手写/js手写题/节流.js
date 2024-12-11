const throttle=(fn,await)=>{
  let timer=null
  return ()=>{
    if(!timer){
      timer=setTimeout(()=>{
        fn.call(this)
        timer=null
      },await)
    }
  }
}

