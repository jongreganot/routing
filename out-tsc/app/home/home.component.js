import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
const _c0 = function (a1, a2) { return ["/archive", a1, a2]; };
function HomeComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const archive_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(2, _c0, archive_r1.year, archive_r1.month));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(archive_r1.year + "/" + archive_r1.month);
} }
export class HomeComponent {
    constructor() { }
    ngOnInit() {
        this.archives = [
            { year: 2017, month: 1 },
            { year: 2018, month: 2 },
            { year: 2019, month: 3 }
        ];
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "home works!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "ul");
        i0.ɵɵtemplate(3, HomeComponent_li_3_Template, 3, 5, "li", 0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.archives);
    } }, directives: [i1.NgForOf, i2.RouterLinkWithHref], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=home.component.js.map