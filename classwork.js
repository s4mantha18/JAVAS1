let sentence1 = "Hi world, Hi universe";
let sentence3 = "man";
let num = 34.23456;


//number1
let newsentence = sentence1.replaceAll("Hi", "Hello");
console.log(newsentence);

//number2 
let sentence2 = "Hello world";
let replaceSpace = sentence2.replaceAll(" ", "")
console.log(replaceSpace.length)

//number3
let anotherWord = "Man"
let anotherlength = anotherWord.length;
let divideWord = Math.floor(anotherlength/2);
console.log(divideWord);
let midword = anotherWord.charAt(divideWord)
console.log(midword);

//number4
let twodecimalplaces = num.toFixed(2);
console.log(twodecimalplaces);

//number 5
let word = "mappa";
let wordlength = word.length;
let divide = Math.floor(wordlength/2);
let firstHalf = word.slice(0,divide)
console.log(firstHalf);
