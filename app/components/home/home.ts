import {Component} from "angular2/core";
import {EventsDir} from "../../directives/events";
import {JoinPipe} from "../../pipes/joinpipe";

    @Component({
        selector: "my-app",
        templateUrl: 'app/components/home/app.html',
        directives: [EventsDir],
        pipes: [JoinPipe]
    })

    export class HomePage{
        holamundo: string;
        otrotexto: string;
        otrotextomas: string;
        colors: Array<string>;
        constructor(){
            this.holamundo = "Hola mundo, Paco";
            this.otrotexto = "Otro texto";
            this.otrotextomas = "Otro texto mas";
            this.colors = ["rojo","amarillo","azul","naranja"];

        }
    }