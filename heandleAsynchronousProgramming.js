let a=20;
let b=5;

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000);
})

waitingData.then((data)=>{
    console.log(a+data);
})