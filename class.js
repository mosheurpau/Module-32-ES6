class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(personName, personAddress) {
        this.name = personName;
        this.address = personAddress;
    }
    startSession() {
        console.log(this.name, 'Start a support session.');
    }
}

const aamir = new Support('Amir khan', 'Bangladesh');
const salman = new Support('Salnan Khan', 'Dubai');
const srk = new Support('SRK Khan', 'Indea');
const mosheur = new Support('Mosheur Rahman', 'BD');
aamir.startSession();
salman.startSession();
srk.startSession();
mosheur.startSession();
// console.log(aamir);
// console.log(salman);