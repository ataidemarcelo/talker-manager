const fsUtils = require('../../utils/fsUtils');

const findAll = async () => fsUtils.readData('talker');

module.exports = {
    findAll,
};
