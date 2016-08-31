export class Member {
    private username:String;
    private isLogged:Boolean = false;

    constructor(username: string) {
        this.username = username;
    }

    setIsLogged(isLogged) {
        this.isLogged = isLogged;
    }

    getIsLogged() {
        return this.isLogged;
    }

    setUsername(username) {
        this.username = username;
    }

    getUsername() {
        return this.username;
    }
} 