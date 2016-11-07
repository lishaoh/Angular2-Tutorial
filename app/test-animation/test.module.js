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
var shared_module_1 = require("../shared/shared.module");
var test_component_1 = require("./test.component");
var test_routing_module_1 = require("./test-routing.module");
var hero_birthday1_component_1 = require("../pipe/hero-birthday1.component");
var exponential_strength_pipe_1 = require("../pipe/exponential-strength.pipe");
var power_boost_calculator_component_1 = require("../pipe/power-boost-calculator.component");
var TestModule = (function () {
    function TestModule() {
    }
    return TestModule;
}());
TestModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule, test_routing_module_1.TestRoutingModule],
        declarations: [
            test_component_1.TestComponent,
            hero_birthday1_component_1.HeroBirthdayComponent,
            exponential_strength_pipe_1.ExponentialStrengthPipe,
            power_boost_calculator_component_1.PowerBoostCalculatorComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], TestModule);
exports.TestModule = TestModule;
//# sourceMappingURL=test.module.js.map