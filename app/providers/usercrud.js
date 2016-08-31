System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserCrud;
    return {
        setters:[],
        execute: function() {
            UserCrud = (function () {
                function UserCrud() {
                }
                UserCrud.prototype.get = function () {
                    return [
                        {
                            "id": 1,
                            "name": "user1"
                        }
                    ];
                };
                UserCrud.prototype.find = function (id) {
                    return { id: id };
                };
                UserCrud.prototype.create = function (obj) {
                    return true;
                };
                UserCrud.prototype.update = function (obj) {
                    return true;
                };
                UserCrud.prototype.deleteID = function (id) {
                    return true;
                };
                return UserCrud;
            }());
            exports_1("UserCrud", UserCrud);
        }
    }
});
//# sourceMappingURL=usercrud.js.map