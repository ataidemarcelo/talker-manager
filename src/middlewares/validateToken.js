const { UNAUTHORIZED } = require('../utils/statusCode');

const validateToken = (request, response, next) => {
    const token = request.headers.authorization;

    if (!token) {
        return response.status(UNAUTHORIZED).json({ message: 'Token não encontrado' });
    }
    if (typeof token !== 'string' || token.length !== 16 || token === undefined) {
        return response.status(UNAUTHORIZED).json({ message: 'Token inválido' });
    }

    return next();
};

module.exports = validateToken;
