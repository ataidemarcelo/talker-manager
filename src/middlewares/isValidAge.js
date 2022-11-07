const { BAD_REQUEST } = require('../utils/statusCode');

const isValidAge = (request, response, next) => {
    const { age } = request.body;
    
    if (age < 18) {
        return response
            .status(BAD_REQUEST)
            .json({ message: 'A pessoa palestrante deve ser maior de idade' });
    }

    return next();
};

module.exports = isValidAge;
