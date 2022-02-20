// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
// console.log(b);
// console.log('myObject.p', myObject?.p?.q);

// destructuring array 
const [p, q] = [45, 37, 54, 65, 87];
// console.log(p, q);


const [best, faltu] = ['mosheur', 'mehedi'];
// console.log(best, faltu);

const { sky, soil } = { sky: 'blue', soil: 'matti', color: 'red', mony: 500 };
// console.log(sky, soil);

// chaining 
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framwork: 'react',
        tech: {
            frist: 'react',
            second: 'css',
            third: 'js'
        }
    }
};

console.log(company.web.tech.third);
console.log(company?.backend?.tech.third);