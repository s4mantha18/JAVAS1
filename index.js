//length - length of string
let girl = "Clare Paul";
let length = girl.length;
console.log(length);

//indexOf - shows the index number of a substring
let indexOf = girl.indexOf("a", 3);
console.log(indexOf);

//lastindexof - shows the index number of the last type of the specific substring
let lastindexof = girl.lastIndexOf("a");
console.log(lastindexof);

//charAt - shows the character that matches an index number
let charAt = girl.charAt(0);
console.log(charAt)

//trim - omits whitespace from beginning and end
let value = " girl "
let trim = value.trim()
console.log("before trim", value.length);
console.log("after trim", trim.length);

//charcodeAt
let charcode = girl.charCodeAt(0);
console.log(charcode);

//slice - removes a speciied substring out of a string
let newValue = "Good person"
let slice = newValue.slice(0,4)
console.log(slice)

//CLASSWORK 1:
let FirstName = "samantha"
let FirstLetter = FirstName.charAt(0).toUpperCase();
console.log(FirstLetter);

//concat
let word = "Good"
let word2 = "Bad"
let concat = word.concat(" ", "wicked", " ", word2)
console.log(concat)

//replace
let newWord = "He is running";
let replaceword = newWord.replace("running", "walking");
console.log(replaceword);

//startswith - has a boolean output
let startWord = "Egg";
let startswith = startWord.startsWith("E", 0);
console.log(startswith);