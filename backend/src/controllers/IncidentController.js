const connections = require('../database/connections');


module.exports = {
    async index(request, response){
        const incidents = await connections('incidents').select('*');
        return response.json(incidents);
    },


    async create(request, response){
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connections('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({id});
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incidents = await connections('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incidents.ong_id !== ong_id){
            return response.status(401).json({error: 'Operation not permited.'});
        }

        await connections('incidents').where('id', id).delete();

        return response.status(204).send();
        
    }
}