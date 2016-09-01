import {Component} from "angular2/core";
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
@Component({
    templateUrl: 'app/components/page1/page1.html',
    directives: [ROUTER_DIRECTIVES]
})

export class Page1{
    constructor(public routeParams: RouteParams){
        console.log(this.routeParams.get("id"));
    }




}