const { BAD_REQUEST } = require('../utils/statusCode');

const isValidRate = (request, response, next) => {
    const { talk: { rate } } = request.body;
    
    if (rate < 1 || rate > 5 || !Number.isInteger(rate)) {
        return response
            .status(BAD_REQUEST)
            .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }

    return next();
};

module.exports = isValidRate;
