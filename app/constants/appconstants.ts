import {provide, Provider} from "angular2/core";

export class ViewConstantApp{
    private _constantView:string = "Constante de vista";

    get constView(): string{
        return this._constantView;
    }
}
export class ConfigConstantApp{
    private _constantConfig:string = "Constante de configuracion de la app";

    get constConfig(): string{
        return this._constantConfig;
    }
}

export const CONSTANT_PROVIDER:Provider[] = [
    provide(ConfigConstantApp, {useClass:ConfigConstantApp}),
    provide(ViewConstantApp, {useClass:ViewConstantApp}),

]