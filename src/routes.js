const express = require('express');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');


const routes = express.Router();

//User Session
routes.post('/sessions', SessionController.store);

//
routes.post('/spot', SpotController.store);


module.exports = routes;