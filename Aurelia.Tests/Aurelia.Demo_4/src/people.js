export class People {
    constructor () {
        this.message = 'Welcome to Aurelia!';

        this.firstName = 'Artsiom';
        this.lastName = 'Patotski';

        this.people = [];

        this.editing = undefined;
        this.newValue = '';
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

    edit($index) {
        this.newValue = this.people[$index];
        this.editing = $index;
    }
    
    save($index) {
        this.editing = undefined;
        this.people[$index] = this.newValue;
    }
}
