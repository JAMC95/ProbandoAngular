import {Pipe} from "angular2/core";

@Pipe({
    name: "pipeh2"
})

export class H2Pipe{
    transform(value: string, args: string[]): string{
        return "<h2>"+value+"</h2>";
    }
}