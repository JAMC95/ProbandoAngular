import {Pipe} from "angular2/core";

@Pipe({
    name: "join"
})

export class JoinPipe{
    transform(arr: Array<any>, args: Array<any>):string{
        return arr.join(args[0]);
    }
}