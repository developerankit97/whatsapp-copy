"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
function sendResponse(res, response, message) {
    res.status(200).json({ response, message });
}
exports.sendResponse = sendResponse;
