import {Component} from "angular2/core";
import {FormBuilder, FORM_DIRECTIVES, Control, Validators, ControlGroup, AbstractControl} from "angular2/common";


    @Component({
        selector: "my-app",
        templateUrl: 'app/components/home/app.html',
        directives: [FORM_DIRECTIVES]

    })

    export class HomePage{
            heroForm: ControlGroup; /*variable en el html*/
            name: AbstractControl;
            powers: AbstractControl;
            age: AbstractControl;
            constructor(builder: FormBuilder){
                this.heroForm = builder.group({
                    name: ["", Validators.compose(
                        [
                            Validators.required, Validators.minLength(2)
                        ]
                    )],

                    powers: ["", Validators.compose(
                        [
                            Validators.required, Validators.maxLength(4)
                        ]

                    )],
                    age: ["", Validators.compose(
                        [
                            Validators.required, this.ageValidator
                        ]
                    )]

                });

            this.name = this.heroForm.controls['name'];
            this.powers = this.heroForm.controls['powers'];
            this.age = this.heroForm.controls['age'];

            this.name.valueChanges.subscribe(
                (value:string) =>{
                    console.log("valor del nombre: "+ value);
                }
            )
            this.powers.valueChanges.subscribe(
                    (value:string) =>{
                        console.log("valor de poderes: "+ value);
                    }
                )
            this.age.valueChanges.subscribe(
                    (value:string) =>{
                        console.log("valor del edad: "+ value);
                    }
                )
            this.heroForm.valueChanges.subscribe(
                    (value:string) =>{
                        console.log("El formulario de heroes ha cambiado ", value);
                    }
                )
            }

        private ageValidator(control:Control):{[s: string]: boolean}{
            if(!control.value.match(/^[1-9][0-9]?$|^100$/)){
                /*Siempre se devuelve un string y un booleano */
                return {'invalidAge': true};
            }
        }
    }