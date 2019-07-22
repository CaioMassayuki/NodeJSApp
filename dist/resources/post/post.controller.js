"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editPost = exports.getAllPosts = exports.createPost = void 0;

var _post = require("./post.model");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const createPost = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  try {
    const doc = await _post.Post.create({
      title: req.body.title,
      description: req.body.description,
      createdBy: req.headers.authorization
    });
    res.status(201).send({
      data: doc
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

exports.createPost = createPost;

const getAllPosts = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  try {
    const doc = await _post.Post.find().sort({
      updatedAt: -1
    }).populate('createdBy').exec();
    const newDoc = doc.map(item => {
      if (item.createdBy._id == req.headers.authorization) {
        return _objectSpread({}, item._doc, {
          canEdit: true
        });
      }

      return _objectSpread({}, item._doc, {
        canEdit: false
      });
    });
    res.status(200).send({
      data: newDoc
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

exports.getAllPosts = getAllPosts;

const editPost = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  try {
    const doc = await _post.Post.findOneAndUpdate({
      _id: req.body._id,
      createdBy: req.headers.authorization
    }, {
      title: req.body.title,
      description: req.body.description
    }).populate().exec();
    res.status(200).send({
      data: doc
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

exports.editPost = editPost;