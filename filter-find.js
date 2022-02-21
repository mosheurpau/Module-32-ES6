const numbers = [5, 32, 5, 65, 32, 54, 6, 7, 6];
const bigNumbers = numbers.filter(number => number > 20);
const samllNumbers = numbers.filter(number => number < 10)
console.log(bigNumbers);
console.log(samllNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);

const blacks = products.filter(product => product.color == 'black');
// console.log(blacks);

const blues = products.filter(product => product.color == 'blue');
// console.log(blues);

const findBlacks = products.find(product => product.color == 'black');
console.log(findBlacks);

const findBlue = products.find(product => product.color == 'Blue');
console.log(findBlue);


