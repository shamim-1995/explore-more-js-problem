const friends = [12, 13, 56, 78, 90,67, 91,87, 23];
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.and will change the original array.
// const partial = friends.splice(2, 3);
const partial1 = friends.splice(2, 5, 99, 555, 7777);
// console.log(partial);
console.log(partial1);
console.log(friends);