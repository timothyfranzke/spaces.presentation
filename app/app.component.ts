import {Component} from "@angular/core";
@Component({
    selector: 'spaces-app',
    template:`
    <h1>Hello World</h1>
    <h3>Welcome to Spaces</h3>
    <a [routerLink]="['/command']">command</a>
    <router-outlet></router-outlet>
    `
})
export class AppComponent{}