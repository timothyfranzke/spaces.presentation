import {Routes} from "@angular/router";
import {CommandCenterComponent} from "./command-center/command-center.component";
export const appRoutes:Routes = [
    { path: 'command', loadChildren: 'app/command-center/command-center.module#CommandCenterModule'}
/*
    { path: 'command-center', loadChildren: '.app/command-center/command-center.module#CommandCenterModule'}
*/
];