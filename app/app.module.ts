import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";

@NgModule({
    imports:[BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})

export class AppModule{}