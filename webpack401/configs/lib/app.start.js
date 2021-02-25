"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 *
 * dev 配置
 */
var webpack_base_1 = tslib_1.__importDefault(require("./webpack.base"));
var webpack_1 = tslib_1.__importDefault(require("webpack"));
var utils_1 = require("./utils");
var webpackConfigs = new webpack_base_1.default();
var runWebpackCompiler = function (webpackConfigs) { return new Promise(function (resolve, reject) {
    webpack_1.default(webpackConfigs).run(function (error, stats) {
        if (error) {
            reject(error);
            throw Error(error.message);
        }
        var statsJson = stats.toJson();
        if (stats.hasWarnings()) {
            statsJson.warnings.forEach(utils_1.Logger.warn);
        }
        if (stats.hasErrors()) {
            return reject(statsJson.errors);
        }
        resolve(stats);
    });
}); };
var compile = function () {
    return Promise.resolve()
        .then(function () { return utils_1.Logger.info('... 开始编译 ...'); })
        .then(function () { return runWebpackCompiler(webpackConfigs); })
        .then(function (stats) {
        // 这里可以拷贝资源等任务
        return stats;
    })
        .then(function (stats) {
        utils_1.Logger.log(stats.toString({
            colors: true,
            chunks: false,
        }));
        utils_1.Logger.success("=======");
        utils_1.Logger.success("\u7F16\u8BD1\u6210\u529F");
        utils_1.Logger.success("=======");
    })
        .catch(function (errors) {
        utils_1.Logger.error(errors);
    });
};
compile();
//# sourceMappingURL=app.start.js.map