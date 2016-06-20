export class App {
    constructor () {
        this.message = 'Welcome to Aurelia!';

        this.firstName = 'First name here';
        this.lastName = 'Last name here';
    }
    
    get fullName() {
        return '${this.firstName} ${this.lastName}';
    }
}
