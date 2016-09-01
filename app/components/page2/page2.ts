import {Component} from "angular2/core";
import {Router} from "angular2/router";

@Component({
    template: `
        <p>Página 2</p>
        <p><a href="#" (click)="goPage1()">Ir a la página 1</a></p>
        <p><a href="#" (click)="goPage1detail(1)">Ir a la página 1 de detalles</a></p>
`,

})

export class Page2{
    constructor(private router: Router){
        this.router = router;
    }
    goPage1(){
        this.router.navigate(["/Page1"]);
    }
    goPage1detail(number: Number){
        this.router.navigate(["/Page1Detail", {id:number}]);
    }




}