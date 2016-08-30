
import {Component} from "angular2/core";
import {EventsDir} from "../../directives/events";

    @Component({
        selector: "my-app",
        templateUrl: 'app/components/home/app.html',
        directives: [EventsDir]
    })

    export class HomePage{
        holamundo: string;
        otrotexto: string;
        otrotextomas: string;
        constructor(){
            this.holamundo = "Hola mundo, Paco";
            this.otrotexto = "Otro texto";
            this.otrotextomas = "Otro texto mas";
        }
    }