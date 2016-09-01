import {Component} from "angular2/core";
import {Page1} from "../page1/page1";
import {Page2} from "../page2/page2";
import {
    RouteConfig,
    ROUTER_DIRECTIVES
} from "angular2/router";

    @Component({
        selector: "my-app",
        templateUrl: 'app/components/home/app.html',
        directives: [ROUTER_DIRECTIVES]

    })

    @RouteConfig([
        {path: '/', name: 'root', redirectTo: ['/Page1']},
        {path: '/page1', name: 'Page1', component: Page1},
        {path: '/page1/:id', name: 'Page1Detail', component: Page1},
        {path: '/page2', name: 'Page2', component: Page2},

    ])
    export class HomePage{
        constructor(){


        }


        

    }