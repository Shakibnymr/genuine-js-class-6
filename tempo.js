// swap;
let first = 5;
let second = 7;
console.log( first, second);
// this is wrong approach;
// // first = second;
// // second = first;
// approach 1
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);


// approach 2 --- Destructuring : it can be done in two cases: one is object to object; another one is below given which is array to array;
// let first = 5;
// let second = 7;

[first,second] = [second,first]
console.log( first, second);