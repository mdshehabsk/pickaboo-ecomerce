"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    // Set cookie if provided
    if (data.cookie) {
        const { name, value, options } = data.cookie;
        res.cookie(name, value, options);
    }
    // Clear cookie if provided
    if (data.clearCookie) {
        res.clearCookie(data.clearCookie);
    }
    const response = {
        success: data.success,
        statusCode: Number(data.statusCode),
        message: data.message,
        data: data.data,
        error: data.error,
    };
    return res.status(response.statusCode).json(response);
};
exports.default = sendResponse;
