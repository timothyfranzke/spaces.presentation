import {NgModule} from "@angular/core";
import {CommandCenterComponent, NavigationComponent, PageComponent} from "./index";
import {RouterModule} from "@angular/router";
import {commandCenterRoutes} from "./command-center.routes";
import {} from "./navigation/navigation.component";

@NgModule({
    imports:[RouterModule.forChild(commandCenterRoutes)],
    declarations:[CommandCenterComponent, NavigationComponent, PageComponent]
})

export class CommandCenterModule{}