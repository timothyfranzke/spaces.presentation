import { Component } from '@angular/core';

@Component({
    selector: 'navigation',
    templateUrl:'/app/command-center/navigation/navigation.component.html',
    styles: [
        `
            li > a.active {color:#F97924;}
        `
    ]
})
export class NavigationComponent{

}