import {Pipe} from "angular2/core";

@Pipe({
    name: "pipeh1"
})

export class H1Pipe{
    transform(value: string, args: string[]): string{
        return "<h1>"+value+"</h1>";
    }
}