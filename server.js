const express = require('express');
const cors = require('cors');
const { application } = require('express');
const app = express();
const PORT = 3333;

//Rotas
require('./src/Routes/index')(app); 

app.use(cors());
app.use(express.json());
app.listen(PORT,()=>console.log(`Iniciado o api na porta ${PORT}`));

