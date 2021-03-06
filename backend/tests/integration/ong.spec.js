const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connections');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.latest();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD2",
                email: "contato@ong.com",
                whatsapp: "4700000000",
                city: "Rio do Sul",
                uf: "SC"
            });

        expect(reponse.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});