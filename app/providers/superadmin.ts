import {Member} from "./member";

export class SuperAdmin extends Member {
    constructor() {
        super("superadmin");
    }

    isUserLogged() {
        return super.getIsLogged();
    }

    getUsername() {
        return super.getUsername();
    }
}