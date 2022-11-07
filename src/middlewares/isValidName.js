const { BAD_REQUEST } = require('../utils/statusCode');

const isValidName = (request, response, next) => {
    const { name } = request.body;
    
    if (name.length < 3) {
        return response
            .status(BAD_REQUEST)
            .json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }

    return next();
};

module.exports = isValidName;
