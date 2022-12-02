bodyParser = require('body-parser')
const UsuarioController = require('../Controllers/UserController');
const main = require('../Controllers/MainController')
const jsonParser = bodyParser.json();

module.exports = (app) => {
   app.get('/', main.get);    //Pagina Principal
   //Usuario
   app.post('/user',jsonParser, UsuarioController.post);
   app.put('/user/:id', jsonParser, UsuarioController.put);
   app.delete('/user/:id', UsuarioController.delete);
   app.get('/user', UsuarioController.get);
   app.get('/user/:id', UsuarioController.getById);
}

