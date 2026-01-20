// console.log("Hello world");

// const file = require("fs")
// const path = require("path")
// const http = require("http")

// const {add,remove,areaOfCircle} = require("./math")
// console.log(add(1,4),remove(1,5),areaOfCircle(5));

const { log } = require("console")
const fs = require("fs")
fs.writeFileSync('./test.txt',"This is Sync file content")
const file = fs.readFileSync("test.txt","utf-8")
console.log(file);

const asyncFile = fs.readFile("test.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error in file reading",err);
    }
    else{
        console.log("File reading successfull",data);
    }
})