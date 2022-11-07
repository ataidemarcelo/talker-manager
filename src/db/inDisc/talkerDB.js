const fsUtils = require('../../utils/fsUtils');

const FILE_NAME = 'talker';

const findAll = async () => fsUtils.readData(FILE_NAME);

const findById = async (id) => {
    const talkers = await fsUtils.readData(FILE_NAME);

    const result = talkers.find((talker) => talker.id === id);
    
    return result;
};

const insert = async (talker) => {
    const result = await fsUtils.writeNewData(FILE_NAME, talker);

    return result;
};

module.exports = {
    findAll,
    findById,
    insert,
};