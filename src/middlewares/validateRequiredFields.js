/* eslint-disable */
const { BAD_REQUEST } = require('../utils/statusCode');

const mapper = (objectRequest, mappedObject) => {
    const objectProperties = Object.keys(objectRequest);
    for (let index = 0; index < objectProperties.length; index += 1) {
        const propertyName = objectProperties[index];
        const propertyValue = objectRequest[propertyName];
    
        mappedObject.set(propertyName, propertyValue);
        if (typeof objectRequest[propertyName] === 'object') {
            mapper(objectRequest[propertyName], mappedObject);
        }
    }
};

const validateRequiredFields = (request, response, next) => {
    const pathNameUrl = request.baseUrl.replace('/', '');
    const requiredFields = {
        login: ['email', 'password'],
        talker: ['name', 'age', 'talk', 'watchedAt', 'rate'],
    };

    const mappedObject = new Map();
    mapper(request.body, mappedObject);
    for (let index = 0; index < requiredFields[pathNameUrl].length; index += 1) {
        const field = requiredFields[pathNameUrl][index];
        const value = mappedObject.get(field);
        if (!value && value !== 0) {
            return response
                .status(BAD_REQUEST)
                .json({ message: `O campo "${field}" é obrigatório` });
        }
    }
    return next();
};

module.exports = validateRequiredFields;
