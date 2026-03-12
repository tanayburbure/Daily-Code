// We will be learning array here

// function getMaxValue(nums: number[]) {
//   let MaxValue = -Infinity;

//   for (const num of nums) {
//     if (num > MaxValue) {
//       MaxValue = num;
//     }
//   }

//   return MaxValue;
// }

// console.log(getMaxValue([1, 3, 4, 5, 667, 676, 42]));

function getMaxValue( nums : number[]) {
    let MaxValue = - Infinity
    for (const num of nums){
        if (num > MaxValue) {
            MaxValue = num
        }
    }
    return MaxValue
}

console.log(getMaxValue([10,15,51,828,89135,24]))

interface User {
    firstname : string ;
    lastname : string ;
    age : number ;
}

function filterPeople(users : User[]){
    let ans: User[] = [];
    for (const user of users){
        if (user.age > 18){
            ans.push(user)
        }
    }
    return ans
}

const filteredPeople = filterPeople([
    {
        firstname : "hanana" ,
        lastname : "hahaha" ,
        age : 45

    },
]);

console.log(filteredPeople)