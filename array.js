const country = 'Bangladesh';
const age = 27;
const isIndependent = true;
const student = {id: 123, class:11, name: 'shamim'};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];

function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
//check array using Array.isArray.
console.log(Array.isArray(friends));
console.log(typeof add);



//.................................

console.log(friends.includes(19));
console.log(friends.includes(21));


if(friends.indexOf(234) !== -1){

}


//concat:.....................


const newFriends = [134, 76, 90,89];
const allFriends = newFriends.concat(friends);
console.log(allFriends);


