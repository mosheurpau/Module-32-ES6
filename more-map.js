const friends = ['Tome Hanks', 'Tome cruise', 'Tom Brady', 'Tom Solaiman'];

const flengths = friends.map(friend => friend.length);
console.log(flengths);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
// products.map(product => console.log(product));
products.forEach(product => console.log(product));
console.log(productName);
console.log(productPrice);
