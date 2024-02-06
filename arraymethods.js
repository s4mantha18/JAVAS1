let array = [1, "Samantha", true, "Egg"];
//JOIN
let joinedarray = array.join('');
console.log(joinedarray)
//PUSH
let pushedarray = array.push("sand","daniel")
console.log(pushedarray)
//POP
let poppedarray = array.pop()
console.log(poppedarray)
//SLICE
let slicedarray = array.slice(1,3)
console.log(slicedarray)
//SPLICE
let splicedarray = array.splice(2,6)
console.log(splicedarray)
//Reverse
let num = [1,2,3]
let Reverse = num.reverse()
console.log(Reverse);
//Fill
// let Fillvalue = ["red", "blue", "yellow", "green", "purple" ];
// let fill = Fillvalue.fill("Pink",2,4);
// console.log(fill);

let arr = [12, "man", "woman", null, true, undefined, 45];
console.log(arr[0]);

let multiAr = [
    12,
    45,
    "Egg",
    ["Orange", "Card", 12, [34, true, null]]
    ["King","Queen"],
];

console.log(multiAr);

let secondway = Array("man", 1, Array(2, "Yes"), [1, "Red, true"])
console.log(secondway);

let clare = {
    height: "5'4 ft",
    complextion: "Light-skinned",
    age: 18,
    gender: "Female",
    shoe: "Nike",
    clothing: "Nike",
    courses:["Javascript", "Java", "SQL", "HTML", "CSS", "Python", "Cyber security"],
    descOfCourses:[{
        name: "Javascript",
        Tutor: "Mr. Ledor",
        Brutal:"Yes",
        lovesViolence: true,
        duration:"4 years",
        coureOutline: undefined
    },{
        name: "Java",
        Tutor: "Mrs. Smith",
        Brutal: false,
        lovesviolence:[true, "Its True"],
        duration:"6 months",
        courseoutline:"Learn yourself after one day"
    }]
} 
console.log(clare.descOfCourses[0].Tutor)

let arrayy = [1, 2,3, 4, 5, 6, 7, 8, 9, 10];

// let random = array.random(array)
// console.log(random);

let random2 = Math.floor(Math.random() * arrayy.length)
console.log(random2);

//CLASSWORK
let myname = "clare";
let reversed = myname.split("", myname.length);
let Reversed = reversed.reverse();
let Joined = Reversed.join("");
console.log(Joined);

//fill an array with a number 1000 times
let Fillvalue = ["red", "blue", "yellow", "green", "purple" ];
let fill = Array(1000).fill(3);
console.log(fill);

//classwork1
let addition = "7 + 5";
let arrayaddition = addition.split(" ", addition.length);
console.log(arrayaddition);
let seven = Number(arrayaddition[0]);
console.log(seven); t
let five = Number(arrayaddition[2]);
console.log(five);
console.log("(" + seven + ")" + "+" + "(" + five + ")" + "=" + (seven + five));


//classwork2
let object = {
    name1 : "clare",
    age : null,
}
console.log(object);

//classwork3
let numbers = [1,2,4,6,9];
let lengthofnum = numbers.length;
console.log(lengthofnum);
let sumofnum = number.reduce
