const express = require('express');

const { findAll } = require('../db/inMemory/talkerDB');
const { OK } = require('../utils/statusCode');

const router = express.Router();

router.get('/', async (_request, response) => {
    const data = await findAll();
    response.status(OK).json(data);
});

module.exports = router;
