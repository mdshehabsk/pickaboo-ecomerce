"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./app/config"));
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const routes_1 = __importDefault(require("./app/routes"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
// Parser
app.use((req, res, next) => {
    if (req.originalUrl === "/api/v1/product/buy-product/stripe/webhook") {
        next();
    }
    else {
        express_1.default.json()(req, res, next);
    }
});
app.use((0, morgan_1.default)("dev"));
// app.use(express.json())
app.use((0, cors_1.default)({
    origin: config_1.default.base_url,
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
// const static_folder = path.join(__dirname, "..", "public");
// app.use(express.static(static_folder));
// application routes
app.use("/api/v1", routes_1.default);
app.get("/", (req, res) => {
    res.send(`<h2>hello from pickaboo</h2>`);
});
// global error handler
app.use(globalErrorHandler_1.default);
// Not Found
app.use(notFound_1.default);
exports.default = app;
