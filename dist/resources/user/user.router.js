"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = require("./user.controller");

const router = (0, _express.Router)();
router.post('/register', _user.createUser);
router.post('/login/', _user.getUser);
var _default = router;
exports.default = _default;