const express = require("express");
const controller = require("../app/controller/client-controller");
const client = express.Router();

client.get('/', controller.get);
client.post('/', controller.post);
client.put('/:id', controller.put);
client.delete('/:id', controller.delete);


module.exports = client