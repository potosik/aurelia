export class App {
    constructor () {
        this.message = 'Welcome to Aurelia!';

        this.firstName = 'Artsiom';
        this.lastName = 'Patotski';
    }
    
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
