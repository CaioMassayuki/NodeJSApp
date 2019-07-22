"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = exports.createUser = void 0;

var _user = require("./user.model");

const createUser = async (req, res) => {
  try {
    const doc = await _user.User.create({
      name: req.body.name,
      nickname: req.body.nickname
    });
    res.status(201).json({
      data: doc
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

exports.createUser = createUser;

const getUser = async (req, res) => {
  try {
    const doc = await _user.User.findOne({
      name: req.body.name,
      nickname: req.body.nickname
    }).exec();

    if (doc) {
      res.set('Authorization', doc._id);
      return res.status(200).send({
        data: doc
      });
    }

    return res.status(200).send({
      message: 'User not found!'
    });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

exports.getUser = getUser;