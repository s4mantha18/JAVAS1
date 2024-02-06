// //DECLARATION OF FUNCTION
// let func = function(){}

// function func(){}

// //callback/arrow function
let newFunc = () => {}

//PARAMETERS AND ARGUMENTS
let addition = function(firstnumber,secondnumber){
        return firstnumber + secondnumber
}

console.log(addition(3,4));

function subtraction(first, second){
    return first + second
}

console.log(subtraction(2,7));

let division = (a,b)=>{
    return a / b;
}

console.log(division(10,2));

let upper = (word) => {
    return word.toUpperCase();
}

console.log(upper("sam"));

let median = (myname) => {
    return myname.charAt((myname.length)/2)
} 

console.log(median("samantha"));

let TryIt = () => {
    return 1 + 1;
}

console.log(TryIt());

//find as an array function 