// function add(a,b){
//     return a+b
// }

// function sub(a,b){
//     return a-b;
// }

//module.exports = {add,sub};  //its like making public in java


//another way of exporting the function
// difference is module.exports can be done only once as it override it
// exports object can have multiple properties

exports.add = (a,b) =>{
    return a + b ;
}
//exports.add = (a,b) => a+b;


exports.sub = (a,b) =>{
    return a-b;
}
// its same thing 
//exports.sub = (a,b) => a=b;

