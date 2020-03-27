const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 * Ex.:
 * localhost:3333/users
 * Rota: localhost:3333/users
 * Recurso: users
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação no backend
  * Cada requisição a uma rota é do tipo GET
  * 
  * POST: Criar uma informação no backend
  * PUT: Alterar uma informação no backend
  * DELETE: Deletar uma informação no backend
  */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Router Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */



app.listen(3333);