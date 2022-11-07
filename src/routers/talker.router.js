const express = require('express');

const { findAll, findById, insert, update, remove, search } = require('../db/inDisc/talkerDB');
const {
    validateRequiredFields,
    validateToken,
    isValidName,
    isValidAge,
    isValidWatchedAt,
    isValidRate,
} = require('../middlewares');
const { OK, NOT_FOUND, CREATED, NO_CONTENT } = require('../utils/statusCode');

const router = express.Router();

router.get('/search', validateToken, async (request, response) => {
    const searchTerm = request.query.q;

    const result = await search(searchTerm);

    return response.status(200).json(result);
});

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

router.delete('/:id', validateToken, async (request, response) => {
    const { id } = request.params;

    await remove(Number(id));

    return response.status(NO_CONTENT).end();
});

module.exports = router;
