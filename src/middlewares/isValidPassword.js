const { BAD_REQUEST } = require('../utils/statusCode');

const isValidPassword = (request, response, next) => {
    const { password } = request.body;
    
    if (!password || password.length < 6) {
        return response
            .status(BAD_REQUEST)
            .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }

    return next();
};

module.exports = isValidPassword;
