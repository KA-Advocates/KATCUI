import { Injectable } from '@angular/core';

@Injectable()
export class BaseURLService {

    constructor() { }

    getBaseURL(): string {
        return 'https://qa.kadeutsch.org';
    }

}
