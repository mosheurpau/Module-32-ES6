// 1. let and const 
const hubby = 'Omor sani';
let phone = 'iphone 15';
phone = 'Samsung Galaxy s17';
// 2. default parameter 
function maxNumber(array = [43, 43, 54, 32]) {
    const max = Math.max(...array);
    return max;
}
console.log(maxNumber());

// 3. template string 
const myNotes = `I am mojnu ${hubby}. i dont have a laili.`;
console.log(myNotes);

// 4. arrow function 
const square = x => x * x;
console.log(square(9));