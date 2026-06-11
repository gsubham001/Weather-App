"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([[792],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _weather_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.component */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class AppComponent {
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-weather");
        }
      },
      dependencies: [_weather_component__WEBPACK_IMPORTED_MODULE_0__.WeatherComponent],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);


const appConfig = {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.provideZoneChangeDetection)({
    eventCoalescing: true
  }), (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.importProvidersFrom)(_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule)]
};

/***/ }),

/***/ 6491:
/*!**************************************!*\
  !*** ./src/app/weather.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherComponent: () => (/* binding */ WeatherComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);





function WeatherComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9)(3, "p")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "City:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p")(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Temperature:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p")(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Condition:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p")(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Humidity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.weatherData.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r1.weatherData.condition + " weather icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.weatherData.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.weatherData.temperature, "\u00B0C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.weatherData.condition, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.weatherData.humidity, "%");
  }
}
function WeatherComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a city and click Search to show weather details.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class WeatherComponent {
  constructor() {
    this.cityName = '';
    this.weatherData = null;
    this.mockWeatherByCity = {
      london: {
        temperature: 14,
        condition: 'Light Rain',
        humidity: 82,
        emoji: '🌧️'
      },
      mumbai: {
        temperature: 32,
        condition: 'Sunny',
        humidity: 68,
        emoji: '☀️'
      },
      tokyo: {
        temperature: 24,
        condition: 'Cloudy',
        humidity: 59,
        emoji: '☁️'
      },
      'new york': {
        temperature: 19,
        condition: 'Breezy',
        humidity: 54,
        emoji: '🌬️'
      },
      cairo: {
        temperature: 36,
        condition: 'Hot and Clear',
        humidity: 28,
        emoji: '🔥'
      }
    };
  }
  searchWeather() {
    const city = this.cityName.trim();
    if (!city) {
      this.weatherData = null;
      return;
    }
    this.weatherData = this.buildWeatherData(city);
  }
  buildWeatherData(city) {
    const normalizedCity = city.toLowerCase();
    const profile = this.mockWeatherByCity[normalizedCity] ?? {
      temperature: 26,
      condition: 'Partly Cloudy',
      humidity: 56,
      emoji: '⛅'
    };
    return {
      city: this.formatCityName(city),
      temperature: profile.temperature,
      condition: profile.condition,
      humidity: profile.humidity,
      icon: this.createEmojiIcon(profile.emoji)
    };
  }
  formatCityName(city) {
    return city.trim().split(/\s+/).filter(Boolean).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }
  createEmojiIcon(emoji) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="160" height="160" rx="40" fill="#f7fbff"/><text x="80" y="92" text-anchor="middle" font-size="88">${emoji}</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }
  static {
    this.ɵfac = function WeatherComponent_Factory(t) {
      return new (t || WeatherComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WeatherComponent,
      selectors: [["app-weather"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 12,
      vars: 3,
      consts: [["emptyState", ""], [1, "weather-card"], [1, "subtitle"], [1, "search-row"], ["type", "text", "name", "cityName", "placeholder", "Enter city name", "autocomplete", "off", 3, "ngModelChange", "ngModel"], ["type", "button", 3, "click"], ["class", "result", 4, "ngIf", "ngIfElse"], [1, "result"], ["title", "Weather icon", 1, "weather-icon", 3, "src", "alt"], [1, "details"], [1, "placeholder"]],
      template: function WeatherComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Weather App");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Type a city name and search for mock weather.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function WeatherComponent_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.cityName, $event) || (ctx.cityName = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeatherComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.searchWeather());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WeatherComponent_div_9_Template, 19, 6, "div", 6)(10, WeatherComponent_ng_template_10_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const emptyState_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.cityName);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.weatherData)("ngIfElse", emptyState_r3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: ["[_nghost-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  padding: 24px;\n  box-sizing: border-box;\n  background: radial-gradient(circle at top, #f8fbff 0%, #dfeeff 45%, #cdddf6 100%);\n  color: #14324a;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.weather-card[_ngcontent-%COMP%] {\n  width: min(100%, 480px);\n  background: rgba(255, 255, 255, 0.92);\n  border: 1px solid rgba(20, 50, 74, 0.08);\n  border-radius: 24px;\n  padding: 32px;\n  box-shadow: 0 18px 50px rgba(20, 50, 74, 0.14);\n  backdrop-filter: blur(10px);\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2rem;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  margin: 8px 0 24px;\n  color: #4f6880;\n}\n\n.search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n\ninput[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  padding: 14px 16px;\n  border: 1px solid #bfd0e3;\n  border-radius: 14px;\n  font-size: 1rem;\n  outline: none;\n  background: #fff;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border-color: #4a84ff;\n  box-shadow: 0 0 0 3px rgba(74, 132, 255, 0.14);\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 14px;\n  padding: 14px 18px;\n  background: linear-gradient(135deg, #2962ff, #4a84ff);\n  color: #fff;\n  font-weight: 700;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.05);\n}\n\n.result[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  padding: 20px;\n  border-radius: 20px;\n  background: #f7fbff;\n}\n\n.weather-icon[_ngcontent-%COMP%] {\n  width: 92px;\n  height: 92px;\n  flex: 0 0 auto;\n}\n\n.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 1rem;\n}\n\n.details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.placeholder[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 18px 20px;\n  border-radius: 18px;\n  background: #f7fbff;\n  color: #5d7188;\n}\n\n@media (max-width: 520px) {\n  .weather-card[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n\n  .search-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .result[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd2VhdGhlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpRkFBaUY7RUFDakYsY0FBYztFQUNkLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQ0FBcUM7RUFDckMsd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOENBQThDO0VBRTlDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscURBQXFEO0VBQ3JELFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AsICNmOGZiZmYgMCUsICNkZmVlZmYgNDUlLCAjY2RkZGY2IDEwMCUpO1xyXG4gIGNvbG9yOiAjMTQzMjRhO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ud2VhdGhlci1jYXJkIHtcclxuICB3aWR0aDogbWluKDEwMCUsIDQ4MHB4KTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjAsIDUwLCA3NCwgMC4wOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICBwYWRkaW5nOiAzMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMThweCA1MHB4IHJnYmEoMjAsIDUwLCA3NCwgMC4xNCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBtYXJnaW46IDhweCAwIDI0cHg7XHJcbiAgY29sb3I6ICM0ZjY4ODA7XHJcbn1cclxuXHJcbi5zZWFyY2gtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgZmxleDogMTtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmQwZTM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNGE4NGZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDc0LCAxMzIsIDI1NSwgMC4xNCk7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgcGFkZGluZzogMTRweCAxOHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOTYyZmYsICM0YTg0ZmYpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjA1KTtcclxufVxyXG5cclxuLnJlc3VsdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMThweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZmJmZjtcclxufVxyXG5cclxuLndlYXRoZXItaWNvbiB7XHJcbiAgd2lkdGg6IDkycHg7XHJcbiAgaGVpZ2h0OiA5MnB4O1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG59XHJcblxyXG4uZGV0YWlscyBwIHtcclxuICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmRldGFpbHMgc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnBsYWNlaG9sZGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMThweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZmJmZjtcclxuICBjb2xvcjogIzVkNzE4ODtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgLndlYXRoZXItY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1yb3cge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5yZXN1bHQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config */ 289);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig).catch(error => console.error(error));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [502], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map