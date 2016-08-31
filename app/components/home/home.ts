import {Component} from "angular2/core";
import {EventsDir} from "../../directives/events";
import {ConfigConstantApp,ViewConstantApp} from "../../constants/appconstants"

    @Component({
        selector: "my-app",
        templateUrl: 'app/components/home/app.html',
        directives: [EventsDir],

    })

    export class HomePage{
       
        constructor(public ConfigurationConstants: ConfigConstantApp, public viewConstants: ViewConstantApp){

        }
    }