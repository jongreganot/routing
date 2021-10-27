import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class ArchiveComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        let params = this.route.snapshot.paramMap;
        this.year = Number(params.get('year'));
        this.month = Number(params.get('month'));
    }
    viewAll() {
        this.router.navigate(['/']);
    }
}
ArchiveComponent.ɵfac = function ArchiveComponent_Factory(t) { return new (t || ArchiveComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
ArchiveComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ArchiveComponent, selectors: [["app-archive"]], decls: 8, vars: 2, consts: [[3, "click"]], template: function ArchiveComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, " archive works! ");
        i0.ɵɵelement(2, "br");
        i0.ɵɵtext(3);
        i0.ɵɵelement(4, "br");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 0);
        i0.ɵɵlistener("click", function ArchiveComponent_Template_button_click_6_listener() { return ctx.viewAll(); });
        i0.ɵɵtext(7, "View All");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" Year: ", ctx.year, " ");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" Month: ", ctx.month, "\n");
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ArchiveComponent, [{
        type: Component,
        args: [{
                selector: 'app-archive',
                templateUrl: './archive.component.html',
                styleUrls: ['./archive.component.css']
            }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=archive.component.js.map