const connections = require('../database/connections');


module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization;

        const incidents = await connections('incidents')
        .where('ong_id', ong_id)
        .select('*');

        console.log(incidents);
        return response.json(incidents);
    }
}