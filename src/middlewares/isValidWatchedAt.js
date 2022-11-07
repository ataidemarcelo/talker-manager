const { BAD_REQUEST } = require('../utils/statusCode');

const isValidWatchedAt = (request, response, next) => {
    const { talk: { watchedAt } } = request.body;

    const dateRegex = /^[0-3]?[0-9]\/[0-3]+[0-9]\/(?:[0-9]{2})?[0-9]{2}$/;
    
    const isDateValid = dateRegex.test(watchedAt);

    if (!isDateValid) {
        return response
            .status(BAD_REQUEST)
            .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }

    return next();
};

module.exports = isValidWatchedAt;
