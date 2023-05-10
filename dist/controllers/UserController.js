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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
var database_1 = require("../database");
// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
var getAllUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, database_1.pool.query("SELECT * FROM users")];
            case 1:
                response = _a.sent();
                return [2 /*return*/, res.status(200).json(response.rows)];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                if (error_1 instanceof Error) {
                    return [2 /*return*/, res.status(500).json({
                            message: "Internal Server Error",
                            error: error_1.message,
                        })];
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/, res.status(500).json({
                    message: "Internal Server Error",
                })];
        }
    });
}); };
exports.getAllUsers = getAllUsers;
// @desc    Get a user2
// @route   GET /api/v1/users/:id
// @access  Public
var getUserById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, database_1.pool.query("SELECT * FROM users WHERE id = $1", [id])];
            case 1:
                response = _a.sent();
                return [2 /*return*/, res.status(200).json(response.rows)];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                if (error_2 instanceof Error) {
                    return [2 /*return*/, res.status(500).json({
                            message: "Internal Server Error",
                            error: error_2.message,
                        })];
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/, res.status(500).json({ message: "Internal Server Error" })];
        }
    });
}); };
exports.getUserById = getUserById;
// @desc    Create a user
// @route   POST /api/v1/users
// @access  Public
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, email, response, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name_1 = _a.name, email = _a.email;
                return [4 /*yield*/, database_1.pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name_1, email])];
            case 1:
                response = _b.sent();
                return [2 /*return*/, res.status(200).json({
                        message: "User created Successfully",
                        body: {
                            user: {
                                name: name_1,
                                email: email,
                            },
                        },
                    })];
            case 2:
                error_3 = _b.sent();
                console.log(error_3);
                if (error_3 instanceof Error) {
                    return [2 /*return*/, res.status(500).json({
                            message: "Internal Server Error",
                            error: error_3.message,
                        })];
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/, res.status(500).json({ message: "Internal Server Error" })];
        }
    });
}); };
exports.createUser = createUser;
// @desc    Update a user
// @route   PUT /api/v1/users/:id
// @access  Public
var updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name_2, email, response, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, name_2 = _a.name, email = _a.email;
                return [4 /*yield*/, database_1.pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [name_2, email, id])];
            case 1:
                response = _b.sent();
                return [2 /*return*/, res.status(200).json({
                        message: "User updated Successfully",
                        body: {
                            user: {
                                name: name_2,
                                email: email,
                            },
                        },
                    })];
            case 2:
                error_4 = _b.sent();
                console.log(error_4);
                if (error_4 instanceof Error) {
                    return [2 /*return*/, res.status(500).json({
                            message: "Internal Server Error",
                            error: error_4.message,
                        })];
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/, res.status(500).json({ message: "Internal Server Error" })];
        }
    });
}); };
exports.updateUser = updateUser;
// @desc    Delete a user
// @route   DELETE /api/v1/users/:id
// @access  Public
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, response, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, database_1.pool.query("DELETE FROM users WHERE id = $1", [id])];
            case 1:
                response = _a.sent();
                return [2 /*return*/, res.status(200).json({
                        message: "User deleted Successfully",
                        body: {
                            user: {
                                id: id,
                            },
                        },
                    })];
            case 2:
                error_5 = _a.sent();
                console.log(error_5);
                if (error_5 instanceof Error) {
                    return [2 /*return*/, res.status(500).json({
                            message: "Internal Server Error",
                            error: error_5.message,
                        })];
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/, res.status(500).json({ message: "Internal Server Error" })];
        }
    });
}); };
exports.deleteUser = deleteUser;
