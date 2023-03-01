var beatlesMembers = ["John","Paul", "George", "Ringo"];
var randomNumbers = [0,1,2,3];
var randomBooleans = [true, false, true, false];

console.log(beatlesMembers.pop());
// removes last element from array and returns that element.
// output: Ringo
// console.log(beatlesMembers) = ["John","Paul", "George"]

console.log(randomNumbers.push(4));
// adds element(s) at the end of array and returns the new length of the array.
// output: 5
// console.log(randomNumbers) = [0,1,2,3,4]

console.log(randomBooleans.shift());
// removes first element from array and returns that removed element
// output: true
// console.log(randomBooleans) = [false, true, false]

// #Understanding of Index Positions
// The first element of an array is in index position 0.
// Each subsequent element increases in index position in increments of 1.
// For example, the index position of "John" in beatlesMembers is 0, "Paul" is 1, "George" is 2, and "Ringo" is 3.
