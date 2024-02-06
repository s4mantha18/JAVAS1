// //Reduce
// let number = [1, 2, 3, 4, 5, 6, 7];
// let reduce = number.reduce((initial, current) => {
//     return initial + current;
// });

// console.log(reduce);

// //some
// let nums = [5, 9, 3, 17, 20, 10, 18, 41]
// let great = nums.some((n) => n > 42);
// console.log(great)

// //find
// let numbers = [1, 2, 3, 4, 5];
// let evenNumber = numbers.find((num) =>{
//     return num % 2 === 0});
// console.log(evenNumber); 

// //FlatMap
// let arr = ["a", "b", ["c", "d"],"e"]
// let FlatMap = arr.flatMap((n)=>{
//     return n;
// });
// console.log(FlatMap);

// //FindIndex
// const day = [10, 20, 30, 40, 50]
// const indexs = day.findIndex((element) =>{
//     return element > 25;
// })
// console.log(indexs);

//Filter
let numbers = [1, 2, 3, 4, 5];
let Filter = numbers.filter((n)=>{
    return n % 2 === 0; 
})
console.log(Filter);

// //sort
// let scattered = [1,4,6,7,3,10,15,11,2]
// let sortedarr = scattered.sort((initial, current) => initial - current)
// console.log(sortedarr);

// let letters = ["Ayo", "Jeremy", "Eben", "Carmen", "Sydney"]
// let sortnames = letters.sort((a, b) => {
//     return a.localeCompare(b)
// })
// console.log();

//HOMEWORK

let array1 = [1,2,3,4,5,6, "sam", "egg"]
let array2 = [1,3,4,5,6,7,9, "sam"]
let commonElements = arr1.filter((commonvalue) =>{
    return arr2.includes(commonvalue)
})
console.log(commonElements);


