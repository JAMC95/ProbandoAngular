System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Member;
    return {
        setters:[],
        execute: function() {
            Member = (function () {
                function Member(username) {
                    this.isLogged = false;
                    this.username = username;
                }
                Member.prototype.setIsLogged = function (isLogged) {
                    this.isLogged = isLogged;
                };
                Member.prototype.getIsLogged = function () {
                    return this.isLogged;
                };
                Member.prototype.setUsername = function (username) {
                    this.username = username;
                };
                Member.prototype.getUsername = function () {
                    return this.username;
                };
                return Member;
            }());
            exports_1("Member", Member);
        }
    }
});
//# sourceMappingURL=member.js.map