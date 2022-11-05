const express = require('express');

const generateToken = require('../utils/generateToken');
const requiredFields = require('../middlewares/requiredFields');
const isValidEmail = require('../middlewares/isValidEmail');
const isValidPassword = require('../middlewares/isValidPassword');

const { OK } = require('../utils/statusCode');

const router = express.Router();

router.post('/', requiredFields, isValidEmail, isValidPassword, async (_request, response) => {
    const token = generateToken();

    return response.status(OK).json({ token });
});

module.exports = router;
