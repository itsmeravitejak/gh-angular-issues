webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  margin-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n\n\n\n<div class=\"container\">\n  <form class=\"\" (ngSubmit)=\"onSubmit()\" #repoForm=\"ngForm\">\n  \t<div class=\"row\">\n          <div class=\"col-md-12\">\n\n                  <input [(ngModel)]=\"search.username\" name=\"username\" class=\"col-md-3\" type=\"text\" placeholder=\"Enter Github Username\" >\n                  <input [(ngModel)]=\"search.reponame\" name=\"reponame\" class=\"col-md-3\" type=\"text\" placeholder=\"Enter Github Reponame\" >\n                  <button  type=\"submit\" class=\"btn btn-primary\">Go</button>\n\n          </div>\n      </div>\n    </form>\n</div>\n<!-- <div class=\"container\" *ngIf=\"ajaxState!='init'\">\n  <form class=\"\" (ngSubmit)=\"onSubmit()\" #searchForm=\"ngForm\">\n  \t<div class=\"row\">\n          <div class=\"col-md-12\">\n\n                  <input [(ngModel)]=\"search.query\" name=\"query\" class=\"col-md-3\" type=\"text\" placeholder=\"Search\" >\n\n                  <button  type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n\n          </div>\n      </div>\n    </form>\n</div> -->\n<div class=\"container\" *ngIf=\"ajaxState=='loading'\">\n Loading...\n</div>\n<div class=\"container\" *ngIf=\"ajaxState=='done'\">\n\n  <table  class=\"table table-striped table-bordered table-list\">\n                    <thead>\n                      <tr>\n                          <th class=\"hidden-xs\">ID</th>\n                          <th>Issue Title</th>\n                          <th>Assignees</th>\n                          <th>State</th>\n                          <th>Patch Url</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                            <tr *ngFor=\"let repo of repos; \">\n                              <td class=\"hidden-xs\">{{repo.number}}</td>\n                              <td>{{repo.title}}</td>\n                              <td><a target=\"_blank\" href={{assignee.html_url}} *ngFor=\"let assignee of repo.assignees;let isLast=last\">{{assignee.login}}{{isLast ? '' : ', '}}</a ></td>\n                              <!-- <td ng-show=\"assignee!=null\">{{assignee.login}}</td> -->\n                              <td>{{repo.state}}</td>\n                              <td ><a href=\"{{repo.pull_request.html_url}}\" *ngIf=\"repo.pull_request\">Link</a></td>\n                            </tr>\n                          </tbody>\n                  </table>\n\n</div>\n\n<div class=\"container\" *ngIf=\"ajaxState=='done'\">\n  <nav aria-label=\"\">\n  <ul class=\"pagination pagination-lg\">\n    <li class=\"page-item \">\n      <a class=\"page-link\" (click)=\"gotoPage(firstpage)\" href=\"#\" tabindex=\"-1\">First</a>\n    </li>\n    <li class=\"page-item\" *ngIf=\"currentpage!=firstpage\"><a class=\"page-link\" (click)=\"gotoPage(currentpage-1)\" href=\"#\">{{currentpage-1}}</a></li>\n    <li class=\"page-item  active\" ><a   class=\"page-link\" href=\"#\">{{currentpage}}</a></li>\n    <li class=\"page-item\" *ngIf=\"currentpage!=lastpage\"><a class=\"page-link\" (click)=\"gotoPage(currentpage+1)\" href=\"#\">{{currentpage+1}}</a></li>\n    <li class=\"page-item\">\n      <a class=\"page-link\"(click)=\"gotoPage(lastpage)\" href=\"#\">Last</a>\n    </li>\n  </ul>\n</nav>\n</div>\n<!-- <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repo_service__ = __webpack_require__("../../../../../src/app/repo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(repoService) {
        this.repoService = repoService;
        this.repos = [];
        this.search = { reponame: "", username: "" };
        this.title = 'app';
        this.ajaxState = 'init';
        this.firstpage = 1;
        this.lastpage = 1;
        this.currentpage = 1;
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.repoService.getRepos()
        //     .then(repos => this.repos = repos);
    };
    AppComponent.prototype.gotoPage = function (page) {
        this.currentpage = page;
        this.onSubmit();
    };
    AppComponent.prototype.onSubmit = function () {
        var curren_obj = this;
        curren_obj.ajaxState = 'loading';
        var cachedresult = sessionStorage.getItem(curren_obj.search.username + "_" + curren_obj.search.reponame + "_" + curren_obj.currentpage);
        if (cachedresult && JSON.parse(cachedresult).expiry >= (new Date).getTime()) {
            console.log("from cache");
            var data = JSON.parse(cachedresult);
            curren_obj.ajaxState = 'done';
            if (data['lastpage'])
                curren_obj.lastpage = data['lastpage'];
            return curren_obj.repos = data['response']['body'];
        }
        else {
            this.repoService.getRepos(curren_obj.search.username, curren_obj.search.reponame, curren_obj.currentpage).then(function (data) {
                console.log("from api call");
                curren_obj.ajaxState = 'done';
                if (data['lastpage'])
                    curren_obj.lastpage = data['lastpage'];
                curren_obj.repos = data['response']['body'];
                data['expiry'] = (new Date).getTime() + (30 * 60 * 1000);
                sessionStorage.setItem(curren_obj.search.username + "_" + curren_obj.search.reponame + "_" + curren_obj.currentpage, JSON.stringify(data));
            });
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__repo_service__["a" /* RepoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__repo_service__["a" /* RepoService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__repo_service__ = __webpack_require__("../../../../../src/app/repo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot([])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__repo_service__["a" /* RepoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/repo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RepoService = (function () {
    function RepoService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.issuesurl = 'https://api.github.com/repos'; // URL to web api
    }
    RepoService.prototype.getRepos = function (username, reponame, page) {
        var params = new URLSearchParams();
        params.set('state', 'all');
        params.set('page', page.toString());
        return this.http.get(this.issuesurl + "/" + username + "/" + reponame + "/" + "issues" + "?" + params.toString(), { observe: 'response' })
            .toPromise()
            .then(function (response) {
            var links = response.headers.get("link").split(",");
            var lastpage;
            for (var i = 0; i < links.length; i++) {
                if (links[i].indexOf("last") > -1) {
                    lastpage = links[i].replace("<", "").replace(">", "").split(";")[0].trim();
                    var templastpage = lastpage;
                    for (var j = 0; j < templastpage.split("?")[1].split("&").length; j++) {
                        if (templastpage.split("?")[1].split("&")[j].indexOf("page") > -1)
                            lastpage = parseInt(templastpage.split("?")[1].split("&")[j].split("=")[1]);
                    }
                }
            }
            return { "lastpage": lastpage, "response": response };
        })
            .catch(this.handleError);
    };
    RepoService.prototype.test = function (name) {
        console.log("came toreposervice with this " + name);
        return 2;
    };
    // getHero(id: number): Promise<Hero> {
    //   const url = `${this.heroesUrl}/${id}`;
    //   return this.http.get(url)
    //     .toPromise()
    //     .then(response => response.json().data as Hero)
    //     .catch(this.handleError);
    // }
    //
    // delete(id: number): Promise<void> {
    //   const url = `${this.heroesUrl}/${id}`;
    //   return this.http.delete(url, {headers: this.headers})
    //     .toPromise()
    //     .then(() => null)
    //     .catch(this.handleError);
    // }
    //
    // create(name: string): Promise<Hero> {
    //   return this.http
    //     .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    //     .toPromise()
    //     .then(res => res.json().data as Hero)
    //     .catch(this.handleError);
    // }
    //
    // update(hero: Hero): Promise<Hero> {
    //   const url = `${this.heroesUrl}/${hero.id}`;
    //   return this.http
    //     .put(url, JSON.stringify(hero), {headers: this.headers})
    //     .toPromise()
    //     .then(() => hero)
    //     .catch(this.handleError);
    // }
    RepoService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return RepoService;
}());
RepoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], RepoService);

var _a;
//# sourceMappingURL=repo.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map