webpackJsonp([9],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_leader_leader__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, leaderservice, BaseURL) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.leaderservice = leaderservice;
        this.BaseURL = BaseURL;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderservice.getLeaders().subscribe(function (leaders) { return _this.leaders = leaders; });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-card>\n  <ion-card-content>\n\n<ion-card-title color="primary">Our History</ion-card-title>\n                <p>Started in 2018, AI Playground allows people to use browser as an AI environment.</p>\n                <p>This website traces its humble beginnings to a coursework requirement.</p>\n</ion-card-content>\n</ion-card>\n\n\n<ion-card>\n  <ion-card-content>\n\n<ion-card-title color="primary">Learn about some experts in the field of AI</ion-card-title>\n\n<div [hidden]="leaders ">\n  <ion-spinner></ion-spinner>\n  <h4>Loading . . . Please Wait</h4>\n</div>\n\n<ion-list>\n  <ion-item *ngFor="let leader of leaders" text-wrap>\n    <ion-avatar item-start>\n      <img src="{{BaseURL +leader.image}}">\n    </ion-avatar>\n    <h2>{{leader.name}}</h2>\n    <h3>{{leader.designation}}</h3>\n    <p>{{leader.description}}</p>\n  </ion-item>\n</ion-list>\n\n\n</ion-card-content>\n</ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/about/about.html"*/,
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_leader_leader__["a" /* LeaderProvider */], Object])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, emailComposer, callNumberProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.callNumberProvider = callNumberProvider;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.sendEmail = function () {
        var email = {
            to: 'confusion@example.net',
            subject: '[ConFusion]: Query',
            body: 'Dear Sir/Madam:',
            isHtml: true
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    };
    ContactPage.prototype.callRestaurant = function () {
        this.callNumberProvider.callNumber("85212345678", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/contact/contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-card>\n  <ion-card-content>\n    <ion-card-title color="primary">Location Information</ion-card-title>\n    <p>\n      121, Clear Water Bay Road<br/>\nClear Water Bay, Anytown<br/>\nUSA<br/>\n<ion-icon name="call"></ion-icon> : 1-800-444-4444<br/>\n<ion-icon name="print"></ion-icon> : 1-888-473-296<br/>\n<ion-icon name="mail"></ion-icon> : aip@example.net<br/>\n    </p>\n\n<a href="tel:85212345678">\n<button ion-button icon-left clear small (click)="callRestaurant()">\n    <div>\n        <ion-icon name="call"></ion-icon>\n        <label>Call</label>\n    </div>\n</button>    \n</a>\n\n<a href="mailto:confusion@food.net">\n<button ion-button icon-left clear small (click)="sendEmail()">\n    <div>\n        <ion-icon name="mail"></ion-icon>\n        <label>Email</label>\n    </div>\n</button>\n</a>    \n    \n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentPage = /** @class */ (function () {
    function CommentPage(navCtrl, navParams, viewCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.comment = this.formBuilder.group({
            ratingField: 3,
            authorField: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            commentField: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    CommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad commentPage');
    };
    CommentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CommentPage.prototype.onSubmit = function () {
        var data = { rating: this.comment.value.ratingField,
            author: this.comment.value.authorField,
            comment: this.comment.value.commentField,
            date: new Date().toISOString() };
        this.viewCtrl.dismiss(data);
    };
    CommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comment',template:/*ion-inline-start:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/comment/comment.html"*/'<!--\n  Generated template for the CommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>comment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-toolbar color="primary-pale">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Add Comment</ion-title>\n  </ion-toolbar>\n\n    <form [formGroup]="comment" (ngSubmit)="onSubmit()">\n      <ion-item>\n        <ion-label>Rating</ion-label>\n         <ion-range min="1" max="5" step="1" snaps="true" formControlName="ratingField">\n         </ion-range>\n      </ion-item>\n      <ion-item>\n        <ion-label>Author</ion-label>\n        <ion-input type="text" value="" formControlName="authorField"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Comment</ion-label>\n         <ion-input type="text" value="" formControlName="commentField"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" [disabled]="!comment.valid">Save</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/comment/comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CommentPage);
    return CommentPage;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_comment_comment__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DishdetailPage = /** @class */ (function () {
    function DishdetailPage(navCtrl, navParams, BaseURL, modalCtrl, favoriteservice, socialSharing, toastCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.BaseURL = BaseURL;
        this.modalCtrl = modalCtrl;
        this.favoriteservice = favoriteservice;
        this.socialSharing = socialSharing;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.dish = navParams.get('dish');
        this.favorite = favoriteservice.isFavorite(this.dish.id);
        this.evaluateComments();
    }
    DishdetailPage.prototype.evaluateComments = function () {
        this.numcomments = this.dish.comments.length;
        var total = 0;
        this.dish.comments.forEach(function (comment) { return total += comment.rating; });
        this.avgstars = (total / this.numcomments).toFixed(2);
    };
    DishdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DishdetailPage');
    };
    DishdetailPage.prototype.addToFavorites = function () {
        console.log('Adding to Favorites', this.dish.id);
        this.favorite = this.favoriteservice.addFavorite(this.dish.id);
        this.toastCtrl.create({
            message: 'Environment ' + this.dish.id + ' added as favorite successfully',
            position: 'middle',
            duration: 3000
        }).present();
    };
    DishdetailPage.prototype.openComment = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_comment_comment__["a" /* CommentPage */]);
        modal.onDidDismiss(function (data) {
            console.log(data);
            _this.dish.comments.push(data);
            _this.evaluateComments();
        });
        modal.present();
    };
    DishdetailPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Environment Actions',
            buttons: [
                {
                    text: 'Add to Favorites',
                    handler: function () {
                        _this.addToFavorites();
                    }
                }, {
                    text: 'Add a Comment',
                    handler: function () {
                        _this.openComment();
                    }
                },
                {
                    text: 'Share via Facebook',
                    handler: function () {
                        _this.socialSharing.shareViaFacebook(_this.dish.name + ' -- ' + _this.dish.description, _this.BaseURL + _this.dish.image, '')
                            .then(function () { return console.log('Posted successfully to Facebook'); })
                            .catch(function () { return console.log('Failed to post to Facebook'); });
                    }
                },
                {
                    text: 'Share via Twitter',
                    handler: function () {
                        _this.socialSharing.shareViaTwitter(_this.dish.name + ' -- ' + _this.dish.description, _this.BaseURL + _this.dish.image, '')
                            .then(function () { return console.log('Posted successfully to Twitter'); })
                            .catch(function () { return console.log('Failed to post to Twitter'); });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    DishdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dishdetail',template:/*ion-inline-start:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/dishdetail/dishdetail.html"*/'<!--\n  Generated template for the DishdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Environment Details</ion-title>\n\n    <ion-buttons right>\n      <button ion-button icon-only  (click)="presentActionSheet()"><ion-icon name="more"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-grid>\n  <ion-row align-items-center>\n    <ion-col col-12 col-lg-6>\n\n\n<ion-card *ngIf="dish">\n  <img src="{{BaseURL + dish.image}}"/>\n  <ion-card-content>\n    <ion-card-title>\n      {{dish.name | uppercase}}\n    </ion-card-title>\n    <p>\n      {{dish.description}}\n    </p>\n  </ion-card-content>\n  <ion-row>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="star"></ion-icon>\n        <div>{{ avgstars }} stars</div>\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-left clear small>\n        <ion-icon name="text"></ion-icon>\n        <div>{{ numcomments }} Comments</div>\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-card>\n<div [hidden]="dish || errMess">\n  <ion-spinner></ion-spinner>\n  <h4>Loading . . . Please Wait</h4>\n</div>\n<div *ngIf="errMess">\n  <h2>Error</h2>\n  <h4>{{errMess}}</h4>\n</div>\n\n    </ion-col>\n    <ion-col col-12 col-lg-6>\n\n\n<ion-list *ngIf="dish">\n  <ion-list-header>\n    Comments\n  </ion-list-header>\n  <ion-item *ngFor="let comment of dish.comments" text-wrap>\n    <h4> {{comment.comment}} </h4>\n    <p> {{comment.rating}} Stars</p>\n    <p>\n      <span> -- {{comment.author}} {{comment.date | date }} </span>\n    </p>\n  </ion-item>\n</ion-list>\n\n\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n<ion-fab bottom right [hidden]="favorite">\n  <button ion-fab (click)="addToFavorites()">\n    <ion-icon name="heart-outline"></ion-icon>\n  </button>\n</ion-fab>\n<ion-fab bottom right *ngIf="favorite">\n  <button ion-fab>\n    <ion-icon name="heart"></ion-icon>\n  </button>\n</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/dishdetail/dishdetail.html"*/,
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], Object, __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__["a" /* FavoriteProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], DishdetailPage);
    return DishdetailPage;
}());

//# sourceMappingURL=dishdetail.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(navCtrl, navParams, favoriteservice, BaseURL, toastCtrl, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoriteservice = favoriteservice;
        this.BaseURL = BaseURL;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    FavoritesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.favoriteservice.getFavorites()
            .subscribe(function (favorites) { return _this.favorites = favorites; }, function (errmess) { return _this.errMess = errmess; });
    };
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage.prototype.deleteFavorite = function (item, id) {
        var _this = this;
        console.log('delete', id);
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Do you want to delete Environment ' + id,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Delete cancelled');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Deleting . . .'
                        });
                        var toast = _this.toastCtrl.create({
                            message: 'Environment ' + id + ' deleted successfully',
                            duration: 3000
                        });
                        loading.present();
                        _this.favoriteservice.deleteFavorite(id)
                            .subscribe(function (favorites) { _this.favorites = favorites; loading.dismiss(); toast.present(); }, function (errmess) { _this.errMess = errmess; loading.dismiss(); });
                    }
                }
            ]
        });
        alert.present();
        item.close();
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/favorites/favorites.html"*/'<!--\n  Generated template for the FavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Favorites</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div *ngIf="favorites">\n    <ion-list>\n      <ion-item-sliding *ngFor="let favorite of favorites" #item>\n      <ion-item>\n        <ion-thumbnail item-left>\n          <img src="{{BaseURL + favorite.image}}" />\n        </ion-thumbnail>\n        <h3>{{ favorite.name }}</h3>\n        <p>{{ favorite.description }}</p>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="deleteFavorite(item, favorite.id)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n\n\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n  <div [hidden]="favorites || errMess">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="errMess">\n    <h2>Error</h2>\n    <h4>{{ errMess }}</h4>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/favorites/favorites.html"*/,
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_favorite_favorite__["a" /* FavoriteProvider */], Object, __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, formBuilder, storage, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.user = { username: '', password: '' };
        storage.get('user').then(function (user) {
            if (user) {
                console.log(user);
                _this.user = user;
                _this.loginForm
                    .patchValue({
                    'username': _this.user.username,
                    'password': _this.user.password
                });
            }
            else
                console.log('user not defined');
        });
        this.loginForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            remember: true
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.onSubmit = function () {
        console.log(this.loginForm.value, this.user);
        this.user.username = this.loginForm.get('username').value;
        this.user.password = this.loginForm.get('password').value;
        console.log(this.user);
        if (this.loginForm.get('remember').value)
            this.storage.set('user', this.user);
        else
            this.storage.remove('user');
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.openRegister = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
        modal.present();
        modal.onDidDismiss(function () { return _this.dismiss(); });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary-pale">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>    \n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" formControlName="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Remember Me</ion-label>\n      <ion-checkbox color="primary" formControlName="remember" checked="true"></ion-checkbox>\n    </ion-item>\n    <button ion-button type="submit" [disabled]="!loginForm.valid">Login</button>\n    <p>Do not have an account? then</p>\n    <button ion-button clear (click)="openRegister()">Register</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, viewCtrl, camera, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.image = 'assets/images/logo.png';
        this.registerForm = this.formBuilder.group({
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(25)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(25)]],
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(25)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(25)]],
            telnum: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(true);
    };
    RegisterPage.prototype.getPicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            targetHeight: 100,
            targetWidth: 100,
            correctOrientation: true,
            allowEdit: true,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            cameraDirection: this.camera.Direction.FRONT
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.image = imageData;
            console.log(imageData);
        }, function (err) {
            console.log('Error obtaining picture');
        });
    };
    RegisterPage.prototype.getFromLibrary = function () {
        var _this = this;
        var options = {
            quality: 100,
            targetHeight: 100,
            targetWidth: 100,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.image = imageData;
            console.log(imageData);
        }, function (err) {
            console.log('Error obtaining picture');
        });
    };
    RegisterPage.prototype.onSubmit = function () {
        console.log(this.registerForm.value);
        this.dismiss();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="primary-pale">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>    \n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header color="primary">Your Picture</ion-card-header>\n    <img src="{{image}}" />\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button small (click)="getPicture()">Take Picture</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button small (click)="getFromLibrary()">Get From Library</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-label floating>First Name</ion-label>\n      <ion-input type="text" formControlName="firstname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Last Name</ion-label>\n      <ion-input type="text" formControlName="lastname"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" formControlName="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" formControlName="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Tel. Number</ion-label>\n      <ion-input type="tel" formControlName="telnum"  pattern="[0-9]*"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" formControlName="email" email></ion-input>\n    </ion-item>\n    <button ion-button type="submit" [disabled]="!registerForm.valid">Register</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dish_dish__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dishdetail_dishdetail__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_favorite_favorite__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, dishservice, favoriteservice, toastCtrl, BaseURL) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dishservice = dishservice;
        this.favoriteservice = favoriteservice;
        this.toastCtrl = toastCtrl;
        this.BaseURL = BaseURL;
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getDishes()
            .subscribe(function (dishes) { return _this.dishes = dishes; }, function (errmess) { return _this.errMess = errmess; });
    };
    MenuPage.prototype.addToFavorites = function (dish) {
        console.log('Adding to Favorites', dish.id);
        this.favoriteservice.addFavorite(dish.id);
        this.toastCtrl.create({
            message: 'Environment ' + dish.id + ' added as a favorite successfully',
            duration: 3000
        }).present();
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.dishSelected = function (event, dish) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dishdetail_dishdetail__["a" /* DishdetailPage */], {
            dish: dish
        });
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/menu/menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Environments</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page">\n\n  <div *ngIf="dishes">\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-lg-4 *ngFor="let dish of dishes">\n        <ion-card (click)="dishSelected($event, dish)" (pan)="addToFavorites(dish)">\n          <img src="{{BaseURL + dish.image}}" />\n          <div class="card-title">{{ dish.name }}</div>\n          <div class="card-subtitle">{{ dish.description }}</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>  \n\n  </div>\n  <div [hidden]="dishes || errMess">\n    <ion-spinner></ion-spinner>\n    <h4>Loading . . . Please Wait</h4>\n  </div>\n  <div *ngIf="errMess">\n    <h2>Error</h2>\n    <h4>{{errMess}}</h4>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/menu/menu.html"*/,
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dish_dish__["a" /* DishProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_favorite_favorite__["a" /* FavoriteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], Object])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservationPage = /** @class */ (function () {
    function ReservationPage(navCtrl, navParams, viewCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.reservation = this.formBuilder.group({
            guests: 3,
            smoking: false,
            dateTime: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    ReservationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservationPage');
    };
    ReservationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReservationPage.prototype.onSubmit = function () {
        console.log(this.reservation.value);
        this.viewCtrl.dismiss();
    };
    ReservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservation',template:/*ion-inline-start:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/reservation/reservation.html"*/'<!--\n  Generated template for the ReservationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Request environment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-toolbar color="primary-pale">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Request Environment</ion-title>\n  </ion-toolbar>\n\n    <form [formGroup]="reservation" (ngSubmit)="onSubmit()">\n      <ion-item>\n        <ion-label>Complexity</ion-label>\n        <ion-select formControlName="guests">\n          <ion-option value=1>1</ion-option>\n          <ion-option value=2>2</ion-option>\n          <ion-option value=3>3</ion-option>\n          <ion-option value=4>4</ion-option>\n          <ion-option value=5>5</ion-option>\n          <ion-option value=6>6</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Deep Learning/Classical</ion-label>\n        <ion-toggle formControlName="smoking" checked="true"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Environment Details</ion-label>\n        <ion-input type="text" formControlName="dateTime"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" [disabled]="!reservation.valid">Request</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/reservation/reservation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ReservationPage);
    return ReservationPage;
}());

//# sourceMappingURL=reservation.js.map

/***/ }),

/***/ 131:
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
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		317,
		8
	],
	"../pages/comment/comment.module": [
		319,
		7
	],
	"../pages/contact/contact.module": [
		318,
		6
	],
	"../pages/dishdetail/dishdetail.module": [
		320,
		5
	],
	"../pages/favorites/favorites.module": [
		321,
		4
	],
	"../pages/login/login.module": [
		322,
		3
	],
	"../pages/menu/menu.module": [
		323,
		2
	],
	"../pages/register/register.module": [
		324,
		1
	],
	"../pages/reservation/reservation.module": [
		325,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 173;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dish_dish__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_promotion_promotion__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_leader_leader__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, dishservice, promotionservice, leaderservice, BaseURL) {
        this.navCtrl = navCtrl;
        this.dishservice = dishservice;
        this.promotionservice = promotionservice;
        this.leaderservice = leaderservice;
        this.BaseURL = BaseURL;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.dishErrMess = errmess; });
        this.promotionservice.getFeaturedPromotion()
            .subscribe(function (promotion) { return _this.promotion = promotion; }, function (errmess) { return _this.promoErrMess = errmess; });
        this.leaderservice.getFeaturedLeader()
            .subscribe(function (leader) { return _this.leader = leader; }, function (errmess) { return _this.leaderErrMess = errmess; });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid>\n  <ion-row align-items-center>\n    <ion-col col-12 col-lg-4>\n\n<ion-card *ngIf="dish">\n  <img src="{{BaseURL + dish.image}}"/>\n  <ion-card-content>\n    <ion-card-title>\n      Popular Environment: {{dish.name | uppercase}}\n    </ion-card-title>\n    <p>\n      {{dish.description}}\n    </p>\n  </ion-card-content>\n</ion-card>\n\n<div [hidden]="dish || dishErrMess">\n  <ion-spinner></ion-spinner>\n  <h4>Loading . . . Please Wait</h4>\n</div>\n<div *ngIf="dishErrMess">\n  <h2>Error</h2>\n  <h4>{{dishErrMess}}</h4>\n</div>\n\n    </ion-col>\n    <ion-col col-12 col-lg-4>\n  \n<ion-card *ngIf="promotion">\n  <img src="{{BaseURL + promotion.image}}"/>\n  <ion-card-content>\n    <ion-card-title>\n      New environment: {{promotion.name | uppercase}}\n    </ion-card-title>\n    <p>\n      {{promotion.description}}\n    </p>\n  </ion-card-content>\n</ion-card>\n<div [hidden]="promotion || promoErrMess">\n  <ion-spinner></ion-spinner>\n  <h4>Loading . . . Please Wait</h4>\n</div>\n<div *ngIf="promoErrMess">\n  <h2>Error</h2>\n  <h4>{{promoErrMess}}</h4>\n</div>\n\n    </ion-col>\n    <ion-col col-12 col-lg-4>\n\n<ion-card *ngIf="leader">\n  <img src="{{BaseURL + leader.image}}"/>\n  <ion-card-content>\n    <ion-card-title>\n      Learn about AI experts: {{leader.name | uppercase}}\n    </ion-card-title>\n    <p>\n      {{leader.designation}}\n    </p>\n    <p>\n      {{leader.description}}\n    </p>\n  </ion-card-content>\n</ion-card>\n\n\n\n<div [hidden]="leader || leaderErrMess">\n  <ion-spinner></ion-spinner>\n  <h4>Loading . . . Please Wait</h4>\n</div>\n<div *ngIf="leaderErrMess">\n  <h2>Error</h2>\n  <h4>{{leaderErrMess}}</h4>\n</div>\n\n\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n  <ion-fab right bottom>\n    <button ion-fab color="accent"><ion-icon name="arrow-dropup"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab class="btn-mail"><ion-icon name="mail"></ion-icon></button>\n      <button ion-fab class="btn-google-plus"><ion-icon name="logo-googleplus"></ion-icon></button>\n      <button ion-fab class="btn-youtube"><ion-icon name="logo-youtube"></ion-icon></button>\n      <button ion-fab class="btn-twitter"><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab class="btn-facebook"><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab class="btn-linkedin"><ion-icon name="logo-linkedin"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/pages/home/home.html"*/
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dish_dish__["a" /* DishProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_promotion_promotion__["a" /* PromotionProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_leader_leader__["a" /* LeaderProvider */], Object])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_promotions__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the PromotionProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var PromotionProvider = /** @class */ (function () {
    function PromotionProvider(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    PromotionProvider.prototype.getPromotions = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_9__shared_promotions__["a" /* PROMOTIONS */]).delay(500);
    };
    PromotionProvider.prototype.getPromotion = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_9__shared_promotions__["a" /* PROMOTIONS */].filter(function (promo) { return (promo.id === id); })[0]).delay(500);
    };
    PromotionProvider.prototype.getFeaturedPromotion = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_9__shared_promotions__["a" /* PROMOTIONS */].filter(function (promotion) { return promotion.featured; })[0]).delay(500);
    };
    PromotionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], PromotionProvider);
    return PromotionProvider;
}());

//# sourceMappingURL=promotion.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dishdetail_dishdetail__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_reservation_reservation__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_favorites_favorites__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_comment_comment__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_dish_dish__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_leader_leader__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_promotion_promotion__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_process_httpmsg_process_httpmsg__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_baseurl__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_favorite_favorite__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_local_notifications__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_email_composer__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_social_sharing__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_network__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_call_number__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dishdetail_dishdetail__["a" /* DishdetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_reservation_reservation__["a" /* ReservationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comment/comment.module#CommentPageModule', name: 'CommentPage', segment: 'comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dishdetail/dishdetail.module#DishdetailPageModule', name: 'DishdetailPage', segment: 'dishdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservation/reservation.module#ReservationPageModule', name: 'ReservationPage', segment: 'reservation', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dishdetail_dishdetail__["a" /* DishdetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_reservation_reservation__["a" /* ReservationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_dish_dish__["a" /* DishProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_leader_leader__["a" /* LeaderProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_promotion_promotion__["a" /* PromotionProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */],
                { provide: 'BaseURL', useValue: __WEBPACK_IMPORTED_MODULE_21__shared_baseurl__["a" /* baseURL */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_favorite_favorite__["a" /* FavoriteProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_call_number__["a" /* CallNumber */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LEADERS; });
var LEADERS = [
    {
        id: 0,
        name: 'Andrew Ng',
        image: './assets/images/alberto3.png',
        designation: '',
        abbr: '',
        featured: false,
        description: "A Chinese American computer scientist. He is the former chief scientist at Baidu, where he led the company's Artificial Intelligence Group. He is an adjunct professor (formerly associate professor) at Stanford University. Ng is also the co-founder and chairman of Coursera, an online education platform."
    },
    {
        id: 1,
        name: 'Ray Kurzweil',
        image: './assets/images/alberto2.png',
        designation: '',
        abbr: '',
        featured: false,
        description: 'An American author, computer scientist, inventor and futurist. Aside from futurism, he is involved in fields such as optical character recognition (OCR), text-to-speech synthesis, speech recognition technology, and electronic keyboard instruments.'
    },
    {
        id: 2,
        name: 'Stuart J. Russell',
        image: './assets/images/alberto1.png',
        designation: '',
        abbr: '',
        featured: false,
        description: 'A computer scientist known for his contributions to artificial intelligence.[3][4] He is a Professor of Computer Science at the University of California, Berkeley and Adjunct Professor of Neurological Surgery at the University of California, San Francisco.'
    },
    {
        id: 3,
        name: 'Peter Norvig',
        image: './assets/images/alberto.png',
        designation: '',
        abbr: '',
        featured: true,
        description: 'A Director of Research at Google Inc; previously he directed Google core search algorithms group.  He is co-author of Artificial Intelligence: A Modern Approach, the leading textbook in the field, and co-teacher of an Artifical Intelligence class that signed up 160,000 students, helping to kick off the current round of massive open online classes.'
    }
];
//# sourceMappingURL=leaders.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DISHES; });
var DISHES = [
    {
        id: 0,
        name: 'Sudoku',
        featured: true,
        image: './assets/images/uthappizza.png',
        category: 'mains',
        label: 'Hot',
        price: '4.99',
        description: 'A puzzle in which players insert the numbers one to nine into a grid consisting of nine squares subdivided into a further nine smaller squares in such a way that every number appears once in each horizontal line, vertical line, and square.',
        comments: [
            {
                rating: 5,
                comment: "There seem to be two main types of people in the world, crosswords and sudokus.",
                author: "Rebecca McKinsey",
                date: "2012-10-16T17:57:28.556094Z"
            },
            {
                rating: 4,
                comment: "I often lose myself in the Sudoku-like challenges of making a book work.",
                author: "David Mitchell",
                date: "2014-09-05T17:57:28.556094Z"
            },
            {
                rating: 3,
                comment: "I was quite good at football once, although other than that my speciality would be maths. I'm great at sudokus and find all the spin-off games pretty easy too.",
                author: "Gary Lineker",
                date: "2015-02-13T17:57:28.556094Z"
            }
        ]
    },
    {
        id: 1,
        name: 'Fly a Quadcopter',
        featured: false,
        image: './assets/images/zucchipakoda.png',
        category: 'appetizer',
        label: '',
        price: '1.99',
        description: 'Fly a quadcopter/drone',
        comments: [
            {
                rating: 5,
                comment: "Owning a drone does not a pilot make",
                author: "Alex Morrit",
                date: "2012-10-16T17:57:28.556094Z"
            },
            {
                rating: 4,
                comment: "A drone opens up a world we've never seen before",
                author: "Nick Woodman",
                date: "2014-09-05T17:57:28.556094Z"
            }
        ]
    },
    {
        id: 2,
        name: 'Generate a TV script',
        featured: false,
        image: './assets/images/vadonut.png',
        category: 'appetizer',
        label: 'New',
        price: '1.99',
        description: 'Generate a TV script',
        comments: [
            {
                rating: 5,
                comment: "Scripts are what matter",
                author: "Tim Bevan",
                date: "2012-10-16T17:57:28.556094Z"
            },
            {
                rating: 4,
                comment: "When you have a good script you're almost in more trouble than when you have a terrible script.",
                author: "Robert Downey Jr.",
                date: "2014-09-05T17:57:28.556094Z"
            }
        ]
    },
    {
        id: 3,
        name: 'Generate Faces',
        featured: false,
        image: './assets/images/elaicheesecake.png',
        category: 'dessert',
        label: '',
        price: '2.99',
        description: 'Generate new human faces',
        comments: [
            {
                rating: 5,
                comment: "These People Never Existed. They Were Made by an AI.",
                author: "Dom Galeon",
                date: "2012-10-16T17:57:28.556094Z"
            },
            {
                rating: 4,
                comment: "How an A.I. Cat-and-Mouse Game Generates Believable Fake Photos",
                author: "Cade Metz",
                date: "2014-09-05T17:57:28.556094Z"
            }
        ]
    }
];
//# sourceMappingURL=dishes.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_reservation_reservation__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl, loadingCtrl, network) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.loading = null;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'About Us', icon: 'information-circle', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */] },
            { title: 'Environments', icon: 'list-box', component: __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */] },
            { title: 'Contact Us', icon: 'contact', component: __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'Favorites', icon: 'heart', component: __WEBPACK_IMPORTED_MODULE_9__pages_favorites_favorites__["a" /* FavoritesPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.network.onDisconnect().subscribe(function () {
                if (!_this.loading) {
                    _this.loading = _this.loadingCtrl.create({
                        content: 'Network Disconnected'
                    });
                    _this.loading.present();
                }
            });
            _this.network.onConnect().subscribe(function () {
                // We just got a connection but we need to wait briefly
                // before we determine the connection type. Might need to wait.
                // prior to doing any api requests as well.
                setTimeout(function () {
                    if (_this.network.type === 'wifi') {
                        console.log('we got a wifi connection, woohoo!');
                    }
                }, 3000);
                if (_this.loading) {
                    _this.loading.dismiss();
                    _this.loading = null;
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openReserve = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_reservation_reservation__["a" /* ReservationPage */]);
        modal.present();
    };
    MyApp.prototype.openLogin = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]);
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/app/app.html"*/'<ion-split-pane>\n<ion-menu [content]="content">\n  <ion-header>\n    	<ion-toolbar color="primary-dark">\n      <ion-title>AI Playground</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n\n      <ion-list-header color="primary-light" text-wrap>\n          <ion-thumbnail item-left>\n            <img src="assets/images/logo.png" />\n          </ion-thumbnail>\n          <h3>AI Playground</h3>\n      </ion-list-header>\n\n     <button color="primary-pale" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n      <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n    </button>\n      <button color="primary-pale" menuClose ion-item (click)="openReserve()">\n        <ion-icon name="add-circle" item-left></ion-icon>\n        Request Environment\n      </button>\n\n\n      <button color="primary-pale" menuClose ion-item (click)="openLogin()">\n        <ion-icon name="log-in" item-left></ion-icon>\n        Login\n      </button>\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" main></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"/media/renjith/SanDisk/coursera/frontenddev_hongkonguni/Assignment1Honors/implementation/Code_Impl/Track3Ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__["a" /* Network */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PROMOTIONS; });
var PROMOTIONS = [
    {
        id: 0,
        name: 'Dog Breed Predicter',
        image: 'assets/images/buffet.png',
        label: 'New',
        price: '19.99',
        featured: true,
        description: 'This environment allows you to determine the dog breed in a particular image.'
    }
];
//# sourceMappingURL=promotions.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
var baseURL = '';
//# sourceMappingURL=baseurl.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHttpmsgProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ProcessHttpmsgProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ProcessHttpmsgProvider = /** @class */ (function () {
    function ProcessHttpmsgProvider(http) {
        this.http = http;
        console.log('Hello ProcessHttpmsgProvider Provider');
    }
    ProcessHttpmsgProvider.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProcessHttpmsgProvider.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ProcessHttpmsgProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ProcessHttpmsgProvider);
    return ProcessHttpmsgProvider;
}());

//# sourceMappingURL=process-httpmsg.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dish_dish__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FavoriteProvider = /** @class */ (function () {
    function FavoriteProvider(http, localNotifications, dishservice, storage) {
        var _this = this;
        this.http = http;
        this.localNotifications = localNotifications;
        this.dishservice = dishservice;
        this.storage = storage;
        console.log('Hello FavoriteProvider Provider');
        this.favorites = [];
        storage.get('favorites').then(function (favoriteJsonStr) {
            if (favoriteJsonStr) {
                _this.favorites = JSON.parse(favoriteJsonStr);
            }
        });
    }
    FavoriteProvider.prototype.addFavorite = function (id) {
        if (!this.isFavorite(id))
            this.favorites.push(id);
        console.log('favorites', this.favorites);
        this.storage.set('favorites', JSON.stringify(this.favorites));
        // Schedule a single notification
        this.localNotifications.schedule({
            id: id,
            text: 'Dish ' + id + ' added as a favorite successfully'
        });
        return true;
    };
    FavoriteProvider.prototype.getFavorites = function () {
        var _this = this;
        return this.dishservice.getDishes()
            .map(function (dishes) { return dishes.filter(function (dish) { return _this.favorites.some(function (el) { return el === dish.id; }); }); });
    };
    FavoriteProvider.prototype.deleteFavorite = function (id) {
        var index = this.favorites.indexOf(id);
        if (index >= 0) {
            this.favorites.splice(index, 1);
            this.storage.set('favorites', JSON.stringify(this.favorites));
            return this.getFavorites();
        }
        else {
            console.log('Deleting non-existant favorite', id);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Deleting non-existant favorite' + id);
        }
    };
    FavoriteProvider.prototype.isFavorite = function (id) {
        return this.favorites.some(function (el) { return el === id; });
    };
    FavoriteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_3__dish_dish__["a" /* DishProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], FavoriteProvider);
    return FavoriteProvider;
}());

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_dishes__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the DishProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var DishProvider = /** @class */ (function () {
    function DishProvider(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    DishProvider.prototype.getDishes = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_9__shared_dishes__["a" /* DISHES */]).delay(500);
    };
    DishProvider.prototype.getDish = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_9__shared_dishes__["a" /* DISHES */].filter(function (dish) { return (dish.id === id); })[0]).delay(500);
    };
    DishProvider.prototype.getFeaturedDish = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_9__shared_dishes__["a" /* DISHES */].filter(function (dish) { return dish.featured; })[0]).delay(500);
    };
    DishProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], DishProvider);
    return DishProvider;
}());

//# sourceMappingURL=dish.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_leaders__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/*
  Generated class for the LeaderProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var LeaderProvider = /** @class */ (function () {
    function LeaderProvider(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    LeaderProvider.prototype.getLeaders = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_9__shared_leaders__["a" /* LEADERS */]).delay(500);
    };
    LeaderProvider.prototype.getLeader = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_9__shared_leaders__["a" /* LEADERS */].filter(function (leader) { return (leader.id === id); })[0]).delay(500);
    };
    LeaderProvider.prototype.getFeaturedLeader = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_9__shared_leaders__["a" /* LEADERS */].filter(function (leader) { return leader.featured; })[0]).delay(500);
    };
    LeaderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__process_httpmsg_process_httpmsg__["a" /* ProcessHttpmsgProvider */]])
    ], LeaderProvider);
    return LeaderProvider;
}());

//# sourceMappingURL=leader.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.js.map