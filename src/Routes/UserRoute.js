const UsuarioController = require('../Controllers/UserController');

module.exports = (app) => {
   app.post('/user', UsuarioController.get);
   app.put('/user/:id', UsuarioController.put);
   app.delete('/user/:id', UsuarioController.delete);
   app.get('/user', UsuarioController.get);
   app.get('/user/:id', UsuarioController.getById);
}

