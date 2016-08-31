import {Component} from "angular2/core";
import {EventsDir} from "../../directives/events";
import {SuperAdmin} from "../../providers/superadmin"
    @Component({
        selector: "my-app",
        templateUrl: 'app/components/home/app.html',
        directives: [EventsDir],
        providers: [SuperAdmin]

    })

    export class HomePage{
        constructor(superAdmin: SuperAdmin){
            console.log(superAdmin);

        }


        

    }