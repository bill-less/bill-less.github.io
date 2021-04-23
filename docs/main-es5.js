(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/alexanderhodes/dev/bill-less/bill-less.github.io/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BuFo":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function BuFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/carousel */
      "Etcd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HomeComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var imageUrl_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", imageUrl_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(router) {
          _classCallCheck(this, HomeComponent);

          this.router = router;
          this.arrayOfImgUrls = ['../../../assets/1.png', '../../../assets/2.png', '../../../assets/3.png', '../../../assets/4.png'];
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigateToRegister",
          value: function navigateToRegister() {
            this.router.navigate(['register']);
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 149,
        vars: 3,
        consts: [["id", "body"], ["id", "wrapper"], ["id", "mainTextDiv"], ["id", "casLogo", "src", "../../../assets/cas.png", "alt", ""], [3, "click"], ["id", "casouselDiv"], [3, "nzAutoPlay", "nzAutoPlaySpeed"], ["nz-carousel-content", "", 4, "ngFor", "ngForOf"], [1, "dividerSmall"], ["id", "advantagesBody"], [1, "sectionHeader"], ["id", "container3", 1, "container"], [1, "formedDiv"], [1, "upperRoundedDiv"], ["src", "../../../assets/save.png", "alt", "", 1, "advantageIcon"], [1, "advantageContainer"], [1, "advantageName"], ["classe", "advantageDescription"], ["id", "timeIcon", "src", "../../../assets/time-is-money.png", "alt", "", 1, "advantageIcon"], ["src", "../../../assets/online-payment.png", "alt", "", 1, "advantageIcon"], ["id", "contactSectionBody"], ["id", "container2", 1, "container"], [1, "contactInformation"], ["src", "../../../assets/telefon.png", "alt", ""], ["src", "../../../assets/email.png", "alt", ""], [1, "divider"], ["id", "packagesBody"], ["id", "packageContainer", 1, "container"], [1, "packageDiv"], ["src", "../../../assets/starter.png", "alt", "", 1, "packagePic"], ["src", "../../../assets/basic.png", "alt", "", 1, "packagePic"], ["src", "../../../assets/classic.png", "alt", "", 1, "packagePic"], ["src", "../../../assets/premium.png", "alt", "", 1, "packagePic"], ["src", "../../../assets/enterprise.png", "alt", "", 1, "packagePic"], ["id", "furtherInformationBody"], ["id", "furtherInformationHeader", 1, "sectionHeader"], ["id", "furtherInformationSubHeader"], [1, "furtherInformationDownloadDiv"], ["src", "../../../assets/auf-speicherlaufwerk-herunterladen.png", "alt", ""], ["id", "costInfo"], ["id", "faqBody"], ["id", "faqHeader"], [1, "accordion"], ["id", "question1", 1, "accordionItem"], [1, "faqQuestion"], ["href", "#question1", 1, "accordionLink"], [1, "answer"], ["id", "question2", 1, "accordionItem"], ["href", "#question2", 1, "accordionLink"], ["nz-carousel-content", ""], [1, "diashowPic", 3, "src"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Digitale Belegausgabe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "mit auf Ihrer CASPOS Kasse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() {
              return ctx.navigateToRegister();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Jetzt auf der Kasse installieren");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-carousel", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Die Vorteile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Gut f\xFCr die Umwelt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Kein Ausdruck von unn\xF6tigen Belegen die im M\xFCll landen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Kosten & Zeit einsparen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "f\xFCr das Handling mit den Belegrollen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Kontaktloser Belegempfang");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "f\xFCr einen komplett digitalen Bezahlprozess");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_47_listener() {
              return ctx.navigateToRegister();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Jetzt auf der Kasse installieren");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Sie haben Fragen? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Sprechen Sie uns an! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "+49 0000000000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Name@billless.app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Die Packete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Weitere Informationen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "zum Download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Preisliste:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Stand: April 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Preisliste:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Stand: April 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Preisliste:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Stand: April 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Preisliste:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Stand: April 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "FAQ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Erf\xFClle ich mit dem Produkt die Belegpflicht?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Some awesome text :)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Was muss gemacht werden, damit ich bill.less einsetzen kann?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Some awesome text :) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " ... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " ... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " ... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " ... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAutoPlay", true)("nzAutoPlaySpeed", 6000);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayOfImgUrls);
          }
        },
        directives: [ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_2__["NzCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_2__["NzCarouselContentDirective"]],
        styles: ["#body[_ngcontent-%COMP%] {\n  background-color: #fff;\n  text-align: center;\n  width: 100%;\n  overflow-x: hidden;\n}\n\n.divider[_ngcontent-%COMP%] {\n  height: 120px;\n}\n\n.dividerSmall[_ngcontent-%COMP%] {\n  height: 80px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 70px;\n  margin: 0;\n  padding: 60px 0 0 0;\n  border: 0;\n  outline: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 45px;\n  font-weight: 300;\n}\n\n#casLogo[_ngcontent-%COMP%] {\n  width: 500px;\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #f79a7e;\n  color: black;\n  border-radius: 15px;\n  border: 2px solid #f79a7e;\n  cursor: pointer;\n  width: 700px;\n  height: 80px;\n  margin: 2rem;\n  font-size: 40px;\n  font-weight: 400;\n  margin: 0 auto;\n}\n\n#casouselDiv[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  width: 100%;\n}\n\n[nz-carousel-content][_ngcontent-%COMP%] {\n  color: #143d42;\n}\n\nnz-carousel[_ngcontent-%COMP%] {\n  height: 500px;\n}\n\n.diashowPic[_ngcontent-%COMP%] {\n  height: 500px;\n  margin: 0 auto;\n}\n\niframe[_ngcontent-%COMP%] {\n  margin: 50px 0 0 0;\n  width: 800px;\n  height: 450px;\n}\n\n.sectionHeader[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: 500;\n}\n\n#advantagesBody[_ngcontent-%COMP%] {\n  width: 90%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0 auto;\n}\n\n.advantageContainer[_ngcontent-%COMP%] {\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: 180px;\n  width: 80%;\n  border-radius: 30px;\n  margin: 0 auto;\n  background-color: #94a4aac9;\n}\n\n.advantageContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.upperRoundedDiv[_ngcontent-%COMP%] {\n  height: 30%;\n  width: 180px;\n  background-color: #94a4aac9;\n  border-radius: 120px 120px 0 0;\n  margin: 0 auto;\n}\n\n.advantageIcon[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 40%;\n  padding-bottom: 10px;\n}\n\n.formedDiv[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 33.3333333333%;\n}\n\n.formedDiv[_ngcontent-%COMP%]   #timeIcon[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.advantageName[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-size: 1.8vw;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n\n.advantageDescription[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  font-size: 30px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n}\n\n#contactSectionBody[_ngcontent-%COMP%] {\n  background-color: #e2dede;\n  margin-top: 40px;\n  padding-top: 30px;\n}\n\n.contactInformation[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 80px;\n  width: 50%;\n}\n\n.contactInformation[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  text-align: center;\n  display: inline-flex;\n}\n\n.contactInformation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.contactInformation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 40px;\n  padding: 0 0 0 50px;\n}\n\n#packagesBody[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n\n#packageContainer[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.packageDiv[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.packagePic[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.packageNameDiv[_ngcontent-%COMP%] {\n  background-color: #143d42;\n  color: #fff;\n  border-radius: 20px 20px 10px 10px;\n  height: 110px;\n  line-height: 110px;\n  width: 80%;\n  margin: 0 auto;\n}\n\n.packageNameDiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 400;\n}\n\n.packageInfoDiv[_ngcontent-%COMP%] {\n  background-color: #b0cace;\n  border-radius: 10px 10px 20px 20px;\n  width: 80%;\n  margin: 0 auto;\n  padding-bottom: 20px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  text-align: center;\n  display: block;\n  padding: 0;\n  margin: 0;\n}\n\n.packageInfoDiv[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 25px;\n  padding: 20px 0 0 0;\n}\n\n.packagePrice[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n#furtherInformationHeader[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n#furtherInformationSubHeader[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 35px;\n}\n\n.furtherInformationDownloadDiv[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  width: 50%;\n}\n\n.furtherInformationDownloadDiv[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  text-align: center;\n  display: inline-flex;\n}\n\n.furtherInformationDownloadDiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n  padding-right: 20px;\n}\n\n.furtherInformationDownloadDiv[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.furtherInformationDownloadDiv[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\n.furtherInformationDownloadDiv[_ngcontent-%COMP%]   #costInfo[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n#faqBody[_ngcontent-%COMP%] {\n  background-color: #143d42;\n  color: #fff;\n  margin: 0;\n  padding-bottom: 50px;\n}\n\n#faqHeader[_ngcontent-%COMP%] {\n  font-size: 35px;\n  padding-top: 30px;\n}\n\n#faqBody[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 80%;\n}\n\nhr[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.accordionItem[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 40px;\n}\n\n.accordionItem[_ngcontent-%COMP%]:target   .answer[_ngcontent-%COMP%] {\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n\n.accordionLink[_ngcontent-%COMP%] {\n  font-size: 20px;\n  letter-spacing: 1px;\n  text-decoration: none;\n}\n\n.accordionLink[_ngcontent-%COMP%]:target {\n  color: #f79a7e;\n}\n\n.answer[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  position: relative;\n  padding-left: 30px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.answer[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n}\n\na[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.ant-layout[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: unset;\n  background-color: violet;\n}\n\n@media only screen and (max-width: 980px) {\n  nz-carousel[_ngcontent-%COMP%] {\n    height: 50vw;\n    color: #143d42;\n  }\n\n  .diashowPic[_ngcontent-%COMP%] {\n    height: 50vw;\n    margin: 0 auto;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 80%;\n    font-size: 4vw;\n  }\n\n  iframe[_ngcontent-%COMP%] {\n    width: 80vw;\n    height: 50vh;\n  }\n\n  .upperRoundedDiv[_ngcontent-%COMP%] {\n    height: 15%;\n    width: 50%;\n    background-color: #94a4aac9;\n    border-radius: 120px 120px 0 0;\n    margin: 0 auto;\n  }\n\n  .advantageContainer[_ngcontent-%COMP%] {\n    min-height: -webkit-fit-content;\n    min-height: -moz-fit-content;\n    min-height: fit-content;\n    height: 220px;\n  }\n\n  .advantageName[_ngcontent-%COMP%] {\n    font-size: 3vw;\n    font-weight: 600;\n  }\n\n  .advantageDescription[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    font-size: 30px;\n  }\n\n  #contactSectionBody[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .contactInformation[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n\n  .contactInformation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0;\n    font-size: 30px;\n  }\n\n  .contactInformation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15%;\n    padding-right: 10px;\n  }\n\n  .packageDiv[_ngcontent-%COMP%] {\n    width: 30%;\n    margin-top: 20px;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .diashowPic[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n\n  .formedDiv[_ngcontent-%COMP%] {\n    width: 80%;\n    display: block;\n    margin: 0 auto;\n  }\n\n  .advantageContainer[_ngcontent-%COMP%] {\n    min-height: -webkit-fit-content;\n    min-height: -moz-fit-content;\n    min-height: fit-content;\n    height: 140px;\n  }\n\n  .upperRoundedDiv[_ngcontent-%COMP%] {\n    height: 20%;\n    width: 180px;\n    background-color: #94a4aac9;\n    border-radius: 120px 120px 0 0;\n    margin: 0 auto;\n  }\n\n  .advantageIcon[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    width: 40%;\n    padding-bottom: 50px;\n  }\n\n  .upperRoundedDiv[_ngcontent-%COMP%] {\n    height: 30%;\n    width: 160px;\n    background-color: #94a4aac9;\n    border-radius: 120px 120px 0 0;\n    margin: 0 auto;\n  }\n\n  #contactSectionBody[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .contactInformation[_ngcontent-%COMP%] {\n    padding: 10px;\n    width: 90%;\n  }\n\n  .contactInformation[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 auto;\n  }\n\n  .contactInformation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0;\n    font-size: 30px;\n  }\n\n  .contactInformation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15%;\n    padding-right: 10px;\n  }\n\n  .packageDiv[_ngcontent-%COMP%] {\n    width: 40%;\n    margin-top: 20px;\n  }\n\n  .packagePic[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .furtherInformationDownloadDiv[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .faqQuestion[_ngcontent-%COMP%] {\n    padding: 10px 0 0 30px;\n  }\n}\n\n@media only screen and (max-width: 550px) {\n  h1[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 80%;\n    height: 60px;\n    margin: 0 auto;\n  }\n\n  nz-carousel[_ngcontent-%COMP%] {\n    height: 50vw;\n    color: #143d42;\n  }\n\n  .diashowPic[_ngcontent-%COMP%] {\n    height: 50vw;\n    margin: 0 auto;\n  }\n\n  #mainTextDiv[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 0 auto;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 45px;\n    font-weight: 500;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  #casLogo[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n\n  .formedDiv[_ngcontent-%COMP%] {\n    width: 80%;\n    display: block;\n    margin: 0 auto;\n  }\n\n  .advantageContainer[_ngcontent-%COMP%] {\n    min-height: -webkit-fit-content;\n    min-height: -moz-fit-content;\n    min-height: fit-content;\n    height: 140px;\n  }\n\n  .upperRoundedDiv[_ngcontent-%COMP%] {\n    height: 20%;\n    width: 180px;\n    background-color: #94a4aac9;\n    border-radius: 120px 120px 0 0;\n    margin: 0 auto;\n  }\n\n  .advantageIcon[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    width: 40%;\n    padding-bottom: 50px;\n  }\n\n  .upperRoundedDiv[_ngcontent-%COMP%] {\n    height: 30%;\n    width: 160px;\n    background-color: #94a4aac9;\n    border-radius: 120px 120px 0 0;\n    margin: 0 auto;\n  }\n\n  #furtherInformationSubHeader[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n  }\n\n  .furtherInformationDownloadDiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n\n  #contactSectionBody[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .contactInformation[_ngcontent-%COMP%] {\n    padding: 10px;\n    width: 100%;\n  }\n\n  .contactInformation[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n\n  .contactInformation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0;\n    font-size: 30px;\n  }\n\n  .contactInformation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15%;\n    padding-right: 10px;\n  }\n\n  .packageDiv[_ngcontent-%COMP%] {\n    width: 70%;\n    margin-top: 20px;\n  }\n\n  .packagePic[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .furtherInformationDownloadDiv[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .faqQuestion[_ngcontent-%COMP%] {\n    padding: 10px 0 0 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQUVKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQ0E7RUFDSSxTQUFBO0VBQ0EscUJBQUE7QUFFSjs7QUFDQTtFQUNJLFVBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLHVCQUFBO0FBRUo7O0FBQ0E7RUFDSSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxTQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0EsaUJBQUE7QUFBQTs7QUFHQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUdBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBQUo7O0FBSUE7RUFFSTtJQUNJLFlBQUE7SUFDQSxjQUFBO0VBRk47O0VBS0U7SUFDSSxZQUFBO0lBQ0EsY0FBQTtFQUZOOztFQUtFO0lBQ0ksVUFBQTtJQUNBLGNBQUE7RUFGTjs7RUFLRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBRk47O0VBS0U7SUFDSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLDJCQUFBO0lBQ0EsOEJBQUE7SUFDQSxjQUFBO0VBRk47O0VBS0U7SUFDSSwrQkFBQTtJQUFBLDRCQUFBO0lBQUEsdUJBQUE7SUFDQSxhQUFBO0VBRk47O0VBS0U7SUFFSSxjQUFBO0lBQ0EsZ0JBQUE7RUFITjs7RUFNRTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtFQUhOOztFQU1FO0lBQ0ksV0FBQTtFQUhOOztFQU1FO0lBQ0ksYUFBQTtFQUhOOztFQU1FO0lBQ0ksVUFBQTtJQUNBLGVBQUE7RUFITjs7RUFNRTtJQUNJLFVBQUE7SUFDQSxtQkFBQTtFQUhOOztFQU1FO0lBQ0ksVUFBQTtJQUNBLGdCQUFBO0VBSE47QUFDRjs7QUFTQTtFQUVJO0lBQ0ksY0FBQTtFQVJOOztFQVdFO0lBQ0ksVUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VBUk47O0VBV0U7SUFDSSwrQkFBQTtJQUFBLDRCQUFBO0lBQUEsdUJBQUE7SUFDQSxhQUFBO0VBUk47O0VBV0U7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBQ0EsOEJBQUE7SUFDQSxjQUFBO0VBUk47O0VBV0U7SUFDSSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxvQkFBQTtFQVJOOztFQVlFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSwyQkFBQTtJQUNBLDhCQUFBO0lBQ0EsY0FBQTtFQVROOztFQWFFO0lBQ0ksV0FBQTtFQVZOOztFQWFFO0lBQ0ksYUFBQTtJQUNBLFVBQUE7RUFWTjs7RUFhRTtJQUNJLGNBQUE7SUFDQSxjQUFBO0VBVk47O0VBYUU7SUFDSSxVQUFBO0lBQ0EsZUFBQTtFQVZOOztFQWFFO0lBQ0ksVUFBQTtJQUNBLG1CQUFBO0VBVk47O0VBYUU7SUFDSSxVQUFBO0lBQ0EsZ0JBQUE7RUFWTjs7RUFhRTtJQUNJLFdBQUE7RUFWTjs7RUFhRTtJQUNJLFdBQUE7RUFWTjs7RUFhRTtJQUNJLHNCQUFBO0VBVk47QUFDRjs7QUFnQkE7RUFFSTtJQUNJLFVBQUE7RUFmTjs7RUFrQkU7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUFmTjs7RUFrQkU7SUFDSSxZQUFBO0lBQ0EsY0FBQTtFQWZOOztFQWtCRTtJQUNJLFlBQUE7SUFDQSxjQUFBO0VBZk47O0VBa0JDO0lBQ0ssVUFBQTtJQUNBLGNBQUE7RUFmTjs7RUFrQkU7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUFmTjs7RUFrQkU7SUFDSSxlQUFBO0VBZk47O0VBb0JFO0lBQ0ksVUFBQTtFQWpCTjs7RUFvQkU7SUFDSSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7RUFqQk47O0VBb0JFO0lBQ0ksK0JBQUE7SUFBQSw0QkFBQTtJQUFBLHVCQUFBO0lBQ0EsYUFBQTtFQWpCTjs7RUFvQkU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLDJCQUFBO0lBQ0EsOEJBQUE7SUFDQSxjQUFBO0VBakJOOztFQW9CRTtJQUNJLGdCQUFBO0lBQ0EsVUFBQTtJQUNBLG9CQUFBO0VBakJOOztFQXFCRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSw4QkFBQTtJQUNBLGNBQUE7RUFsQk47O0VBcUJFO0lBQ0ksb0JBQUE7RUFsQk47O0VBcUJFO0lBQ0ksWUFBQTtFQWxCTjs7RUFxQkU7SUFDSSxXQUFBO0VBbEJOOztFQXFCRTtJQUNJLGFBQUE7SUFDQSxXQUFBO0VBbEJOOztFQXFCRTtJQUNJLGNBQUE7RUFsQk47O0VBcUJFO0lBQ0ksVUFBQTtJQUNBLGVBQUE7RUFsQk47O0VBcUJFO0lBQ0ksVUFBQTtJQUNBLG1CQUFBO0VBbEJOOztFQXFCRTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtFQWxCTjs7RUFxQkU7SUFDSSxXQUFBO0VBbEJOOztFQXFCRTtJQUNJLFdBQUE7RUFsQk47O0VBcUJFO0lBQ0ksc0JBQUE7RUFsQk47QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmRpdmlkZXIge1xuICAgIGhlaWdodDogMTIwcHg7XG59XG5cbi5kaXZpZGVyU21hbGwge1xuICAgIGhlaWdodDogODBweDtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNjBweCAwIDAgMDtcbiAgICBib3JkZXI6MDtcbiAgICBvdXRsaW5lOjA7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuI2Nhc0xvZ28ge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3OWE3ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjc5YTdlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogMnJlbTtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuI2Nhc291c2VsRGl2IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuW256LWNhcm91c2VsLWNvbnRlbnRdIHtcbiAgICBjb2xvcjogIzE0M2Q0MjtcbiAgfVxuXG5uei1jYXJvdXNlbCB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbn1cbiAgXG4uZGlhc2hvd1BpYyB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuaWZyYW1lIHtcbiAgICBtYXJnaW46IDUwcHggMCAwIDA7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIGhlaWdodDogNDUwcHg7XG59XG5cbi5zZWN0aW9uSGVhZGVyIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuI2FkdmFudGFnZXNCb2R5IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hZHZhbnRhZ2VDb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGE0YWFjOTtcbn1cblxuLmFkdmFudGFnZUNvbnRhaW5lciBkaXZ7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnVwcGVyUm91bmRlZERpdiB7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGE0YWFjOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMjBweCAxMjBweCAwIDA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hZHZhbnRhZ2VJY29uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5mb3JtZWREaXYge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMzMzMyU7XG59XG5cbi5mb3JtZWREaXYgI3RpbWVJY29uIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4uYWR2YW50YWdlTmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxLjh2dztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5hZHZhbnRhZ2VEZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250YWN0U2VjdGlvbkJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmRlZGU7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmNvbnRhY3RJbmZvcm1hdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbnRhY3RJbmZvcm1hdGlvbiA+ICp7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgXG59XG5cbi5jb250YWN0SW5mb3JtYXRpb24gaW1ne1xuICAgIHdpZHRoOiA4MHB4O1xufVxuXG4uY29udGFjdEluZm9ybWF0aW9uIHB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDUwcHg7XG59XG5cbiNwYWNrYWdlc0JvZHkge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbiNwYWNrYWdlQ29udGFpbmVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBhY2thZ2VEaXYge1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbi5wYWNrYWdlUGljIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG5cbi5wYWNrYWdlTmFtZURpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0M2Q0MjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMTBweCAxMHB4O1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDExMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5wYWNrYWdlTmFtZURpdiBwIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnBhY2thZ2VJbmZvRGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBjYWNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAyMHB4IDIwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5wYWNrYWdlSW5mb0RpdiBsaSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbi5wYWNrYWdlUHJpY2Uge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNmdXJ0aGVySW5mb3JtYXRpb25IZWFkZXIge1xuICAgIG1hcmdpbjogMDtcbn1cblxuI2Z1cnRoZXJJbmZvcm1hdGlvblN1YkhlYWRlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmZ1cnRoZXJJbmZvcm1hdGlvbkRvd25sb2FkRGl2IHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4uZnVydGhlckluZm9ybWF0aW9uRG93bmxvYWREaXYgPiAqe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7IFxufVxuXG4uZnVydGhlckluZm9ybWF0aW9uRG93bmxvYWREaXYgaW1nIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmZ1cnRoZXJJbmZvcm1hdGlvbkRvd25sb2FkRGl2IHVsIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZnVydGhlckluZm9ybWF0aW9uRG93bmxvYWREaXYgbGkge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmZ1cnRoZXJJbmZvcm1hdGlvbkRvd25sb2FkRGl2ICNjb3N0SW5mbyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jZmFxQm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0M2Q0MjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbiNmYXFIZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuI2ZhcUJvZHkgPiBkaXYge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbmhyIHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmFjY29yZGlvbkl0ZW0ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmFjY29yZGlvbkl0ZW06dGFyZ2V0IC5hbnN3ZXIge1xuICAgIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4uYWNjb3JkaW9uTGluayB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYWNjb3JkaW9uTGluazp0YXJnZXQge1xuICAgIGNvbG9yOiAjZjc5YTdlO1xufVxuXG4uYW5zd2VyIHtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4uYW5zd2VyIHAge1xucGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5hbnN3ZXI6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgXG59XG5cbmEge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uYW50LWxheW91dCA+ICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IHVuc2V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XG5cbiAgICBuei1jYXJvdXNlbCB7XG4gICAgICAgIGhlaWdodDogNTB2dztcbiAgICAgICAgY29sb3I6ICMxNDNkNDI7XG4gICAgfVxuICAgICAgXG4gICAgLmRpYXNob3dQaWMge1xuICAgICAgICBoZWlnaHQ6IDUwdnc7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIH1cblxuICAgIGlmcmFtZSB7XG4gICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICBoZWlnaHQ6IDUwdmg7XG4gICAgfVxuXG4gICAgLnVwcGVyUm91bmRlZERpdiB7XG4gICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRhNGFhYzk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEyMHB4IDEyMHB4IDAgMDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgLmFkdmFudGFnZUNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIH1cblxuICAgIC5hZHZhbnRhZ2VOYW1lIHtcbiAgICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICBcbiAgICAuYWR2YW50YWdlRGVzY3JpcHRpb24ge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cblxuICAgICNjb250YWN0U2VjdGlvbkJvZHkge1xuICAgICAgICB3aWR0aDogMTAwJVxuICAgIH1cblxuICAgIC5jb250YWN0SW5mb3JtYXRpb24ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIC5jb250YWN0SW5mb3JtYXRpb24gcCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cbiAgICAuY29udGFjdEluZm9ybWF0aW9uIGltZyB7XG4gICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLnBhY2thZ2VEaXYge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXG4gICAgLmRpYXNob3dQaWMge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAuZm9ybWVkRGl2IHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgIC5hZHZhbnRhZ2VDb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICB9XG5cbiAgICAudXBwZXJSb3VuZGVkRGl2IHtcbiAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk0YTRhYWM5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMjBweCAxMjBweCAwIDA7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBcbiAgICAuYWR2YW50YWdlSWNvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIH1cbiAgICBcblxuICAgIC51cHBlclJvdW5kZWREaXYge1xuICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRhNGFhYzk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEyMHB4IDEyMHB4IDAgMDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG5cbiAgICAjY29udGFjdFNlY3Rpb25Cb2R5IHtcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICB9XG5cbiAgICAuY29udGFjdEluZm9ybWF0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG5cbiAgICAuY29udGFjdEluZm9ybWF0aW9uID4gKiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAuY29udGFjdEluZm9ybWF0aW9uIHAge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhY3RJbmZvcm1hdGlvbiBpbWcge1xuICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgIC5wYWNrYWdlRGl2IHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgXG4gICAgLnBhY2thZ2VQaWMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuZnVydGhlckluZm9ybWF0aW9uRG93bmxvYWREaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuZmFxUXVlc3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMCAzMHB4O1xuICAgIH1cblxuICAgIFxufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcblxuICAgIGgxIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgIG56LWNhcm91c2VsIHtcbiAgICAgICAgaGVpZ2h0OiA1MHZ3O1xuICAgICAgICBjb2xvcjogIzE0M2Q0MjtcbiAgICB9XG4gICAgICBcbiAgICAuZGlhc2hvd1BpYyB7XG4gICAgICAgIGhlaWdodDogNTB2dztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAjbWFpblRleHREaXYge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cblxuXG4gICAgI2Nhc0xvZ28ge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cblxuICAgIC5mb3JtZWREaXYge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgLmFkdmFudGFnZUNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIH1cblxuICAgIC51cHBlclJvdW5kZWREaXYge1xuICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRhNGFhYzk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEyMHB4IDEyMHB4IDAgMDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIFxuICAgIC5hZHZhbnRhZ2VJY29uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgfVxuICAgIFxuXG4gICAgLnVwcGVyUm91bmRlZERpdiB7XG4gICAgICAgIGhlaWdodDogMzAlO1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGE0YWFjOTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTIwcHggMTIwcHggMCAwO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAjZnVydGhlckluZm9ybWF0aW9uU3ViSGVhZGVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLmZ1cnRoZXJJbmZvcm1hdGlvbkRvd25sb2FkRGl2IGltZyB7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICB9XG5cbiAgICAjY29udGFjdFNlY3Rpb25Cb2R5IHtcbiAgICAgICAgd2lkdGg6IDEwMCVcbiAgICB9XG5cbiAgICAuY29udGFjdEluZm9ybWF0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmNvbnRhY3RJbmZvcm1hdGlvbiA+ICoge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAuY29udGFjdEluZm9ybWF0aW9uIHAge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhY3RJbmZvcm1hdGlvbiBpbWcge1xuICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgIC5wYWNrYWdlRGl2IHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgXG4gICAgLnBhY2thZ2VQaWMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuZnVydGhlckluZm9ybWF0aW9uRG93bmxvYWREaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuZmFxUXVlc3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMCAzMHB4O1xuICAgIH1cbiAgICBcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "PMIT":
    /*!*****************************************!*\
      !*** ./src/app/ng-zorro-antd.module.ts ***!
      \*****************************************/

    /*! exports provided: DemoNgZorroAntdModule */

    /***/
    function PMIT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DemoNgZorroAntdModule", function () {
        return DemoNgZorroAntdModule;
      });
      /* harmony import */


      var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng-zorro-antd/affix */
      "4hBO");
      /* harmony import */


      var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-zorro-antd/alert */
      "Wfee");
      /* harmony import */


      var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/anchor */
      "7vlg");
      /* harmony import */


      var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/auto-complete */
      "Jioy");
      /* harmony import */


      var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/avatar */
      "ZE2D");
      /* harmony import */


      var ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/back-top */
      "KAwd");
      /* harmony import */


      var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/badge */
      "SKKP");
      /* harmony import */


      var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/breadcrumb */
      "yNE/");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/calendar */
      "Py9c");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/carousel */
      "Etcd");
      /* harmony import */


      var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/cascader */
      "q0Us");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");
      /* harmony import */


      var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/collapse */
      "IvDN");
      /* harmony import */


      var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/comment */
      "ZVAZ");
      /* harmony import */


      var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/core/no-animation */
      "YF2q");
      /* harmony import */


      var ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/core/trans-button */
      "exsu");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-zorro-antd/date-picker */
      "0lU3");
      /* harmony import */


      var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/descriptions */
      "xB20");
      /* harmony import */


      var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/divider */
      "5vDB");
      /* harmony import */


      var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng-zorro-antd/drawer */
      "F6ss");
      /* harmony import */


      var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ng-zorro-antd/dropdown */
      "Nqz0");
      /* harmony import */


      var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ng-zorro-antd/empty */
      "QlLE");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rm4T");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ng-zorro-antd/image */
      "6ekq");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ng-zorro-antd/input-number */
      "z4wI");
      /* harmony import */


      var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ng-zorro-antd/layout */
      "yW9e");
      /* harmony import */


      var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ng-zorro-antd/list */
      "Ff2k");
      /* harmony import */


      var ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ng-zorro-antd/mention */
      "WCIo");
      /* harmony import */


      var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ng-zorro-antd/menu */
      "Q8cG");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ng-zorro-antd/notification */
      "bNXi");
      /* harmony import */


      var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ng-zorro-antd/page-header */
      "jPNr");
      /* harmony import */


      var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ng-zorro-antd/pagination */
      "3/1E");
      /* harmony import */


      var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ng-zorro-antd/popconfirm */
      "KupA");
      /* harmony import */


      var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ng-zorro-antd/popover */
      "+oEP");
      /* harmony import */


      var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ng-zorro-antd/progress */
      "W9fG");
      /* harmony import */


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "bE2y");
      /* harmony import */


      var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ng-zorro-antd/rate */
      "L1u3");
      /* harmony import */


      var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ng-zorro-antd/result */
      "Mean");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ng-zorro-antd/skeleton */
      "OtHt");
      /* harmony import */


      var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ng-zorro-antd/slider */
      "tAs6");
      /* harmony import */


      var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ng-zorro-antd/spin */
      "qAZ0");
      /* harmony import */


      var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ng-zorro-antd/statistic */
      "A07A");
      /* harmony import */


      var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ng-zorro-antd/steps */
      "OEtX");
      /* harmony import */


      var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ng-zorro-antd/switch */
      "EGpF");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "rMZv");
      /* harmony import */


      var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ng-zorro-antd/tabs */
      "oyxB");
      /* harmony import */


      var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ng-zorro-antd/tag */
      "ZyQt");
      /* harmony import */


      var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ng-zorro-antd/time-picker */
      "ix5O");
      /* harmony import */


      var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ng-zorro-antd/timeline */
      "ncdi");
      /* harmony import */


      var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ng-zorro-antd/tooltip */
      "nJia");
      /* harmony import */


      var ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ng-zorro-antd/transfer */
      "GuFl");
      /* harmony import */


      var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! ng-zorro-antd/tree */
      "nxWG");
      /* harmony import */


      var ng_zorro_antd_tree_view__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! ng-zorro-antd/tree-view */
      "wFtU");
      /* harmony import */


      var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! ng-zorro-antd/tree-select */
      "VXpv");
      /* harmony import */


      var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! ng-zorro-antd/typography */
      "eHCX");
      /* harmony import */


      var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! ng-zorro-antd/upload */
      "D9mS");
      /* harmony import */


      var ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! ng-zorro-antd/resizable */
      "1zMu");
      /* harmony import */


      var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! ng-zorro-antd/pipes */
      "HSCc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DemoNgZorroAntdModule = function DemoNgZorroAntdModule() {
        _classCallCheck(this, DemoNgZorroAntdModule);
      };

      DemoNgZorroAntdModule.ɵfac = function DemoNgZorroAntdModule_Factory(t) {
        return new (t || DemoNgZorroAntdModule)();
      };

      DemoNgZorroAntdModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_68__["ɵɵdefineNgModule"]({
        type: DemoNgZorroAntdModule
      });
      DemoNgZorroAntdModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_68__["ɵɵdefineInjector"]({
        imports: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_0__["NzAffixModule"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__["NzAlertModule"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_2__["NzAnchorModule"], ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__["NzAutocompleteModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"], ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_5__["NzBackTopModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__["NzBadgeModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_7__["NzBreadCrumbModule"], ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_9__["NzCalendarModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__["NzCardModule"], ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_11__["NzCarouselModule"], ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_12__["NzCascaderModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__["NzCheckboxModule"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_14__["NzCollapseModule"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_15__["NzCommentModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__["NzDatePickerModule"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_20__["NzDescriptionsModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__["NzDividerModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_22__["NzDrawerModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_23__["NzDropDownModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_24__["NzEmptyModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__["NzGridModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_27__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__["NzIconModule"], ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_29__["NzImageModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__["NzInputModule"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_31__["NzInputNumberModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_32__["NzLayoutModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_33__["NzListModule"], ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_34__["NzMentionModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_35__["NzMenuModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_36__["NzMessageModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_37__["NzModalModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__["NzNoAnimationModule"], ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_38__["NzNotificationModule"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_39__["NzPageHeaderModule"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_40__["NzPaginationModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_41__["NzPopconfirmModule"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_42__["NzPopoverModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_43__["NzProgressModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_44__["NzRadioModule"], ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_45__["NzRateModule"], ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_46__["NzResultModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_47__["NzSelectModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_48__["NzSkeletonModule"], ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_49__["NzSliderModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_50__["NzSpinModule"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_51__["NzStatisticModule"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_52__["NzStepsModule"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_53__["NzSwitchModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_54__["NzTableModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_55__["NzTabsModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_56__["NzTagModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_57__["NzTimePickerModule"], ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_58__["NzTimelineModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_59__["NzToolTipModule"], ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_17__["NzTransButtonModule"], ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_60__["NzTransferModule"], ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_61__["NzTreeModule"], ng_zorro_antd_tree_view__WEBPACK_IMPORTED_MODULE_62__["NzTreeViewModule"], ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_63__["NzTreeSelectModule"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_64__["NzTypographyModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_65__["NzUploadModule"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__["NzWaveModule"], ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_66__["NzResizableModule"], ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_67__["NzPipesModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_68__["ɵɵsetNgModuleScope"](DemoNgZorroAntdModule, {
          exports: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_0__["NzAffixModule"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_1__["NzAlertModule"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_2__["NzAnchorModule"], ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_3__["NzAutocompleteModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"], ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_5__["NzBackTopModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__["NzBadgeModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_7__["NzBreadCrumbModule"], ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_9__["NzCalendarModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__["NzCardModule"], ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_11__["NzCarouselModule"], ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_12__["NzCascaderModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_13__["NzCheckboxModule"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_14__["NzCollapseModule"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_15__["NzCommentModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__["NzDatePickerModule"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_20__["NzDescriptionsModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__["NzDividerModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_22__["NzDrawerModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_23__["NzDropDownModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_24__["NzEmptyModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__["NzGridModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_27__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_28__["NzIconModule"], ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_29__["NzImageModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__["NzInputModule"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_31__["NzInputNumberModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_32__["NzLayoutModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_33__["NzListModule"], ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_34__["NzMentionModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_35__["NzMenuModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_36__["NzMessageModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_37__["NzModalModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__["NzNoAnimationModule"], ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_38__["NzNotificationModule"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_39__["NzPageHeaderModule"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_40__["NzPaginationModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_41__["NzPopconfirmModule"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_42__["NzPopoverModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_43__["NzProgressModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_44__["NzRadioModule"], ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_45__["NzRateModule"], ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_46__["NzResultModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_47__["NzSelectModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_48__["NzSkeletonModule"], ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_49__["NzSliderModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_50__["NzSpinModule"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_51__["NzStatisticModule"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_52__["NzStepsModule"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_53__["NzSwitchModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_54__["NzTableModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_55__["NzTabsModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_56__["NzTagModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_57__["NzTimePickerModule"], ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_58__["NzTimelineModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_59__["NzToolTipModule"], ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_17__["NzTransButtonModule"], ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_60__["NzTransferModule"], ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_61__["NzTreeModule"], ng_zorro_antd_tree_view__WEBPACK_IMPORTED_MODULE_62__["NzTreeViewModule"], ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_63__["NzTreeSelectModule"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_64__["NzTypographyModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_65__["NzUploadModule"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__["NzWaveModule"], ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_66__["NzResizableModule"], ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_67__["NzPipesModule"]]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/services/header.service */
      "W8UZ");
      /* harmony import */


      var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/layout */
      "yW9e");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");

      function AppComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kontakt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
        }
      }

      function AppComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.home();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, headerService) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.headerService = headerService;
          this.title = 'cas-customer-page';
          this.showContactButton = true;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "register",
          value: function register() {
            this.router.navigate(['register']);
          }
        }, {
          key: "home",
          value: function home() {
            this.router.navigate(['']);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_services_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 60,
        vars: 2,
        consts: [["id", "logoHeader", "src", "../assets/Logo.png", "alt", "bill.less logo"], ["nz-button", "", "class", "login-form-button login-form-margin contactButtonHeader", 3, "nzType", "click", 4, "ngIf"], ["id", "billlessLogo"], ["id", "wrapperFooter"], ["id", "footerInfo"], ["href", "https://billless.app/"], ["id", "logoFooter", "src", "../assets/logo192.png", "alt", "billlessLogo"], ["href", "https://billless.app/app"], ["href", "https://billless.app/b2b"], ["href", "https://billless.app/aboutus"], ["href", "https://api-test.billless.io/api-docs/"], ["id", "socialMediaSectionFooter"], ["href", ""], ["src", "../assets/linkedin.png", "alt", "linkedInIcon"], ["href", "https://www.instagram.com/bill.less/"], ["src", "../assets/instagram-logo.png", "alt", "instagramIcon"], ["src", "../assets/facebook.png", "alt", "facebookIcon"], ["src", "../assets/whatsapp.png", "alt", "whatsappIcon"], ["id", "contactSectionFooter"], ["id", "contactButtonFooter"], ["id", "footerPrivacy"], ["href", "https://billless.app/imprint"], ["href", "https://billless.app/policy"], ["id", "footerCopyright"], ["nz-button", "", 1, "login-form-button", "login-form-margin", "contactButtonHeader", 3, "nzType", "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_button_4_Template, 2, 1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_button_5_Template, 2, 1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "App");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "For Buisness");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Our team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "API Docs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "info@billless.app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "+49 162 9573494");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Imprint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Privacy notice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " \xA9 bill.less 2021 | Stuttgart ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.headerService.getSwitchButtonToHome());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerService.getSwitchButtonToHome());
          }
        },
        directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzFooterComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"]],
        styles: ["@font-face {\n  font-family: \"muliBillLess\";\n  src: local(\"muliBillLess\") url('Muli-VariableFont:wght.ttf') format(\"truetype\");\n}\n*[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n  font-family: \"muliBillLess\", sans-serif, Helvetica, Arial;\n  overflow-x: hidden;\n}\n\n#billlessLogo[_ngcontent-%COMP%] {\n  display: none;\n}\n.ant-layout-header[_ngcontent-%COMP%] {\n  background-color: white;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.contactButtonHeader[_ngcontent-%COMP%] {\n  background-color: #f79a7e;\n  color: white;\n  border-radius: 4px;\n  border: 2px solid #f79a7e;\n  cursor: pointer;\n  float: right;\n  height: 50px;\n  width: 110px;\n  margin-top: 50px;\n}\n#logoHeader[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: 50px 50px;\n}\n\nfooter[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: #fff;\n  justify-content: center;\n}\n.ant-layout-footer[_ngcontent-%COMP%] {\n  background-color: #282c34;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23282c34' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%232f343d' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23292d35' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%232d323b' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23292d36' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%232c3039' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%232a2e36' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%232a2f37' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%232a2e37' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23292d35' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%232b2f38' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23272b33' points='943 900 1210 900 971 687'/%3E%3C/svg%3E\");\n  background-size: cover;\n}\n#wrapperFooter[_ngcontent-%COMP%] {\n  padding: 3vw;\n  margin: 0 auto;\n}\n#footerInfo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n#footerInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 33%;\n  text-align: center;\n}\n#logoFooter[_ngcontent-%COMP%] {\n  width: 50px;\n}\n#socialIconsDiv[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: space-evenly;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  text-align: center;\n  display: block;\n  padding: 0;\n  margin: 0;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n#socialMediaSectionFooter[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: center;\n  justify-content: space-evenly;\n}\n#socialMediaSectionFooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\nfooter[_ngcontent-%COMP%]   #contactSectionFooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 1rem;\n  display: inline-block;\n}\n#contactButtonFooter[_ngcontent-%COMP%] {\n  background-color: #f79a7e;\n  color: white;\n  border-radius: 4px;\n  border: 2px solid #f79a7e;\n  cursor: pointer;\n  margin: 1rem;\n}\n#socialMediaSectionFooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n#footerPrivacy[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#footerCopyright[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  text-align: center;\n}\n@media only screen and (max-width: 950px) {\n  #billlessLogo[_ngcontent-%COMP%] {\n    display: none;\n    visibility: none;\n  }\n\n  #socialMediaSectionFooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 650px) {\n  #billlessLogo[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: #fff;\n    text-align: center;\n    display: block;\n  }\n\n  #logoHeader[_ngcontent-%COMP%] {\n    margin: 30px auto;\n  }\n\n  nz-header[_ngcontent-%COMP%] {\n    visibility: hidden;\n    position: absolute;\n    margin: 0%;\n    display: none;\n  }\n\n  #footerInfo[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  #footerInfo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    width: 100%;\n  }\n\n  #socialMediaSectionFooter[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  #socialMediaSectionFooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsK0VBQUE7QUFDSjtBQUdBO0VBQ0ksdUJBQUE7RUFDQSx5REFBQTtFQUNBLGtCQUFBO0FBREo7QUFJQSxXQUFBO0FBRUE7RUFDSSxhQUFBO0FBRko7QUFLQTtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBRko7QUFLQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUtBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBRko7QUFPQSxXQUFBO0FBRUE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7QUFMSjtBQVFBO0VBQ0kseUJBQUE7RUFDQSwwNEJBQUE7RUFDQSxzQkFBQTtBQUxKO0FBUUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQUxKO0FBUUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7QUFMSjtBQVFBO0VBRUksVUFBQTtFQUNBLGtCQUFBO0FBTko7QUFTQTtFQUNJLFdBQUE7QUFOSjtBQVNBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtBQU5KO0FBU0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBTko7QUFTQTtFQUNJLFlBQUE7QUFOSjtBQVNBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFOSjtBQVNBO0VBQ0ksWUFBQTtBQU5KO0FBU0E7RUFDQyxZQUFBO0VBQ0EscUJBQUE7QUFORDtBQVdBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBUko7QUFXQTtFQUNJLFdBQUE7QUFSSjtBQVdBO0VBQ0ksa0JBQUE7QUFSSjtBQVdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQVJKO0FBWUE7RUFFSTtJQUNJLGFBQUE7SUFDQSxnQkFBQTtFQVZOOztFQWFFO0lBQ0ksV0FBQTtFQVZOO0FBQ0Y7QUFlQTtFQU1JO0lBQ0ksV0FBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VBbEJOOztFQXFCRTtJQUNJLGlCQUFBO0VBbEJOOztFQXFCRTtJQUNJLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtFQWxCTjs7RUFxQkU7SUFDSSxjQUFBO0VBbEJOOztFQXFCRTtJQUNJLGNBQUE7SUFDQSxXQUFBO0VBbEJOOztFQXFCRTtJQUNJLFdBQUE7RUFsQk47O0VBcUJFO0lBQ0ksV0FBQTtFQWxCTjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIm11bGlCaWxsTGVzc1wiO1xuICAgIHNyYzogbG9jYWwoXCJtdWxpQmlsbExlc3NcIikgdXJsKFwiLi4vZm9udHMvTXVsaS1WYXJpYWJsZUZvbnQ6d2dodC50dGZcIikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG5cbioge1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgIGZvbnQtZmFtaWx5OiBcIm11bGlCaWxsTGVzc1wiLCBzYW5zLXNlcmlmLCBIZWx2ZXRpY2EsIEFyaWFsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLyogSGVhZGVyICovXG5cbiNiaWxsbGVzc0xvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hbnQtbGF5b3V0LWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLmNvbnRhY3RCdXR0b25IZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNzlhN2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjc5YTdlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4jbG9nb0hlYWRlciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjogNTBweCA1MHB4O1xufVxuXG5cblxuLyogRm9vdGVyICovXG5cbmZvb3RlciAqIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFudC1sYXlvdXQtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYwMCA5MDAnJTNFJTNDcG9seWdvbiBmaWxsPSclMjMyODJjMzQnIHBvaW50cz0nOTU3IDQ1MCA1MzkgOTAwIDEzOTYgOTAwJy8lM0UlM0Nwb2x5Z29uIGZpbGw9JyUyMzJmMzQzZCcgcG9pbnRzPSc5NTcgNDUwIDg3Mi45IDkwMCAxMzk2IDkwMCcvJTNFJTNDcG9seWdvbiBmaWxsPSclMjMyOTJkMzUnIHBvaW50cz0nLTYwIDkwMCAzOTggNjYyIDgxNiA5MDAnLyUzRSUzQ3BvbHlnb24gZmlsbD0nJTIzMmQzMjNiJyBwb2ludHM9JzMzNyA5MDAgMzk4IDY2MiA4MTYgOTAwJy8lM0UlM0Nwb2x5Z29uIGZpbGw9JyUyMzI5MmQzNicgcG9pbnRzPScxMjAzIDU0NiAxNTUyIDkwMCA4NzYgOTAwJy8lM0UlM0Nwb2x5Z29uIGZpbGw9JyUyMzJjMzAzOScgcG9pbnRzPScxMjAzIDU0NiAxNTUyIDkwMCAxMTYyIDkwMCcvJTNFJTNDcG9seWdvbiBmaWxsPSclMjMyYTJlMzYnIHBvaW50cz0nNjQxIDY5NSA4ODYgOTAwIDM2NyA5MDAnLyUzRSUzQ3BvbHlnb24gZmlsbD0nJTIzMmEyZjM3JyBwb2ludHM9JzU4NyA5MDAgNjQxIDY5NSA4ODYgOTAwJy8lM0UlM0Nwb2x5Z29uIGZpbGw9JyUyMzJhMmUzNycgcG9pbnRzPScxNzEwIDkwMCAxNDAxIDYzMiAxMDk2IDkwMCcvJTNFJTNDcG9seWdvbiBmaWxsPSclMjMyOTJkMzUnIHBvaW50cz0nMTcxMCA5MDAgMTQwMSA2MzIgMTM2NSA5MDAnLyUzRSUzQ3BvbHlnb24gZmlsbD0nJTIzMmIyZjM4JyBwb2ludHM9JzEyMTAgOTAwIDk3MSA2ODcgNzI1IDkwMCcvJTNFJTNDcG9seWdvbiBmaWxsPSclMjMyNzJiMzMnIHBvaW50cz0nOTQzIDkwMCAxMjEwIDkwMCA5NzEgNjg3Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbiN3cmFwcGVyRm9vdGVyIHtcbiAgICBwYWRkaW5nOiAzdnc7XG4gICAgbWFyZ2luOiAwIGF1dG87IFxufVxuXG4jZm9vdGVySW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuI2Zvb3RlckluZm8gPiBkaXYge1xuICAgIC8vZmxleDogMTtcbiAgICB3aWR0aDogMzMlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2xvZ29Gb290ZXIge1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4jc29jaWFsSWNvbnNEaXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbnVsIGxpIHtcbiAgICBtYXJnaW46IDFyZW07XG59XG5cbiNzb2NpYWxNZWRpYVNlY3Rpb25Gb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4jc29jaWFsTWVkaWFTZWN0aW9uRm9vdGVyIGEge1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuZm9vdGVyICNjb250YWN0U2VjdGlvbkZvb3RlciBhe1xuIG1hcmdpbjogMXJlbTtcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cblxuXG4jY29udGFjdEJ1dHRvbkZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3OWE3ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNzlhN2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuI3NvY2lhbE1lZGlhU2VjdGlvbkZvb3RlciBhIGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG59XG5cbiNmb290ZXJQcml2YWN5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmb290ZXJDb3B5cmlnaHQge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcblxuICAgICNiaWxsbGVzc0xvZ28ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB2aXNpYmlsaXR5OiBub25lO1xuICAgIH1cblxuICAgICNzb2NpYWxNZWRpYVNlY3Rpb25Gb290ZXIgYSBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG5cbiAgICAqIHsgXG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAjYmlsbGxlc3NMb2dvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgI2xvZ29IZWFkZXIge1xuICAgICAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICB9XG5cbiAgICBuei1oZWFkZXIge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luOiAwJTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAjZm9vdGVySW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICNmb290ZXJJbmZvID4gZGl2IHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICNzb2NpYWxNZWRpYVNlY3Rpb25Gb290ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAjc29jaWFsTWVkaWFTZWN0aW9uRm9vdGVyIGEgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5cblxuIl19 */"]
      });
      /***/
    },

    /***/
    "W8UZ":
    /*!*******************************************************!*\
      !*** ./src/app/components/services/header.service.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderService */

    /***/
    function W8UZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderService", function () {
        return HeaderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HeaderService = /*#__PURE__*/function () {
        function HeaderService(router) {
          _classCallCheck(this, HeaderService);

          this.router = router;
          this.switchButtonToHome = false;
        }

        _createClass(HeaderService, [{
          key: "ngOnInit",
          value: function ngOnInit() {//this.switchButtonToHome = this.router.isActive('register', true)
          }
        }, {
          key: "changeButtonToHome",
          value: function changeButtonToHome(switchButtonToHome) {
            this.switchButtonToHome = switchButtonToHome;
          }
        }, {
          key: "getSwitchButtonToHome",
          value: function getSwitchButtonToHome() {
            this.switchButtonToHome = this.router.isActive('register', true);
            return this.switchButtonToHome;
          }
        }]);

        return HeaderService;
      }();

      HeaderService.ɵfac = function HeaderService_Factory(t) {
        return new (t || HeaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      HeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HeaderService,
        factory: HeaderService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "XC3f":
    /*!***********************************************************!*\
      !*** ./src/app/components/register/register.component.ts ***!
      \***********************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function XC3f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/descriptions */
      "xB20");
      /* harmony import */


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "bE2y");

      function RegisterComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Haben Sie von CAS die Lizenzdatei / das Softwareupdate f\xFCr das Modul \"elektronischer Kassenbeleg / bill.less bereits\" auf ihrer Kasse installiert? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_div_6_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.handleCustomerIsRegistered();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Ja ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_div_6_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r8.handleCustomerIsNotRegistered();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Nein ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.customerIsRegistered);
        }
      }

      function RegisterComponent_div_8_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_div_8_div_4_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var package_r10 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r11.handleClickOnPackage(package_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var package_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "../../../assets/", package_r10.packageId, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function RegisterComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "W\xE4hlen Sie ein Paket Ihrer Wahl:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RegisterComponent_div_8_div_4_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_div_8_Template_img_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.handleClickOnCustomePackage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.packagesData);
        }
      }

      function RegisterComponent_div_9_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_div_9_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r18.handleClickOnChangeOrderDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Angebot bearbeiten ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_9_ng_template_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-select", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_div_9_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r20.handleClickOnBackToPackages();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Packetauswahl ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RegisterComponent_div_9_button_4_Template, 2, 0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_div_9_Template_form_ngSubmit_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r22.submitContactDetailsForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-form-label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Kontaktperson (Vor- und Nachname)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-control", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-form-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Unternehmensname");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-form-control", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nz-form-label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Stra\xDFe");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "nz-form-control", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nz-form-label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Hausnummer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nz-form-control", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nz-form-label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Plz");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nz-form-control", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "nz-form-label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Ort");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "nz-form-control", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "nz-form-label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "nz-form-control", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "nz-form-label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Telefonnummer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "nz-form-control", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "nz-input-group", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, RegisterComponent_div_9_ng_template_54_Template, 2, 0, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "nz-form-label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Seriennummer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "nz-form-control", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "nz-form-item", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "nz-form-control", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " I have read the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "agreement");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "nz-form-item", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "nz-form-control", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Zur Bestell\xFCbersicht");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](55);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.customOrder);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Gew\xE4hltes Paket: ", ctx_r2.selectedPackage.packageName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.validateForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24)("nzValidateStatus", ctx_r2.validateForm.controls["phoneNumber"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnBefore", _r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 14)("nzOffset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 14)("nzOffset", 6);
        }
      }

      function RegisterComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_div_10_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.handleClickOnBackToPackages();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Packetauswahl ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Gew\xE4hltes Paket: Enterprise");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_div_10_Template_form_ngSubmit_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r25.submitEnterpriseOrderForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-form-label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Anzahl der Kassensysteme");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-form-control", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-form-label", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Anzahl an monatlichen Belegen");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-form-control", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-form-label", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Anzahl an Admins");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nz-form-control", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "nz-form-label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Anzahl an Usern");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "nz-form-control", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "nz-form-item", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nz-form-control", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Weiter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r3.customOrderForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 14)("nzOffset", 6);
        }
      }

      function RegisterComponent_div_11_nz_descriptions_item_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-descriptions-item", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rechnung");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_11_nz_descriptions_item_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-descriptions-item", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r27.selectedPackage.price);
        }
      }

      function RegisterComponent_div_11_button_71_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_div_11_button_71_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r30.handleSubmitOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Kostenpflichtig bestellen ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_11_button_72_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_div_11_button_72_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r32.handleSubmitOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Angebot anfragen ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          xxl: 1,
          xl: 1,
          lg: 1,
          md: 1,
          sm: 1,
          xs: 1
        };
      };

      function RegisterComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-descriptions", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-descriptions-item", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RegisterComponent_div_11_nz_descriptions_item_6_Template, 2, 0, "nz-descriptions-item", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-descriptions-item", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-descriptions", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-descriptions-item", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-descriptions-item", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-descriptions-item", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-descriptions-item", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RegisterComponent_div_11_nz_descriptions_item_17_Template, 2, 1, "nz-descriptions-item", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "nz-descriptions", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-descriptions-item", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-descriptions-item", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "nz-descriptions-item", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "nz-descriptions-item", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "nz-descriptions-item", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nz-descriptions-item", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nz-descriptions-item", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "nz-descriptions-item", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nz-descriptions-item", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Gew\xFCnschte Kontaktaufnahme zur Zusendung des Angebotes:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "nz-radio-group", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_div_11_Template_nz_radio_group_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r34.selectedContactOption = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Telefon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Um den digitalen Beleg an der Kasse auszugeben sind folgende Bedingungen notwendig: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "1. Ihre Kasse verf\xFCgt \xFCber ein Kundendisplay");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " 2. Sie haben eine stabile Internetverbindung (mind. 50 MBit/s) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " 3. Sie haben die Lizenzdatei f\xFCr das Modul \"Elektronischer Kassenbeleg / bill.less\" von CAS erworben ist auf der Kasse installiert ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_div_11_Template_label_ngModelChange_61_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r36.agbChecked = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "a", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "AGB");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " zustimmen");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_div_11_Template_label_ngModelChange_67_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r37.privacyChecked = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Sie geben sich damit einverstanden, dass die angegebenen Daten nach Ma\xDFgabe unserer Datenschutzrichtlinie elektronisch erhoben und gespeichert werden. Ebenfalls stimmen Sie zu, dass wir die Daten an die CAS Software AG weiterleiten d\xFCrfen. Die Daten werden dabei nur streng zweckgebunden genutzt. Diese Einwilligung kann jederzeit durch eine E-Mail an datenschutz@billless.app widerrufen werden. Im Falle des Widerrufs werden die Daten umgehend gel\xF6scht. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, RegisterComponent_div_11_button_71_Template, 2, 0, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, RegisterComponent_div_11_button_72_Template, 2, 0, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColumn", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.selectedPackage.packageName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.customOrder);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColumn", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.selectedPackage.content.amountOfCashpoint);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.selectedPackage.content.amountOfReceiptsPerMonth);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.selectedPackage.content.amountOfAdmins);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.selectedPackage.content.amountOfUsers);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.customOrder);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzColumn", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.validateForm.value.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.validateForm.value.companyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.validateForm.value.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.validateForm.value.street);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.validateForm.value.houseNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.validateForm.value.postCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.validateForm.value.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r4.validateForm.value.phoneNumberPrefix, "", ctx_r4.validateForm.value.phoneNumber, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.validateForm.value.serialNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.selectedContactOption);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.agbChecked);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.privacyChecked);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.customOrder);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.customOrder);
        }
      }

      function RegisterComponent_div_12_ng_template_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-select", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Vielen Dank, dass Sie bill.less nutzen m\xF6chten.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Um den digitalen Beleg an der Kasse auszugeben sind folgende Bedingungen notwendig: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "1. Ihre Kasse verf\xFCgt \xFCber ein Kundendisplay");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " 2. Sie haben eine stabile Internetverbindung (mind. 50 MBit/s) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " 3. Sie haben die Lizenzdatei f\xFCr das Modul \"Elektronischer Kassenbeleg / bill.less\" von CAS erworben ist auf der Kasse installiert ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Wir leiten Ihre Anfrage zum Erwerb des Moduls gerne an CAS weiter. Bitte f\xFCllen Sie uns hierzu das nachfolgende Kontaktformular aus: Bei Unklarkeiten wenden Sie sich bitte an Ihren zust\xE4ndigen Kassenh\xE4ndler. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "form", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_div_12_Template_form_ngSubmit_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r40.submitContactDetailsForm;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "nz-form-label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-form-control", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nz-form-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Unternehmensname");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "nz-form-control", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "nz-form-label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nz-form-control", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nz-form-label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "nz-form-control", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "nz-input-group", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, RegisterComponent_div_12_ng_template_40_Template, 2, 0, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "nz-form-label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Seriennummer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "nz-form-control", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "nz-form-item", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "nz-form-control", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Sie geben sich damit einverstanden, dass die angegebenen Daten nach Ma\xDFgabe unserer Datenschutzrichtlinie elektronisch erhoben und gespeichert werden. Ebenfalls stimmen Sie zu, dass wir die Daten an die CAS Software AG weiterleiten d\xFCrfen. Die Daten werden dabei nur streng zweckgebunden genutzt. Diese Einwilligung kann jederzeit durch eine E-Mail an datenschutz@billless.app widerrufen werden. Im Falle des Widerrufs werden die Daten umgehend gel\xF6scht. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "nz-form-item", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "nz-form-control", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_div_12_Template_button_click_56_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r42.handleSubmitRegisterForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Registrieren ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r5.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24)("nzValidateStatus", ctx_r5.validateForm.controls["phoneNumber"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnBefore", _r38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 6)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 14)("nzOffset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSpan", 14)("nzOffset", 6);
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(fb, router, appComponent) {
          _classCallCheck(this, RegisterComponent);

          this.fb = fb;
          this.router = router;
          this.appComponent = appComponent;
          this.packagesData = [{
            packageName: 'Starter',
            content: {
              amountOfCashpoint: 1,
              amountOfReceiptsPerMonth: 100,
              amountOfAdmins: 1,
              amountOfUsers: 1
            },
            price: 1,
            packageId: 'starter'
          }, {
            packageName: 'Basic',
            content: {
              amountOfCashpoint: 1,
              amountOfReceiptsPerMonth: 1000,
              amountOfAdmins: 1,
              amountOfUsers: 2
            },
            price: 1,
            packageId: 'basic'
          }, {
            packageName: 'Classic',
            content: {
              amountOfCashpoint: 3,
              amountOfReceiptsPerMonth: 3000,
              amountOfAdmins: 2,
              amountOfUsers: 4
            },
            price: 1,
            packageId: 'classic'
          }, {
            packageName: 'Premium',
            content: {
              amountOfCashpoint: 6,
              amountOfReceiptsPerMonth: 6000,
              amountOfAdmins: 3,
              amountOfUsers: 8
            },
            price: 1,
            packageId: 'premium'
          }];
          this.selectedPackage = {
            packageName: 'No package selected',
            content: {
              amountOfCashpoint: 0,
              amountOfReceiptsPerMonth: 0,
              amountOfAdmins: 0,
              amountOfUsers: 0
            },
            price: 0,
            packageId: ''
          };
          this.showButtons = true;
          this.customerIsRegistered = false;
          this.showPackages = false;
          this.showOrdersContactDetailsForm = false;
          this.showOrderOverview = false;
          this.customOrder = false;
          this.showCustomOrderForm = false;
          this.showRegisterContactForm = false;
          this.agbChecked = false;
          this.privacyChecked = false;
          this.selectedContactOption = "email";
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validateForm = this.fb.group({
              name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              companyName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              street: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              houseNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              postCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              city: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              phoneNumberPrefix: ['+49'],
              phoneNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              serialNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              agree: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].requiredTrue]]
            });
            this.customOrderForm = this.fb.group({
              numberOfCashpoints: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              numberOfReceipts: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              numberOfAdmins: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              numberOfUsers: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
            });
            this.registerForm = this.fb.group({
              name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              companyName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              phoneNumberPrefix: ['+49'],
              phoneNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              serialNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              agree: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].requiredTrue]]
            });
          }
        }, {
          key: "submitEnterpriseOrderForm",
          value: function submitEnterpriseOrderForm() {
            if (!this.customOrderForm.valid) {
              alert('Bitte füllen Sie alle Felder aus!');
              return;
            }

            for (var i in this.customOrderForm.controls) {
              this.customOrderForm.controls[i].markAsDirty();
              this.customOrderForm.controls[i].updateValueAndValidity();
            }

            this.selectedPackage = {
              packageName: 'Enterprise',
              content: {
                amountOfCashpoint: this.customOrderForm.value.numberOfCashpoints,
                amountOfReceiptsPerMonth: this.customOrderForm.value.numberOfReceipts,
                amountOfAdmins: this.customOrderForm.value.numberOfAdmins,
                amountOfUsers: this.customOrderForm.value.numberOfUsers
              },
              price: "",
              packageId: 'enterprise'
            };
            this.showCustomOrderForm = false;
            this.showOrdersContactDetailsForm = true;
          }
        }, {
          key: "submitContactDetailsForm",
          value: function submitContactDetailsForm() {
            if (!this.validateForm.valid) {
              alert('Bitte füllen Sie alle Felder aus!');
              return;
            }

            for (var i in this.validateForm.controls) {
              this.validateForm.controls[i].markAsDirty();
              this.validateForm.controls[i].updateValueAndValidity();
            }

            this.showOrdersContactDetailsForm = false;
            this.showOrderOverview = true;
          }
          /*  updateConfirmValidator(): void {
                 Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
           }
               confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
             if (!control.value) {
               return { required: true };
             } else if (control.value !== this.validateForm.controls.password.value) {
               return { confirm: true, error: true };
             }
             return {};
           }; */

        }, {
          key: "handleCustomerIsRegistered",
          value: function handleCustomerIsRegistered() {
            this.customerIsRegistered = true;
            this.showButtons = false;
            this.showPackages = true;
          }
        }, {
          key: "handleCustomerIsNotRegistered",
          value: function handleCustomerIsNotRegistered() {
            this.customerIsRegistered = false;
            this.showButtons = false;
            this.showRegisterContactForm = true;
          }
        }, {
          key: "handleClickOnPackage",
          value: function handleClickOnPackage(selectedPackage) {
            this.selectedPackage = selectedPackage;
            this.showPackages = false;
            this.showOrdersContactDetailsForm = true;
          }
        }, {
          key: "handleClickOnCustomePackage",
          value: function handleClickOnCustomePackage() {
            this.showPackages = false;
            this.showCustomOrderForm = true;
            this.customOrder = true;
          }
        }, {
          key: "handleClickOnBackToPackages",
          value: function handleClickOnBackToPackages() {
            this.showPackages = true;
            this.showOrdersContactDetailsForm = false;
            this.showCustomOrderForm = false;
            this.customOrder = false;
          }
        }, {
          key: "handleClickOnChangeOrderDetails",
          value: function handleClickOnChangeOrderDetails() {
            this.showOrdersContactDetailsForm = false;
            this.showCustomOrderForm = true;
          }
        }, {
          key: "handleSubmitOrder",
          value: function handleSubmitOrder() {
            if (this.agbChecked && this.privacyChecked) {
              if (!this.customOrder) {
                alert('Ihre Bestellung wurde in Auftrag gegeben und wird von uns verarbeitet!');
              } else {
                alert('Ihr Anfrage ist eingegeangen und wird von uns bearbeitet!');
              }

              console.log(this.selectedContactOption);
              this.router.navigate(['']);
            } else {
              alert('Bitte stimmen Sie sowohl unseren AGB als auch unserer Datenschutzrichtlinie zu!');
            }
          }
        }, {
          key: "handleSubmitRegisterForm",
          value: function handleSubmitRegisterForm() {}
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 13,
        vars: 6,
        consts: [["id", "headerTextDiv"], [1, "sectionHeader"], ["id", "container"], ["id", "buttonDiv", 4, "ngIf"], ["id", "packagesDiv", 4, "ngIf"], [4, "ngIf"], ["id", "overviewContainer", 4, "ngIf"], ["id", "registerContactFormContainer", 4, "ngIf"], ["id", "buttonDiv"], ["nz-button", "", 3, "disabled", "click"], ["nz-button", "", 3, "click"], ["id", "packagesDiv"], ["id", "packagesContainer"], ["class", "package", 3, "click", 4, "ngFor", "ngForOf"], [1, "package"], ["src", "../../../assets/enterprise.png", "alt", "", 3, "click"], [1, "package", 3, "click"], ["alt", "", 3, "src"], ["id", "orderFormPackageInfo"], ["nz-button", "", 3, "click", 4, "ngIf"], ["nz-form", "", 3, "formGroup", "ngSubmit"], ["nzFor", "name", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Bitte einen Namen eingeben!", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "name", "formControlName", "name"], ["nzFor", "companyName", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Bitte einen Unternehmennamen eingeben!", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "companyName", "formControlName", "companyName"], ["nzFor", "street", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Bitte einen Stra\xDFenamen eingeben!", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "street", "formControlName", "street"], ["nzFor", "houseNumber", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Bitte eine Hausnummer eingeben!", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "houseNumber", "formControlName", "houseNumber"], ["nzFor", "postCode", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Bitte eine Postleitzahl eingeben!", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "postCode", "formControlName", "postCode"], ["nzFor", "city", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Bitte einen Ortsnamen eingeben!", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "city", "formControlName", "city"], ["nzRequired", "", "nzFor", "email", 3, "nzSm", "nzXs"], ["nzErrorTip", "Bitte eine g\xFCltige Email eingeben!", 3, "nzSm", "nzXs"], ["nz-input", "", "formControlName", "email", "id", "email"], ["nzFor", "phoneNumber", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input your phone number!", 3, "nzSm", "nzXs", "nzValidateStatus"], [3, "nzAddOnBefore"], ["addOnBeforeTemplate", ""], ["formControlName", "phoneNumber", "id", "'phoneNumber'", "nz-input", ""], ["nzFor", "seriennummer", "nzRequired", "", "nzTooltipTitle", "Die Seriennummer wird ben\xF6tigt um zu \xFCberpr\xFCfen, ob Ihre Kasse den Anforderungen entspricht und die bill.less Funktion freizuschalten", 3, "nzSm", "nzXs"], ["nzErrorTip", "Bitte Seriennummer eingeben!", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "serialNumber", "formControlName", "serialNumber"], ["nz-row", "", 1, "register-area"], [3, "nzSpan", "nzOffset"], ["nz-checkbox", "", "formControlName", "agree"], ["target", "_blank", "href", ""], ["nz-button", ""], ["formControlName", "phoneNumberPrefix", 1, "phone-select"], ["nzLabel", "+49", "nzValue", "+49"], ["nzFor", "numberOfCashpoints", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Bitte eine Anzahl eingeben!", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "numberOfCashpoints", "formControlName", "numberOfCashpoints"], ["nzFor", "numberOfReceipts", "nzRequired", "", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "numberOfReceipts", "formControlName", "numberOfReceipts"], ["nzFor", "numberOfAdmins", "nzRequired", "", 3, "nzSm", "nzXs"], ["nzErrorTip", "Bitte eine Anzahleingeben!", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "numberOfAdmins", "formControlName", "numberOfAdmins"], ["nzFor", "numberOfUsers", "nzRequired", "", 3, "nzSm", "nzXs"], ["nz-input", "", "id", "numberOfUsers", "formControlName", "numberOfUsers"], ["id", "overviewContainer"], ["id", "changeableContentContainer"], ["id", "orderOverview"], ["nzBordered", "", "nzLayout", "horizontal", 3, "nzColumn"], ["nzTitle", "Produkt"], ["nzTitle", "Zahlungsart", 4, "ngIf"], ["nzTitle", "Packet Informationen"], ["nzTitle", "Anzahl der Kassen"], ["nzTitle", "Anzahl monatlicher Belege"], ["nzTitle", "Anzahl der Admins"], ["nzTitle", "Anzahl der User"], ["nzTitle", "Preis", 4, "ngIf"], ["id", "contactOverview"], ["nzTitle", "Name"], ["nzTitle", "Unternehmensname"], ["nzTitle", "Email"], ["nzTitle", "Stra\xDFe"], ["nzTitle", "Hausnummer"], ["nzTitle", "Postleitzahl"], ["nzTitle", "Stadt"], ["nzTitle", "Telefonnummer"], ["nzTitle", "Seriennummer"], ["id", "contactSelectionContainer"], ["id", "contactSelectionRadioButtonContainer", 3, "ngModel", "ngModelChange"], ["nz-radio", "", "nzValue", "email"], ["nz-radio", "", "nzValue", "phone"], ["nz-radio", "", "nzValue", "post"], ["id", "infoBox"], ["id", "checkBoxContainer"], [1, "completeCheckBox"], ["nz-checkbox", "", 1, "checkBox", 3, "ngModel", "ngModelChange"], ["href", "https://google.de", "_target", ""], ["id", "orderButtonContainer"], ["id", "orderButton", "nz-button", "", 3, "click", 4, "ngIf"], [1, "divider"], ["nzTitle", "Zahlungsart"], ["nzTitle", "Preis"], ["id", "orderButton", "nz-button", "", 3, "click"], ["id", "registerContactFormContainer"], ["id", "infoBoxRegister"], ["nzErrorTip", "Bitte einen Unternehmensnamen eingeben!", 3, "nzSm", "nzXs"], ["nzErrorTip", "The input is not valid E-mail!", 3, "nzSm", "nzXs"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Kontaktformular");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RegisterComponent_div_6_Template, 7, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RegisterComponent_div_8_Template, 7, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RegisterComponent_div_9_Template, 74, 45, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RegisterComponent_div_10_Template, 35, 19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RegisterComponent_div_11_Template, 74, 28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RegisterComponent_div_12_Template, 58, 27, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showButtons);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPackages);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showOrdersContactDetailsForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCustomOrderForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showOrderOverview);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showRegisterContactForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputGroupComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_11__["NzCheckboxComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzOptionComponent"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_13__["NzDescriptionsComponent"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_13__["NzDescriptionsItemComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__["NzRadioComponent"]],
        styles: ["div[_ngcontent-%COMP%] {\n  background-color: #fff;\n  \n}\n\n.divider[_ngcontent-%COMP%] {\n  height: 100px;\n}\n\n#headerTextDiv[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.sectionHeader[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: 500;\n  margin: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#buttonDiv[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#buttonDiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 80px;\n  margin: 20px;\n}\n\n#packagesDiv[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-bottom: 30px;\n}\n\n#packagesContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.package[_ngcontent-%COMP%] {\n  margin: 10px;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  transition: transform 0.3s;\n}\n\n.package[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  transform: scale(1.1);\n}\n\n#orderFormPackageInfo[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n#overviewContainer[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n}\n\n#changeableContentContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n}\n\n#orderOverview[_ngcontent-%COMP%] {\n  width: 60%;\n  justify-content: left;\n  margin-right: 20px;\n}\n\n#contactOverview[_ngcontent-%COMP%] {\n  width: 40%;\n  justify-content: left;\n  margin-left: 20px;\n}\n\n#contactSelectionRadioButtonContainer[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n[nz-radio][_ngcontent-%COMP%] {\n  display: block;\n}\n\n#checkBoxContainer[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.completeCheckBox[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.checkBox[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n#orderButtonContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\n#orderButton[_ngcontent-%COMP%] {\n  margin: 30px auto;\n  width: 200px;\n  height: 50px;\n}\n\n#infoBoxRegister[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #f79a7e;\n  color: black;\n  border-radius: 4px;\n  border: 2px solid #f79a7e;\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%] {\n  color: #f79a7e;\n}\n\nform[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  margin: 0;\n}\n\n.ant-form-item[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-bottom: 24px;\n}\n\n#registerContactFormContainer[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n  padding: 50px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0Usc0JBQUE7RUFDQTt1QkFBQTtBQUVKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUVBLFlBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSwwQkFBQTtBQUFKOztBQUdFO0VBQ0UsNENBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBQUFKOztBQUdFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0U7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0FBQUo7O0FBR0U7RUFDRSxnQkFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFKOztBQU9FO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9FO0VBQ0UsZ0JBQUE7QUFKSjs7QUFPRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0U7RUFDRSxjQUFBO0FBSko7O0FBT0U7RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUFKSjs7QUFPRTtFQUNFLFNBQUE7RUFDQSxvQkFBQTtBQUpKOztBQU9FO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSkoiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvKiBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gIH1cblxuICAuZGl2aWRlciB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuXG4gICNoZWFkZXJUZXh0RGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuc2VjdGlvbkhlYWRlciB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgaDIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgI2J1dHRvbkRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgI2J1dHRvbkRpdiBidXR0b24ge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIC8vY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuXG4gICNwYWNrYWdlc0RpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgI3BhY2thZ2VzQ29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnBhY2thZ2Uge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3M7XG4gIH1cblxuICAucGFja2FnZTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG5cbiAgI29yZGVyRm9ybVBhY2thZ2VJbmZvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG5cbiAgI292ZXJ2aWV3Q29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgI2NoYW5nZWFibGVDb250ZW50Q29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgI29yZGVyT3ZlcnZpZXcge1xuICAgIHdpZHRoOiA2MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuXG4gICNjb250YWN0T3ZlcnZpZXcge1xuICAgIHdpZHRoOiA0MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG5cbiAgI2NvbnRhY3RTZWxlY3Rpb25SYWRpb0J1dHRvbkNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuXG4gIFtuei1yYWRpb10ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgI2NoZWNrQm94Q29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG5cbiAgLmNvbXBsZXRlQ2hlY2tCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuY2hlY2tCb3gge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gICNvcmRlckJ1dHRvbkNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgI29yZGVyQnV0dG9uIHtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG5cbiAgI2luZm9Cb3gge1xuICAgIC8vbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gICNpbmZvQm94UmVnaXN0ZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc5YTdlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2Y3OWE3ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIGEge1xuICAgIGNvbG9yOiAjZjc5YTdlO1xuICB9XG5cbiAgZm9ybSB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuYW50LWZvcm0taXRlbSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICB9XG5cbiAgI3JlZ2lzdGVyQ29udGFjdEZvcm1Db250YWluZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogNTBweCAwO1xuICB9Il19 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rm4T");
      /* harmony import */


      var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/layout */
      "yW9e");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/carousel */
      "Etcd");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ant-design/icons-angular/icons */
      "kVq8");
      /* harmony import */


      var _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./ng-zorro-antd.module */
      "PMIT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/common/locales/de */
      "VLs4");
      /* harmony import */


      var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_21__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/register/register.component */
      "XC3f");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_20__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_21___default.a);
      var antDesignIcons = _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_18__;
      var icons = Object.keys(antDesignIcons).map(function (key) {
        return antDesignIcons[key];
      });

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({
        providers: [{
          provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_8__["NZ_I18N"],
          useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_8__["de_DE"]
        }, {
          provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NZ_ICONS"],
          useValue: icons
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__["NzLayoutModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__["NzInputModule"], ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_14__["NzCarouselModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__["NzCheckboxModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_16__["NzCardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_19__["DemoNgZorroAntdModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__["NzLayoutModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__["NzInputModule"], ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_14__["NzCarouselModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__["NzCheckboxModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_16__["NzCardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_19__["DemoNgZorroAntdModule"]]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/register/register.component */
      "XC3f");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
      }, {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map