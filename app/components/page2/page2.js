System.register(["angular2/core", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var Page2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Page2 = (function () {
                function Page2(router) {
                    this.router = router;
                    this.router = router;
                }
                Page2.prototype.goPage1 = function () {
                    this.router.navigate(["/Page1"]);
                };
                Page2.prototype.goPage1detail = function (number) {
                    this.router.navigate(["/Page1Detail", { id: number }]);
                };
                Page2 = __decorate([
                    core_1.Component({
                        template: "\n        <p>P\u00E1gina 2</p>\n        <p><a href=\"#\" (click)=\"goPage1()\">Ir a la p\u00E1gina 1</a></p>\n        <p><a href=\"#\" (click)=\"goPage1detail(1)\">Ir a la p\u00E1gina 1 de detalles</a></p>\n",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Page2);
                return Page2;
            }());
            exports_1("Page2", Page2);
        }
    }
});
//# sourceMappingURL=page2.js.map