let arr = [12, "Man", "Woman", null, true,undefined,45]
console.log(arr);
console.log(arr[0]);

let multiAr = [12,45,"Egg",["Orange", "Card",12, [34, true, null]],
["King", "Queen"]]
console.log(multiAr[3][3][0])

let secondWay = Array("Man",1,Array(2,"Yes"),[1,"Red",true])
console.log(secondWay)

let type = typeof multiAr;
console.log(type);

//checkifArr
let checker = Array.isArray([1,2,5]);
console.log(checkarr);