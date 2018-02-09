import {Component} from '@angular/core';

import {HttpClient} from '@angular/common/http';

interface AdminResponseType {
    message?: string;
    returnCode?: number;
}

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
    message: string;
    returnCode: number;
    urlInput = 'http://localhost:7002/v1/auth/oauth2/testing-cors';

    constructor(private http: HttpClient) {
        this.consumeRestFull();
    }

    consumeRest() {
        console.log('consume rest');
        this
            .http
            .get(this.urlInput)
            .subscribe((Response: any) => {
                console.log('SUCCESS RESPONSE:', Response);
                this.message = Response.message;
                this.returnCode = Response.returnCode;
            }, (error) => {
                console.log('ERROR RESPONSE:', error);
            });
    }

    consumeRestFull() {
        console.log('consume rest with headers');
        this
            .http
            .get<AdminResponseType>(this.urlInput, {observe: 'response'})
            .subscribe( Response => {
                console.log('SUCCESS RESPONSE:', Response);
                const headerKeys = Response.headers.keys();
                const headersShit = headerKeys.map(
                    key => `${key}: ${Response.headers.get(key)}`
                );
                console.log('SUCCESS RESPONSE HEADERS:', headersShit);

                this.message = Response.body.message;
                this.returnCode = Response.body.returnCode;
            }, (error) => {
                console.log('ERROR RESPONSE:', error);
            });
    }
}
