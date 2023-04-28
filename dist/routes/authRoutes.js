"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/signup", (req, res) => {
    res.json({ message: "Welcome to the API" });
});
router.post('/login');
exports.default = router;
