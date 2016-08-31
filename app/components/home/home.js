System.register(["angular2/core", "../../directives/events"], function(exports_1, context_1) {
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
    var core_1, events_1;
    var HomePage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            }],
        execute: function() {
            HomePage = (function () {
                function HomePage() {
                    this.errorCount = 2;
                    this.users = [
                        { id: 1, name: "user1" },
                        { id: 2, name: "user2" },
                        { id: 3, name: "user3" },
                        { id: 4, name: "user4" },
                    ];
                    this.modelBinding = "datos iniciales";
                }
                HomePage = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: 'app/components/home/app.html',
                        directives: [events_1.EventsDir],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomePage);
                return HomePage;
            }());
            exports_1("HomePage", HomePage);
        }
    }
});
//# sourceMappingURL=home.js.map