"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var webpack_1 = require("webpack");
var html_webpack_plugin_1 = tslib_1.__importDefault(require("html-webpack-plugin"));
var WebpackBaseConfig = /** @class */ (function () {
    function WebpackBaseConfig() {
        this.entry = {
            main: process.cwd() + '/src/main.ts'
        };
        this.mode = 'development';
        this.devtool = 'hidden-source-map';
        this.plugins = [
            new webpack_1.ProgressPlugin({
                entries: true
            }),
            new webpack_1.BannerPlugin({
                banner: 'fullhash:[fullhash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]'
            }),
            new html_webpack_plugin_1.default(),
        ];
    }
    return WebpackBaseConfig;
}());
exports.default = WebpackBaseConfig;
//# sourceMappingURL=webpack.base.js.map