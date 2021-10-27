import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ArchiveComponent } from './archive/archive.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    { path: '', component: HomeComponent },
    { path: 'archive/:year/:month', component: ArchiveComponent },
    { path: '**', component: NotFoundComponent }
];
export class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[
            BrowserModule,
            AppRoutingModule,
            RouterModule.forRoot(routes)
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
                    ArchiveComponent,
                    HomeComponent,
                    NotFoundComponent
                ],
                imports: [
                    BrowserModule,
                    AppRoutingModule,
                    RouterModule.forRoot(routes)
                ],
                providers: [],
                bootstrap: [AppComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        ArchiveComponent,
        HomeComponent,
        NotFoundComponent], imports: [BrowserModule,
        AppRoutingModule, i1.RouterModule] }); })();
//# sourceMappingURL=app.module.js.map