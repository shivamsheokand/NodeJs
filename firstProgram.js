// print values
console.log("Hello world!");
console.warn("Hello world!");
// declare variables
let a =19;
let b =20;
let c =21;
console.log(a+b+c);
// if else statements
var x = 20;
var y = '20';
if (y===20){
    console.log('metched:y');
}else{
    console.log('metched:x');
}
// for loop
for(i=0; i<10; i++) {
    console.log(i);
}
// arrays
const arr =[2,3,4,5,6,7,8,9,10,11];
console.log(arr[2]);
// while loop
let k=0;
while(k<10){
    console.log('while looping', k);
k++;
}
// do while loop 
let z = 0;
do{
    console.log('do while looping',z);
    z++;
}while(z<10);


// import data another file

const {addFun,subFun}= require('./testfile');
console.log(addFun(3,6));
console.log(subFun(7,6));

// filter functions

let filterarr = [2,3,4,5,6,3,4,5,3,7,9];
let result=filterarr.filter((item)=>{
    // console.log(item);
    // return item===3
    return item>3
})
console.warn(result);

// core modules
// fs - filesystem, buffer, Http

// globle and non-globale modules
console.log('test');// globle module not need to import

// non-globale modules need to import

const fs = require('fs');
// fs.writeFileSync('text.txt','test file');
console.log(__dirname);  // check directory name
console.log(__filename); // check filename
// fs.writeFileSync('text.txt','test file');