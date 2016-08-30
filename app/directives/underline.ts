import { Directive, ElementRef, Renderer} from "angular2/core";

@Directive({
    selector: "[underline]"
})

export class Underline{
    constructor(private _element: ElementRef, private _renderer:Renderer){
        _renderer.setElementStyle(_element,"text-decoration", "underline");
        _renderer.setElementStyle(_element,"color", "red");
        _renderer.setElementAttribute(_element,"data-name", "underline");
        _renderer.setElementClass(_element,"customClass", true);

    }
}