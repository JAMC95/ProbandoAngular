import {iCrud} from "../interfaces/icrud";

export class UserCrud implements iCrud{
    constructor(){

    }


    get() {
        return  [
            {
                "id": 1,
                "name": "user1"
            }
        ]
    }

    find(id:Number){
        return {id: id};
    }

    create(obj:Object) {
        return true;
    }

    update(obj:Object){
        return true;
    }

    deleteID(id:Number){
        return true;
    }
}