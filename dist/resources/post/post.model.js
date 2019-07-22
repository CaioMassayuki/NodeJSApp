"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const postSchema = new _mongoose.default.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  createdBy: {
    type: _mongoose.default.SchemaTypes.ObjectId,
    required: true,
    ref: 'user'
  }
}, {
  timestamps: true
});

const Post = _mongoose.default.model('post', postSchema);

exports.Post = Post;