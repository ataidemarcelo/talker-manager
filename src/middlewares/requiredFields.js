const { BAD_REQUEST } = require('../utils/statusCode');

const requiredFields = (request, response, next) => {
    const user = request.body;

    const fields = ['email', 'password'];
    for (let index = 0; index < fields.length; index += 1) {
        if (!user[fields[index]]) {
            return response
                .status(BAD_REQUEST)
                .json({ message: `O campo "${fields[index]}" é obrigatório` });
        }
    }

    return next();
};

module.exports = requiredFields;
