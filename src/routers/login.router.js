const express = require('express');

const generateToken = require('../utils/generateToken');

const { OK } = require('../utils/statusCode');

const router = express.Router();

router.post('/', async (_request, response) => {
    const token = generateToken();

    return response.status(OK).json({ token });
});

module.exports = router;
