System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var ViewConstantApp, ConfigConstantApp, CONSTANT_PROVIDER;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ViewConstantApp = (function () {
                function ViewConstantApp() {
                    this._constantView = "Constante de vista";
                }
                Object.defineProperty(ViewConstantApp.prototype, "constView", {
                    get: function () {
                        return this._constantView;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ViewConstantApp;
            }());
            exports_1("ViewConstantApp", ViewConstantApp);
            ConfigConstantApp = (function () {
                function ConfigConstantApp() {
                    this._constantConfig = "Constante de configuracion de la app";
                }
                Object.defineProperty(ConfigConstantApp.prototype, "constConfig", {
                    get: function () {
                        return this._constantConfig;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ConfigConstantApp;
            }());
            exports_1("ConfigConstantApp", ConfigConstantApp);
            exports_1("CONSTANT_PROVIDER", CONSTANT_PROVIDER = [
                core_1.provide(ConfigConstantApp, { useClass: ConfigConstantApp }),
                core_1.provide(ViewConstantApp, { useClass: ViewConstantApp }),
            ]);
        }
    }
});
//# sourceMappingURL=appconstants.js.map