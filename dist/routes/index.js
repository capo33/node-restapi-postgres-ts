"use strict";
// import { Router } from "express";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
// import * as userController from "../controllers/UserController";
// const router = Router();
// router.get("/users", userController.getAllUsers);
// export default router;
var User_routes_1 = require("./User.routes");
Object.defineProperty(exports, "userRoutes", { enumerable: true, get: function () { return __importDefault(User_routes_1).default; } });
