import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

    constructor() {
    }

    randStr(): string {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; //

        for (let i = 0; i < 5; i++){
text += possible.charAt(Math.floor(Math.random() * possible.length));
        }


        return text;
    }

    randStrWithNum(): string {
        let text = '';
        const possible =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
                .split('')
                .sort(() => 0.5 - Math.random())
                .join('')

        for (let i = 0; i < 50; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }


        return text;
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
