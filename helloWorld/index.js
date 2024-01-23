// node js is the js runtime environment
// js can only run in browser
// after ryan embeded v8 engines with c++ it started running in computer as well
// thats when node js was created
// whenever we make a new project we initialize npm
console.log("Hello world")
// Day 4
//modules
// initialize the fucntion add in math.js and call here


//const {add,sub} = require("./math"); // you can either do it in this way
// and call in this ways
//console.log("Math value is value", add(2,3),sub(2,3))

//or 
//in this way
const math= require("./math") // require function is built-in
console.log("Math value is value",math.add(2,3),"and",math.sub(2,3));

// if we give require("http")-> then it search in node directory
// if we give require("./math")-> then it search in current directory

