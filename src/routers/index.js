const express = require('express');

const talkerRouter = require('./talker.router');
const loginRouter = require('./login.router');

const routers = express.Router();

routers.use('/talker', talkerRouter);
routers.use('/login', loginRouter);

module.exports = routers;
