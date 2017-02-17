import {Component} from "@angular/core";
@Component({
    template:`
    <div class="container-fluid">
      <div class="row">
        <span>navigation</span>
        <div class="col-sm-3 col-lg-2">
            <navigation class="col-sm-3 col-lg-2"></navigation>
        </div>
        <div class="col-sm-9 col-lg-10">
            <command-page class="col-sm-9 col-lg-10"></command-page> 
        </div>
      </div>
    </div>       
    `
})
export class CommandCenterComponent{}