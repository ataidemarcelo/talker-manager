const express = require('express');

const generateToken = require('../utils/generateToken');
const {
    validateRequiredFields,
    isValidEmail,
    isValidPassword,
} = require('../middlewares');

const { OK } = require('../utils/statusCode');

const router = express.Router();

router.post('/', 
    validateRequiredFields, 
    isValidEmail, 
    isValidPassword, 
async (_request, response) => {
    const token = generateToken();

    return response.status(OK).json({ token });
});

module.exports = router;
