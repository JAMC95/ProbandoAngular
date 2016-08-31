import {bootstrap} from "angular2/platform/browser";
import {HomePage} from "./components/home/home";
import {H1Pipe} from "./pipes/h1pipe";
import {H2Pipe} from "./pipes/h2pipe";
import {PLATFORM_PIPES, provide} from "angular2/core"
bootstrap(
    HomePage,
    [provide(PLATFORM_PIPES, {useValue: [H1Pipe,H2Pipe],multi:true})]
);