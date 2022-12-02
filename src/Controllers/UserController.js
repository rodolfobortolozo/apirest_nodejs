//Array Simulando um Banco de Dados para Testes com Array
let fakeDB = [{
                  "id": 1,
                  "nome": "Rodolfo"
               }];

exports.post = (req, res, next) => {
   fakeDB.push(req.body);
   res.status(201).send(fakeDB);
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota PUT com ID! --> ${id}`);
 };
  
 exports.delete = (req, res, next) => {
   let id = req.params.id;
   fakeDB = fakeDB.filter((db)=>db.id != id);
    res.status(200).send(fakeDB);
 };
  
 exports.get = (req, res, next) => {
    res.status(200).send(fakeDB);
 };
  
 exports.getById = (req, res, next) => {
    let id = req.params.id;
    let fakeDBFiltered = fakeDB.filter((db)=>db.id == id);
    res.status(200).send(fakeDBFiltered);
 };