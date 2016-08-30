
import {Component} from "angular2/core";
import {Underline} from "../../directives/underline";

    @Component({
        selector: "my-app",
        templateUrl: 'app/components/home/app.html',
        directives: [Underline]
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