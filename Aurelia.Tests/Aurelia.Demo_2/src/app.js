export class App {
    constructor () {
        this.message = 'Welcome to Aurelia!';

        this.firstName = 'Artsiom';
        this.lastName = 'Patotski';

        this.people = [];
    }
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    create() {
        this.people.push(this.fullName);
    }

    delete($index) {
        this.people.splice($index, 1);
    }
}
