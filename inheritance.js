class TeamMember {
    name;
    address = 'BD';
    constructor(personName, personAddress) {
        this.name = personName;
        this.address = personAddress;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    designation = 'Support Web Dev';
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'Start a support session.');
    }
}

class StudentCare extends TeamMember {
    designation = 'Care Web Dev';
    buildARoutin(student) {
        console.log(this.name, 'Build a routin  for', student);
    }
}
class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'NeptuneDev Web Dev';
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}

const aamir = new Support('Amir khan', 'Bangladesh', 11);
const salman = new Support('Salnan Khan', 'Dubai', 4);
const srk = new Support('SRK Khan', 'Indea', 9);
const mosheur = new Support('Mosheur Rahman', 'BD', 11);

const alia = new StudentCare('Alia Bhatt', 'Mumbai');

const ash = new NeptuneDev('ash', 'mumbai', 'Android studio');
ash.releaseApp('1.4.5');
console.log(ash);