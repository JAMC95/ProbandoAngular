System.register(["angular2/core", "angular2/common"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var HomePage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            HomePage = (function () {
                function HomePage(builder) {
                    this.heroForm = builder.group({
                        name: ["", common_1.Validators.compose([
                                common_1.Validators.required, common_1.Validators.minLength(2)
                            ])],
                        powers: ["", common_1.Validators.compose([
                                common_1.Validators.required, common_1.Validators.maxLength(4)
                            ])],
                        age: ["", common_1.Validators.compose([
                                common_1.Validators.required, this.ageValidator
                            ])]
                    });
                    this.name = this.heroForm.controls['name'];
                    this.powers = this.heroForm.controls['powers'];
                    this.age = this.heroForm.controls['age'];
                    this.name.valueChanges.subscribe(function (value) {
                        console.log("valor del nombre: " + value);
                    });
                    this.powers.valueChanges.subscribe(function (value) {
                        console.log("valor de poderes: " + value);
                    });
                    this.age.valueChanges.subscribe(function (value) {
                        console.log("valor del edad: " + value);
                    });
                    this.heroForm.valueChanges.subscribe(function (value) {
                        console.log("El formulario de heroes ha cambiado ", value);
                    });
                }
                HomePage.prototype.ageValidator = function (control) {
                    if (!control.value.match(/^[1-9][0-9]?$|^100$/)) {
                        /*Siempre se devuelve un string y un booleano */
                        return { 'invalidAge': true };
                    }
                };
                HomePage = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: 'app/components/home/app.html',
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], HomePage);
                return HomePage;
            }());
            exports_1("HomePage", HomePage);
        }
    }
});
//# sourceMappingURL=home.js.map