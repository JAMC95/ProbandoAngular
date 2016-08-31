export module CustomValidator {
    export class EmailValid {
        isValid(email:string):boolean {
            let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            return re.test(email);
        }
    }

    export class PasswordStrenght {
        pass:string;

        constructor(pass:string) {
            this.pass = pass;
        }

        //http://stackoverflow.com/questions/948172/password-strength-meter
        public scorePassword() {
            let score = 0;
            if (!this.pass)
                return score;

            // award every unique letter until 5 repetitions
            let letters = new Object();
            for (let i = 0; i < this.pass.length; i++) {
                letters[this.pass[i]] = (letters[this.pass[i]] || 0) + 1;
                score += 5.0 / letters[this.pass[i]];
            }

            // bonus points for mixing it up
            let variations = {
                digits: /\d/.test(this.pass),
                lower: /[a-z]/.test(this.pass),
                upper: /[A-Z]/.test(this.pass),
                nonWords: /\W/.test(this.pass),
            }

            let variationCount = 0;
            for (let check in variations) {
                variationCount += (variations[check] == true) ? 1 : 0;
            }
            score += (variationCount - 1) * 10;

            return score;
        }

        public checkPassStrength(score) {

            if (score > 80)
                return "strong";
            if (score > 60)
                return "good";
            if (score >= 30)
                return "weak";

            return "";
        }
    }

    export function testing() {

    }
}