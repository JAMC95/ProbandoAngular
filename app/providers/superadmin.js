System.register(["./member"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var member_1;
    var SuperAdmin;
    return {
        setters:[
            function (member_1_1) {
                member_1 = member_1_1;
            }],
        execute: function() {
            SuperAdmin = (function (_super) {
                __extends(SuperAdmin, _super);
                function SuperAdmin() {
                    _super.call(this, "superadmin");
                }
                SuperAdmin.prototype.isUserLogged = function () {
                    return _super.prototype.getIsLogged.call(this);
                };
                SuperAdmin.prototype.getUsername = function () {
                    return _super.prototype.getUsername.call(this);
                };
                return SuperAdmin;
            }(member_1.Member));
            exports_1("SuperAdmin", SuperAdmin);
        }
    }
});
//# sourceMappingURL=superadmin.js.map