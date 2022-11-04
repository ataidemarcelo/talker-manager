const express = require('express');

const { findAll, findById } = require('../db/inMemory/talkerDB');
const { OK, NOT_FOUND } = require('../utils/statusCode');

const router = express.Router();

router.get('/', async (_request, response) => {
    const data = await findAll();
    
    return response.status(OK).json(data);
});

router.get('/:id', async (request, response) => {
    const talkerId = request.params.id;
    const data = await findById(Number(talkerId));

    if (data === undefined) {
        return response.status(NOT_FOUND).json({
            message: 'Pessoa palestrante não encontrada',
        });
    }

    return response.status(OK).json(data);
});

module.exports = router;
