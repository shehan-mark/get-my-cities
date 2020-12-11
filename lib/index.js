"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getACity = exports.readCities = void 0;
var path = require("path");
/**
 * return an array of cities to its locale if available
 * @param country - will be the country required Eg: lk
 * @param locale - will be the language the text is required Eg: en
 *
 * @returns {Array} collection of cities of a particular country and their ids
 *
 */
var readCities = function (country, locale) { return __awaiter(void 0, void 0, void 0, function () {
    var pre, post, allCities, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pre = locale.toLowerCase();
                post = country.toLowerCase();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Promise.resolve().then(function () { return require(path.join(__dirname, "\\" + post + "\\" + pre + "_" + post + ".js")); })];
            case 2:
                allCities = _a.sent();
                return [2 /*return*/, allCities];
            case 3:
                e_1 = _a.sent();
                console.log('------- error occured while trying to import file -------');
                console.log(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.readCities = readCities;
/**
 * return a particular city for a given number
 * @param country - will be the country required Eg: lk
 * @param locale - will be the language the text is required Eg: en
 * @param id - city id to query
 *
 * @returns {Object} - object of a particular city which contains its id and name
 *
 */
var getACity = function (country, locale, id) { return __awaiter(void 0, void 0, void 0, function () {
    var pre, post, allCities, filteredCity, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pre = locale.toLowerCase();
                post = country.toLowerCase();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Promise.resolve().then(function () { return require(path.join(__dirname, "\\" + post + "\\" + pre + "_" + post + ".js")); })];
            case 2:
                allCities = _a.sent();
                filteredCity = allCities.filter(function (city) {
                    return city.id === id;
                });
                if (filteredCity.length > 0) {
                    return [2 /*return*/, filteredCity[0]];
                }
                else {
                    return [2 /*return*/, {}];
                }
                return [3 /*break*/, 4];
            case 3:
                e_2 = _a.sent();
                console.log('------- error occured while trying to get a city -------');
                console.log(e_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getACity = getACity;
