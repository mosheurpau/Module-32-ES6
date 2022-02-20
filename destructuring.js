const fish = {
    id: 68, name: 'king elish', price: 9000, phone: '01754688234', address: 'chandpur', dress: 'silver'
};
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;

const { phone, price, dress, id } = fish;


console.log(price);
console.log(price);
console.log(price);
console.log(phone);
console.log(phone);

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

// const work = company.web.work;
// const framework = company.web.framwork;
const { work, framwork, employee } = company.web;
const { food, name } = company.ceo;
const { third } = company.web.tech;
console.log(work, framwork, food);
console.log(third);