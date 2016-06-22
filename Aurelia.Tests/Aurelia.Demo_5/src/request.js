import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Request {
    constructor(http) {
        this.http = http;
    }
    
    activate() {
        return this.http
            .fetch('https://api.github.com/users/potosik/repos', {})
            .then(responce => responce.json())
            .then(data => {
                this.repos = data;
            });
    }
}