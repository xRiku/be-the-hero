const express = require('express');
const crypto = require('crypto');
const connections = require('./database/connections');

const routes = express.Router();


routes.get('/ongs', async (request, response) => {
    const ongs = await connections('ongs').select('*');
    return response.json(ongs);
})

routes.post('/ongs', async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connections('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });

    return response.json({id});
});

module.exports = routes;