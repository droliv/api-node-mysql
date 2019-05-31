const controller = require("../app/controller/notice-controller");
const express = require("express");
const notice = express.Router();

notice.get('/', controller.get);
notice.get('/:id', controller.getone);
notice.post('/', controller.post);
notice.put('/:id', controller.put);
notice.delete('/:id', controller.delete);

module.exports = notice