import { Directive, ElementRef, Renderer} from "angular2/core";

@Directive({
    selector: "[events-dir]",
    host: {
        "(mouseenter)": "onMouseEnter()",
        "(mouseleave)": "onMouseLeave()",
        "(click)": "onClick()",
    }
})

export class EventsDir{

    onMouseEnter(){
        console.log("Mouse enter");
    }

    onMouseLeave(){
        console.log("Mouse leave");
    }

    onClick(){
        console.log("Mouse click");
    }

}