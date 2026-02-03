const fs = require('fs');
const path = require('path');

const inputFilePath = path.join(__dirname, 'input.txt')
const outputFilePath = path.join(__dirname, 'output.txt')

const readStream = fs.createReadStream(inputFilePath, {encoding : "utf-8"})
const writeStream = fs.createWriteStream(outputFilePath, {encoding : "utf-8"})

readStream.pipe(writeStream);   

writeStream.on('finish', () => {
    console.log('Data has been written to output.txt successfully.');
});



const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==="/"){
        
        res.end('Hello World!');
    }
    else if(url==="/yt"){
        res.end("Youtubedotcom");
    }
});

const port=3000;
server.listen(port,()=>{

});




