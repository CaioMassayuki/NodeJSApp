"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _post = require("./post.controller");

const router = (0, _express.Router)();
router.route('/').get(_post.getAllPosts);
router.route('/create').post(_post.createPost).put(_post.editPost);
var _default = router;
exports.default = _default;