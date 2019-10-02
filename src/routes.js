const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/Upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');


const routes = express.Router();
const upload = multer(uploadConfig);

//User Session
routes.post('/sessions', SessionController.store);

//
routes.post('/spot', upload.single('thumbnail'), SpotController.store);


module.exports = routes;