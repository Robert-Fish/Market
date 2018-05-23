webpackJsonp([0],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(144);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(147);

var _Home2 = _interopRequireDefault(_Home);

var _reactRouterDom = __webpack_require__(112);

var _Listings = __webpack_require__(148);

var _Listings2 = _interopRequireDefault(_Listings);

var _Details = __webpack_require__(146);

var _Details2 = _interopRequireDefault(_Details);

var _Category = __webpack_require__(145);

var _Category2 = _interopRequireDefault(_Category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(_reactRouterDom.Route, { path: "/:city", component: _Header2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/:city", component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/:city/:category", component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: "/:city/:category/:listings",
            component: _Category2.default
          }),
          _react2.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: "/:city/:category/:listings/:item",
            component: _Details2.default
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/Users/Robert/Documents/PersonalProjects/Market-master/assets/js/sailer/Header.js: Unexpected token (10:0)\n\n   8 |       cityDropdown: false,\n   9 |       selectedCity: \"Brisbane\",\n> 10 | <<<<<<< HEAD\n     | ^\n  11 |       citiesData: [],\n  12 |       lover: \"Post Ad\"\n  13 | =======\n");

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(69);

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(187);

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this));

    _this.loopItems = function () {
      return _this.state.itemsData.map(function (item, i) {
        return _react2.default.createElement(
          "div",
          { className: "item", key: i },
          _react2.default.createElement(
            "div",
            {
              className: "image",
              style: {
                backgroundImage: "url('" + item.images[0] + "')"
              }
            },
            _react2.default.createElement(
              "div",
              { className: "price" },
              item.price
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "details" },
            _react2.default.createElement(
              "h5",
              null,
              item.title,
              " ",
              _react2.default.createElement("i", { className: "far fa-star" })
            ),
            _react2.default.createElement(
              "h6",
              null,
              "Brisbane City, QLD"
            )
          )
        );
      });
    };

    _this.showMakeModelDropDown = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;


      if (match.params.listings == "cars-and-trucks") {
        return _react2.default.createElement(
          "div",
          { className: "make-model-comp" },
          _react2.default.createElement(
            "div",
            { className: "form-group make" },
            _react2.default.createElement(
              "label",
              null,
              "Make"
            ),
            _react2.default.createElement(
              "select",
              { name: "make", className: "make", onChange: _this.handleChange },
              _react2.default.createElement(
                "option",
                { value: "alfa-romeo" },
                "Alfa Romeo"
              ),
              _react2.default.createElement(
                "option",
                { value: "alpina" },
                "Alpina"
              ),
              _react2.default.createElement(
                "option",
                { value: "aston-martin" },
                "Aston Martin"
              ),
              _react2.default.createElement(
                "option",
                { value: "audi" },
                "Audi"
              ),
              _react2.default.createElement(
                "option",
                { value: "bentley" },
                "Bentley"
              ),
              _react2.default.createElement(
                "option",
                { value: "bmw" },
                "BMW"
              ),
              _react2.default.createElement(
                "option",
                { value: "citreon" },
                "Citroen"
              ),
              _react2.default.createElement(
                "option",
                { value: "dacia" },
                "Dacia"
              ),
              _react2.default.createElement(
                "option",
                { value: "ds" },
                "DS"
              ),
              _react2.default.createElement(
                "option",
                { value: "ferrari" },
                "Ferrari"
              ),
              _react2.default.createElement(
                "option",
                { value: "fiat" },
                "Fiat"
              ),
              _react2.default.createElement(
                "option",
                { value: "ford" },
                "Ford"
              ),
              _react2.default.createElement(
                "option",
                { value: "holden" },
                "Holden"
              ),
              _react2.default.createElement(
                "option",
                { value: "honda" },
                "Honda"
              ),
              _react2.default.createElement(
                "option",
                { value: "hyundai" },
                "Hyundai"
              ),
              _react2.default.createElement(
                "option",
                { value: "infiniti" },
                "Infiniti"
              ),
              _react2.default.createElement(
                "option",
                { value: "jaguar" },
                "Jaguar"
              ),
              _react2.default.createElement(
                "option",
                { value: "jeep" },
                "Jeep"
              ),
              _react2.default.createElement(
                "option",
                { value: "kia" },
                "Kia"
              ),
              _react2.default.createElement(
                "option",
                { value: "lamborghini" },
                "Lamborghini"
              ),
              _react2.default.createElement(
                "option",
                { value: "land-rover" },
                "Land Rover"
              ),
              _react2.default.createElement(
                "option",
                { value: "lexus" },
                "Lexus"
              ),
              _react2.default.createElement(
                "option",
                { value: "lotus" },
                "Lotus"
              ),
              _react2.default.createElement(
                "option",
                { value: "maserati" },
                "Maserati"
              ),
              _react2.default.createElement(
                "option",
                { value: "mazda" },
                "Mazda"
              ),
              _react2.default.createElement(
                "option",
                { value: "mclaren" },
                "McLaren"
              ),
              _react2.default.createElement(
                "option",
                { value: "mercedes" },
                "Mercedes"
              ),
              _react2.default.createElement(
                "option",
                { value: "mg" },
                "MG"
              ),
              _react2.default.createElement(
                "option",
                { value: "mini" },
                "Mini"
              ),
              _react2.default.createElement(
                "option",
                { value: "mitsubishi" },
                "Mitsubishi"
              ),
              _react2.default.createElement(
                "option",
                { value: "nissan" },
                "Nissan"
              ),
              _react2.default.createElement(
                "option",
                { value: "peugeot" },
                "Peugeot"
              ),
              _react2.default.createElement(
                "option",
                { value: "porsche" },
                "Porsche"
              ),
              _react2.default.createElement(
                "option",
                { value: "renault" },
                "Renault"
              ),
              _react2.default.createElement(
                "option",
                { value: "rolls-royce" },
                "Rolls-Royce"
              ),
              _react2.default.createElement(
                "option",
                { value: "seat" },
                "Seat"
              ),
              _react2.default.createElement(
                "option",
                { value: "skoda" },
                "Skoda"
              ),
              _react2.default.createElement(
                "option",
                { value: "smart" },
                "Smart"
              ),
              _react2.default.createElement(
                "option",
                { value: "ssangyong" },
                "SsangYong"
              ),
              _react2.default.createElement(
                "option",
                { value: "subaru" },
                "Subaru"
              ),
              _react2.default.createElement(
                "option",
                { value: "suzuki" },
                "Suzuki"
              ),
              _react2.default.createElement(
                "option",
                { value: "tesla" },
                "Tesla"
              ),
              _react2.default.createElement(
                "option",
                { value: "toyota" },
                "Toyota"
              ),
              _react2.default.createElement(
                "option",
                { value: "vauxhall" },
                "Vauxhall"
              ),
              _react2.default.createElement(
                "option",
                { value: "volkswagen" },
                "Volkswagen"
              ),
              _react2.default.createElement(
                "option",
                { value: "volvo" },
                "Volvo"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "form-group model" },
            _react2.default.createElement(
              "label",
              null,
              "Model"
            ),
            _react2.default.createElement(
              "select",
              { name: "model", className: "model", onChange: _this.handleChange },
              _react2.default.createElement(
                "option",
                { value: "2018" },
                "2018"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2017"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2016"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2015"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2014"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2013"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2012"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2011"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2010"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2009"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2008"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2007"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2006"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2005"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2004"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2003"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2002"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2001"
              ),
              _react2.default.createElement(
                "option",
                { value: "2007" },
                "2000"
              )
            )
          )
        );
      }
    };

    _this.handleChange = function (event) {
      var name = event.target.name;
      var value = event.target.type == "checkbox" ? event.target.checked : event.target.value;

      _this.setState(_defineProperty({}, name, value), function () {});
    };

    _this.submitFilters = function () {
      var self = _this;
      var _this$props2 = _this.props,
          match = _this$props2.match,
          location = _this$props2.location,
          history = _this$props2.history;
      var _this$state = _this.state,
          min_price = _this$state.min_price,
          max_price = _this$state.max_price,
          sort = _this$state.sort,
          select_view = _this$state.select_view;

      history.push("/" + match.params.city + "/" + match.params.category + "?min_price=" + min_price + "&max_price=" + max_price + "&sort=" + sort + "&select_view=" + select_view);

      document.location.href = "/" + match.params.city + "/" + match.params.category + "?min_price=" + min_price + "&max_price=" + max_price + "&sort=" + sort + "&select_view=" + select_view;
      var queryParams = _queryString2.default.parse(_this.props.location.search);
    };

    _this.state = {
      itemsData: [],
      min_price: 0,
      max_price: 10000,
      sort: "Newest",
      select_view: "Gallery View"
    };
    return _this;
  }

  _createClass(Category, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      var self = this;
      var queryParams = _queryString2.default.parse(this.props.location.search);
      var min_price = queryParams.min_price,
          max_price = queryParams.max_price,
          sort = queryParams.sort,
          select_view = queryParams.select_view;

      if (queryParams.min_price != undefined) {
        _axios2.default.get("/api/" + match.params.city + "/" + match.params.category + "?min_price=" + min_price + "&max_price=" + max_price + "&sort=" + sort + "&select_view=" + select_view).then(function (response) {
          self.setState({
            itemsData: response.data
          }, function () {
            console.log(self.itemsData);
          });
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        _axios2.default.get("/api/" + match.params.city + "/" + match.params.category).then(function (response) {
          self.setState({
            itemsData: response.data
          }, function () {
            console.log(self.itemsData);
          });
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          match = _props2.match,
          location = _props2.location,
          history = _props2.history;

      return _react2.default.createElement(
        "div",
        { className: "listings-page" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "section",
            { id: "filter" },
            _react2.default.createElement(
              "div",
              { className: "form-group price" },
              _react2.default.createElement(
                "label",
                null,
                "Price"
              ),
              _react2.default.createElement(
                "div",
                { className: "min_max" },
                _react2.default.createElement(
                  "select",
                  {
                    name: "min_price",
                    className: "min",
                    onChange: this.handleChange,
                    value: this.state.min_price
                  },
                  _react2.default.createElement(
                    "option",
                    { value: "0" },
                    "0"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "5000" },
                    "5000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "10000" },
                    "10000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "20000" },
                    "20000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "30000" },
                    "30000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "45000" },
                    "45000"
                  )
                ),
                _react2.default.createElement(
                  "select",
                  {
                    name: "max_price",
                    className: "max",
                    onChange: this.handleChange,
                    value: this.state.max_price
                  },
                  _react2.default.createElement(
                    "option",
                    { value: "10000" },
                    "10000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "20000" },
                    "20000"
                  ),
                  _react2.default.createElement(
                    "option",
                    { value: "45000" },
                    "45000"
                  )
                )
              )
            ),
            this.showMakeModelDropDown(),
            _react2.default.createElement(
              "div",
              { className: "form-group button" },
              _react2.default.createElement(
                "div",
                { className: "primary-btn", onClick: this.submitFilters },
                "Update"
              ),
              _react2.default.createElement(
                "div",
                { className: "reset-btn" },
                "Reset"
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "list-view" },
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { className: "white-box" },
              _react2.default.createElement(
                "section",
                { className: "change-view" },
                _react2.default.createElement(
                  "div",
                  { className: "form-group view-dropdown" },
                  _react2.default.createElement(
                    "select",
                    {
                      name: "select_view",
                      className: "select-view",
                      onChange: this.handleChange,
                      value: this.state.select_view
                    },
                    _react2.default.createElement(
                      "option",
                      { value: "gallery" },
                      "Gallery View"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "list" },
                      "List View"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "list" },
                      "Thumb View"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "form-group sort-dropdown" },
                  _react2.default.createElement(
                    "select",
                    {
                      name: "sort-dropdown",
                      className: "sort",
                      onChange: this.handleChange,
                      value: this.state.sort
                    },
                    _react2.default.createElement(
                      "option",
                      { value: "newest" },
                      "Newest"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "oldest" },
                      "Oldest"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "section",
                { className: "all-items" },
                this.loopItems()
              )
            )
          )
        )
      );
    }
  }]);

  return Category;
}(_react.Component);

exports.default = Category;

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _Gallery = __webpack_require__(149);

var _Gallery2 = _interopRequireDefault(_Gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Details = function (_Component) {
  _inherits(Details, _Component);

  function Details() {
    _classCallCheck(this, Details);

    return _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).apply(this, arguments));
  }

  _createClass(Details, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "details-page" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "white-box" },
            _react2.default.createElement(
              "section",
              { className: "submenu" },
              _react2.default.createElement(
                "div",
                { className: "direction" },
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "prev" },
                  "prev"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "next" },
                  "next"
                )
              ),
              _react2.default.createElement(
                "nav",
                { className: "sub-links" },
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "More Ads by this user"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Print"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Share"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  "Contact Seller"
                )
              )
            ),
            _react2.default.createElement(
              "section",
              { className: "content-area" },
              _react2.default.createElement(
                "div",
                { className: "media-column" },
                _react2.default.createElement(_Gallery2.default, null)
              ),
              _react2.default.createElement(
                "div",
                { className: "details-column" },
                _react2.default.createElement(
                  "div",
                  { className: "date" },
                  "Posted: Feb 28th"
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "title" },
                  "2017 Audi A3 8V MY17 1.4 Tfsi S Tronic COD White 7 Speed Auto S-Tronic Cabriolet"
                ),
                _react2.default.createElement(
                  "h4",
                  { className: "price" },
                  "$45,000"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "more-details" },
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Vin"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "93023210382103"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Mileage"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "85,000 Km"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Transmission"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "Manual"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Drive"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "FWD"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "info" },
                    _react2.default.createElement(
                      "label",
                      null,
                      "Condition"
                    ),
                    _react2.default.createElement(
                      "h5",
                      null,
                      "New"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "description" },
                  _react2.default.createElement(
                    "label",
                    null,
                    "Description"
                  ),
                  _react2.default.createElement(
                    "p",
                    null,
                    "Delivery Kilometres Only. Unwanted Prize. Save Thousands off the new car price. This stunning 2017 Audi A3 1.4 TFSI Automatic Cabriolet features GPS Satellite Navigation, Cruise Control, Reverse Camera, Leather Seats and much more. Be quick as this will not last long!, Delivery Kilometres Only. Unwanted Prize. Save Thousands off the new car price. This stunning 2017 Audi A3 1.4 TFSI Automatic Cabriolet features GPS Satellite Navigation, Cruise Control, Reverse Camera, Leather Seats and much more. Be quick as this will not last long! LOOKING TO FINANCE YOUR NEXT CAR? We can Help! Our lending panel comprises many of the major lenders in Automotive Finance. Fast Approvals allow you to drive away the same day in your new car. Need more info? Ask to talk with one of our friendly On-Site Business Managers, who can run you through repayment options, help you work out the best structure, and tailor a package together for you!"
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Details;
}(_react.Component);

exports.default = Details;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(69);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = __webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.loopCategories = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          history = _this$props.history;

      if (_this.state.categoriesData != "") {
        return _this.state.categoriesData.map(function (category, i) {
          var loopListings = function loopListings() {
            return category.listings.map(function (listing, index) {
              return _react2.default.createElement(
                _reactRouterDom.Link,
                {
                  to: "/" + match.params.city + "/" + category.title + "/" + listing.slug,
                  key: index
                },
                listing.name
              );
            });
          };
          return _react2.default.createElement(
            "div",
            { className: "categories", key: i },
            _react2.default.createElement(
              "a",
              {
                href: "/" + match.params.city + "/" + category.title,
                className: "title"
              },
              category.title
            ),
            _react2.default.createElement(
              "div",
              {
                className: "group-links " + (category.title == "Jobs" || category.title == "Personal" || category.title == "Housing" ? "single-col" : "")
              },
              loopListings()
            )
          );
        });
      } else {
        return "Loading";
      }
    };

    _this.state = {
      categoriesData: ""
    };
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      if (match.params.city == undefined) {
        history.push("/brisbane");
      }

      var self = this;
      _axios2.default.get("/api/" + match.params.city).then(function (response) {
        self.setState({
          categoriesData: response.data
        }, function () {});
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "home" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "h1",
            null,
            "Where buyers meet sellers ",
            _react2.default.createElement("br", null),
            " ",
            _react2.default.createElement("i", { className: "fas fa-shopping-bag" })
          ),
          _react2.default.createElement(
            "section",
            { className: "links" },
            this.loopCategories()
          ),
          _react2.default.createElement(
            "section",
            { className: "trending" },
            _react2.default.createElement("input", {
              type: "text",
              name: "search",
              className: "search",
              placeholder: "Search..."
            }),
            _react2.default.createElement(
              "div",
              { className: "title" },
              "Trending now ",
              _react2.default.createElement("i", { className: "far fa-clock" })
            ),
            _react2.default.createElement(
              "div",
              { className: "trending-tags" },
              _react2.default.createElement(
                "div",
                { className: "tag" },
                "Toyota Corolla"
              ),
              _react2.default.createElement(
                "div",
                { className: "tag" },
                "Apple Macbook Pro 2015"
              ),
              _react2.default.createElement(
                "div",
                { className: "tag" },
                "Tesla Model X"
              ),
              _react2.default.createElement(
                "div",
                { className: "tag" },
                "Iphone X (Black) (128Gb)"
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    return _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).apply(this, arguments));
  }

  _createClass(Listings, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "listings-page" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "section",
            { id: "filter" },
            _react2.default.createElement(
              "div",
              { className: "form-group price" },
              _react2.default.createElement(
                "label",
                null,
                "Price"
              ),
              _react2.default.createElement(
                "div",
                { className: "min-max" },
                _react2.default.createElement(
                  "select",
                  { name: "min-price", className: "min" },
                  _react2.default.createElement(
                    "option",
                    { value: "0" },
                    "0"
                  )
                ),
                _react2.default.createElement(
                  "select",
                  { name: "max-price", className: "max" },
                  _react2.default.createElement(
                    "option",
                    { value: "10000" },
                    "10,000"
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group make" },
              _react2.default.createElement(
                "label",
                null,
                "Make"
              ),
              _react2.default.createElement(
                "select",
                { name: "make", className: "make" },
                _react2.default.createElement(
                  "option",
                  { value: "alfa-romeo" },
                  "Alfa Romeo"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "alpina" },
                  "Alpina"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "aston-martin" },
                  "Aston Martin"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "audi" },
                  "Audi"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "bentley" },
                  "Bentley"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "bmw" },
                  "BMW"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "citreon" },
                  "Citroen"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "dacia" },
                  "Dacia"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "ds" },
                  "DS"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "ferrari" },
                  "Ferrari"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "fiat" },
                  "Fiat"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "ford" },
                  "Ford"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "holden" },
                  "Holden"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "honda" },
                  "Honda"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "hyundai" },
                  "Hyundai"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "infiniti" },
                  "Infiniti"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "jaguar" },
                  "Jaguar"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "jeep" },
                  "Jeep"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "kia" },
                  "Kia"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "lamborghini" },
                  "Lamborghini"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "land-rover" },
                  "Land Rover"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "lexus" },
                  "Lexus"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "lotus" },
                  "Lotus"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "maserati" },
                  "Maserati"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "mazda" },
                  "Mazda"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "mclaren" },
                  "McLaren"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "mercedes" },
                  "Mercedes"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "mg" },
                  "MG"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "mini" },
                  "Mini"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "mitsubishi" },
                  "Mitsubishi"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "nissan" },
                  "Nissan"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "peugeot" },
                  "Peugeot"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "porsche" },
                  "Porsche"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "renault" },
                  "Renault"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "rolls-royce" },
                  "Rolls-Royce"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "seat" },
                  "Seat"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "skoda" },
                  "Skoda"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "smart" },
                  "Smart"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "ssangyong" },
                  "SsangYong"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "subaru" },
                  "Subaru"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "suzuki" },
                  "Suzuki"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "tesla" },
                  "Tesla"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "toyota" },
                  "Toyota"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "vauxhall" },
                  "Vauxhall"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "volkswagen" },
                  "Volkswagen"
                ),
                _react2.default.createElement(
                  "option",
                  { value: "volvo" },
                  "Volvo"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group model" },
              _react2.default.createElement(
                "label",
                null,
                "Model"
              ),
              _react2.default.createElement(
                "select",
                { name: "model", className: "model" },
                _react2.default.createElement(
                  "option",
                  { value: "2008" },
                  "2008"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group button" },
              _react2.default.createElement(
                "div",
                { className: "primary-btn" },
                "Update"
              ),
              _react2.default.createElement(
                "div",
                { className: "reset-btn" },
                "Reset"
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "list-view" },
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { className: "white-box" },
              _react2.default.createElement(
                "section",
                { className: "change-view" },
                _react2.default.createElement(
                  "div",
                  { className: "form-group view-dropdown" },
                  _react2.default.createElement(
                    "select",
                    { name: "select-view", className: "select-view" },
                    _react2.default.createElement(
                      "option",
                      { value: "gallery" },
                      "Gallery View"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "list" },
                      "List View"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "list" },
                      "Thumb View"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "form-group sort-dropdown" },
                  _react2.default.createElement(
                    "select",
                    { name: "sort-dropdown", className: "sort-dropdown" },
                    _react2.default.createElement(
                      "option",
                      { value: "newest" },
                      "Newest"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "oldest" },
                      "Oldest"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "section",
                { className: "all-items" },
                this.loopItems()
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery() {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

    _this.loopCars = function () {
      return _this.state.allImgs.map(function (item, index) {
        return _react2.default.createElement("div", {
          key: index,
          className: "thumb-img",
          onClick: _this.clickedThumb.bind(null, index),
          style: {
            backgroundImage: "url('" + item + "')"
          }
        });
      });
    };

    _this.nextBtn = function () {
      if (_this.state.currentIndex != _this.state.allImgs.length - 1) {
        _this.setState({
          currentIndex: _this.state.currentIndex + 1
        });
      }
    };

    _this.prevBtn = function () {
      if (_this.state.currentIndex != 0) {
        _this.setState({
          currentIndex: _this.state.currentIndex - 1
        });
      }
    };

    _this.clickedThumb = function (index) {
      _this.setState({
        currentIndex: index
      });
    };

    _this.state = {
      currentImg: "",
      allImgs: "",
      currentIndex: 0
    };
    return _this;
  }

  _createClass(Gallery, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var allImgs = ["https://i.ebayimg.com/00/s/NDgwWDYzOQ==/z/3QoAAOSw~YRaeA2i/$_20.JPG", "https://i.ebayimg.com/00/s/NDgwWDYzOQ==/z/A6QAAOSwXoxaeA2g/$_20.JPG", "https://i.ebayimg.com/00/s/NDgwWDYzOQ==/z/0vEAAOSw-RFaeA2j/$_20.JPG", "https://i.ebayimg.com/00/s/NDgwWDYzOQ==/z/L~wAAOSwp7FaeA2e/$_20.JPG"];
      this.setState({
        allImgs: allImgs,
        currentImg: allImgs[this.state.currentIndex]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "gallery" },
        _react2.default.createElement(
          "div",
          { className: "slider" },
          _react2.default.createElement(
            "div",
            { className: "main-image" },
            _react2.default.createElement(
              "div",
              { className: "arrows left-arrow", onClick: this.prevBtn },
              _react2.default.createElement("i", { className: "fas fa-chevron-left" })
            ),
            _react2.default.createElement(
              "div",
              { className: "arrows right-arrow", onClick: this.nextBtn },
              _react2.default.createElement("i", { className: "fas fa-chevron-right" })
            ),
            _react2.default.createElement("div", {
              className: "image-1",
              style: {
                backgroundImage: "url('" + this.state.allImgs[this.state.currentIndex] + "')"
              }
            })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "thumbnails" },
          this.loopCars()
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

exports.default = Gallery;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(125);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ })

},[150]);