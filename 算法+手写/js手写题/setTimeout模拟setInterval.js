function fakeSetInerval(callback,delay){
  function monitor(){
    callback()
    setTimeout(monitor,delay)
  }
  setTimeout(monitor,delay)
}

function sayHello(){
  console.log('hello');
  
}

fakeSetInerval(sayHello(),2000)