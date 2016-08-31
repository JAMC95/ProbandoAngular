import {Component} from "angular2/core";
import {UserCrud} from "../../providers/usercrud"
    @Component({
        selector: "my-app",
        templateUrl: 'app/components/home/app.html',
        providers: [UserCrud]

    })

    export class HomePage{
        constructor(public userCrud: UserCrud){
            console.log(userCrud);

        }


        

    }