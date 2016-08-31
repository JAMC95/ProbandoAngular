import {Component} from "angular2/core";
import {EventsDir} from "../../directives/events";

    @Component({
        selector: "my-app",
        templateUrl: 'app/components/home/app.html',
        directives: [EventsDir],
        styles: [`
    .active {  color: green;  }
    .inactive { color: red;  }
    .error {  background: red;  color: white;  }
` ]

    })

    export class HomePage{
        errorCount: Number;
        users: Array<Object>;
        modelBinding:string;

        constructor(){
            this.errorCount = 2;
            
            this.users = [
                {id: 1, name: "user1"},
                {id: 2, name: "user2"},
                {id: 3, name: "user3"},
                {id: 4, name: "user4"},
            ];
        
        this.modelBinding = "datos iniciales";
        }
    }