const validateRequiredFields = require('./validateRequiredFields');
const validateToken = require('./validateToken');
const isValidEmail = require('./isValidEmail');
const isValidPassword = require('./isValidPassword');
const isValidName = require('./isValidName');
const isValidAge = require('./isValidAge');
const isValidWatchedAt = require('./isValidWatchedAt');
const isValidRate = require('./isValidRate');

module.exports = {
    validateRequiredFields,
    validateToken,
    isValidEmail,
    isValidPassword,
    isValidName,
    isValidAge,
    isValidWatchedAt,
    isValidRate,
};
