System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CustomValidator;
    return {
        setters:[],
        execute: function() {
            (function (CustomValidator) {
                var EmailValid = (function () {
                    function EmailValid() {
                    }
                    EmailValid.prototype.isValid = function (email) {
                        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                        return re.test(email);
                    };
                    return EmailValid;
                }());
                CustomValidator.EmailValid = EmailValid;
                var PasswordStrenght = (function () {
                    function PasswordStrenght(pass) {
                        this.pass = pass;
                    }
                    //http://stackoverflow.com/questions/948172/password-strength-meter
                    PasswordStrenght.prototype.scorePassword = function () {
                        var score = 0;
                        if (!this.pass)
                            return score;
                        // award every unique letter until 5 repetitions
                        var letters = new Object();
                        for (var i = 0; i < this.pass.length; i++) {
                            letters[this.pass[i]] = (letters[this.pass[i]] || 0) + 1;
                            score += 5.0 / letters[this.pass[i]];
                        }
                        // bonus points for mixing it up
                        var variations = {
                            digits: /\d/.test(this.pass),
                            lower: /[a-z]/.test(this.pass),
                            upper: /[A-Z]/.test(this.pass),
                            nonWords: /\W/.test(this.pass),
                        };
                        var variationCount = 0;
                        for (var check in variations) {
                            variationCount += (variations[check] == true) ? 1 : 0;
                        }
                        score += (variationCount - 1) * 10;
                        return score;
                    };
                    PasswordStrenght.prototype.checkPassStrength = function (score) {
                        if (score > 80)
                            return "strong";
                        if (score > 60)
                            return "good";
                        if (score >= 30)
                            return "weak";
                        return "";
                    };
                    return PasswordStrenght;
                }());
                CustomValidator.PasswordStrenght = PasswordStrenght;
                function testing() {
                }
                CustomValidator.testing = testing;
            })(CustomValidator = CustomValidator || (CustomValidator = {}));
            exports_1("CustomValidator", CustomValidator);
        }
    }
});
//# sourceMappingURL=validator.js.map