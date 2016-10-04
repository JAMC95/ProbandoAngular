import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

@Injectable()
export class Api {
    http: Http;
    constructor(http: Http) {
        this.http = http;
    }
}