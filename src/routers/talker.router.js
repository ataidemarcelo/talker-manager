const express = require('express');

const { findAll, findById, insert, update } = require('../db/inDisc/talkerDB');
const {
    validateRequiredFields,
    validateToken,
    isValidName,
    isValidAge,
    isValidWatchedAt,
    isValidRate,
} = require('../middlewares');
const { OK, NOT_FOUND, CREATED } = require('../utils/statusCode');

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

router.post('/', 
    validateToken,
    validateRequiredFields,
    isValidName,
    isValidAge,
    isValidWatchedAt,
    isValidRate,
async (request, response) => {
    const talker = request.body;
    const result = await insert(talker);

    return response.status(CREATED).json(result);
});

router.put('/:id', 
    validateToken,
    validateRequiredFields,
    isValidName,
    isValidAge,
    isValidWatchedAt,
    isValidRate,
async (request, response) => {
    const { id } = request.params;
    const talker = request.body;

    const result = await update(Number(id), talker);
    
    return response.status(OK).json(result);
});

module.exports = router;
