"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var CommandCenterComponent = (function () {
    function CommandCenterComponent() {
    }
    CommandCenterComponent = __decorate([
        core_1.Component({
            template: "\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <span>navigation</span>\n        <div class=\"col-sm-3 col-lg-2\">\n            <navigation class=\"col-sm-3 col-lg-2\"></navigation>\n        </div>\n        <div class=\"col-sm-9 col-lg-10\">\n            <command-page class=\"col-sm-9 col-lg-10\"></command-page> \n        </div>\n      </div>\n    </div>       \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CommandCenterComponent);
    return CommandCenterComponent;
}());
exports.CommandCenterComponent = CommandCenterComponent;
//# sourceMappingURL=command-center.component.js.map