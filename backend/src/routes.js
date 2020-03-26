const express = require('express');
const crypto =  require('crypto');
const connection =  require('./database/connection');
const routes =  express.Router();
const OngController =  require('./controllers/OngController');
const IncidentsController =  require('./controllers/IncidenteController');
const ProfileContoller =  require('./controllers/ProfileContoller');
const SessionController =  require('./controllers/SessionController');


routes.post('/session', SessionController.create) ;


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);


routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);
routes.get('/profile' , ProfileContoller.index);

module.exports =  routes;

