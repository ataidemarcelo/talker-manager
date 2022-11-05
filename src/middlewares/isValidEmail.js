const { BAD_REQUEST } = require('../utils/statusCode');

const isValidEmail = (request, response, next) => {
    const { email } = request.body;

    const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    if (!emailRegex.test(email)) {
        return response
            .status(BAD_REQUEST)
            .json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }

    return next();
};

module.exports = isValidEmail;
