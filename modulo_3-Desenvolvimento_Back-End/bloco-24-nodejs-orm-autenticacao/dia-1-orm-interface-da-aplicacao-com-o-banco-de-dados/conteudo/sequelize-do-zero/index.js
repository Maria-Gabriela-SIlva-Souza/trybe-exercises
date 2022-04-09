const express = require('express');
const StoreControllers = require('./src/controllers/storeControlers');

const app = express();

app.use(express.json());

app.get('/', StoreControllers.getAllStore);
app.get('/:id', StoreControllers.getByIdStore);
app.post('/', StoreControllers.createStore);
app.put('/:id', StoreControllers.updateStore);
app.delete('/:id', StoreControllers.deleteStore);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});