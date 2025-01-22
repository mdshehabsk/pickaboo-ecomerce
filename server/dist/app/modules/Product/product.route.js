"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const auth_1 = require("../../middleware/auth");
const product_controller_1 = require("./product.controller");
const validateRequest_1 = require("../../middleware/validateRequest");
const product_validation_1 = require("./product.validation");
const multer_1 = __importDefault(require("multer"));
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)();
router.post("/create-product", auth_1.isLogin, upload.array("images"), (0, validateRequest_1.validateBodyRequest)(product_validation_1.ProductValidation.CreateProductZodSchema), (0, validateRequest_1.validateImageFilesRequest)(product_validation_1.ProductValidation.CreateProductimagesZodSchema), product_controller_1.ProductsController.createProduct);
router.get('/get-single-product/:slug', product_controller_1.ProductsController.getSingleProduct);
router.get('/get-products-by-category/:category', product_controller_1.ProductsController.getProductByCategory);
exports.ProductRoutes = router;
