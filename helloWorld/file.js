const fs = require("fs"); //fs stands for file system-+ 


// there are method to write the file

// one is fs.writeFile another is fs.writeFileSync

//fs.writeFileSync("./test.txt","Hey there") //-> sync means it is synchronous call


//fs.writeFile("./test1.txt","Hello world async",(err)=>{}) 
// this is async which also use callback function. 

// const result= fs.readFileSync("./contact.txt","utf-8")  //we should give file name and path

// console.log(result)

// we have to use call back function in async read method
fs.readFile("./contact.txt","utf-8", (err, result)=>{
    if(err){
        console.log("err",err)
    }else{
        console.log(result);
    }
})

// fot append

fs.appendFileSync( "./contact.txt", "\nI am appending some text here ");