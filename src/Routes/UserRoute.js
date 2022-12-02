bodyParser = require('body-parser')
const UsuarioController = require('../Controllers/UserController');
const jsonParser = bodyParser.json();

module.exports = (app) => {
   app.post('/user',jsonParser, UsuarioController.post);
   app.put('/user/:id', jsonParser, UsuarioController.put);
   app.delete('/user/:id', UsuarioController.delete);
   app.get('/user', UsuarioController.get);
   app.get('/user/:id', UsuarioController.getById);
}

