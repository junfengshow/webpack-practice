"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var tslib_1 = require("tslib");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var figures_1 = tslib_1.__importDefault(require("figures"));
var spread = function (fn) { return function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    // let args = arguments
    return fn([].slice.call(rest));
}; };
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.log = console.log.bind(console);
    Logger.error = spread(function (messages) {
        console.error(chalk_1.default.red.apply(chalk_1.default, [figures_1.default.cross].concat(messages)));
    });
    Logger.info = spread(function (messages) {
        console.info(chalk_1.default.cyan.apply(chalk_1.default, [figures_1.default.info].concat(messages)));
    });
    Logger.warn = spread(function (messages) {
        console.warn(chalk_1.default.yellow.apply(chalk_1.default, [figures_1.default.warning].concat(messages)));
    });
    Logger.success = spread(function (messages) {
        console.log(chalk_1.default.green.apply(chalk_1.default, [figures_1.default.tick].concat(messages)));
    });
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=utils.js.map