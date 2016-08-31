import {Component} from "angular2/core";
import {CustomValidator} from "../../modules/validator"
    @Component({
        selector: "my-app",
        templateUrl: 'app/components/home/app.html',

    })

    export class HomePage{
        constructor(){
            console.log(new CustomValidator.EmailValid().isValid("paco@paco.es"));

            let testPass = new CustomValidator.PasswordStrenght("123456");
            let score = testPass.scorePassword();
            console.log(testPass.checkPassStrength(score)); 

        }


        

    }