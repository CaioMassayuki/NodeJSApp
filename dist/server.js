"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _mongoose = require("mongoose");

var _user = _interopRequireDefault(require("./resources/user/user.router"));

var _post = _interopRequireDefault(require("./resources/post/post.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use('/api/user', _user.default);
app.use('/api/post', _post.default);

const start = async () => {
  try {
    await (0, _mongoose.connect)('mongodb://localhost:27017/UserPostApp', {
      useNewUrlParser: true
    });
    app.listen(3000, () => {
      console.log('Listen in port 3000');
    });
  } catch (e) {
    console.error(e);
  }
};

exports.start = start;