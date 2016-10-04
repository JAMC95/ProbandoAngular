import {Component} from "angular2/core";
import {Api} from "../../providers/api/api"
import {HTTP_PROVIDERS} from "angular2/http";


    @Component({
        selector: "my-app",
        templateUrl: 'app/components/home/app.html',
        providers: [Api, HTTP_PROVIDERS]

    })

    export class HomePage{
        api: Api;
        heroes: Array<Object>;
            constructor(api: Api){
                this.api = api;

                this.api.getHeroes().then(
                    (res) => {
                        this.heroes = res;
                    },
                    (error) => {
                        console.log(error);
                    }
                )
            }

        


        

    }