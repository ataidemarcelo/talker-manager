const express = require('express');

const talkerRouter = require('./talker.router');

const routers = express.Router();

routers.use('/talker', talkerRouter);

module.exports = routers;
