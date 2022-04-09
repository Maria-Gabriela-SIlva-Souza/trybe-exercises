const { Store } = require('../models');

const getAllStore =  (_req, res) => {
  Store.findAll().then(dados => {
    res.status(200).json(dados);
  }).catch((e) => {
    res.status(500).json({message: 'Deu ruim !'});
  })
};

const getByIdStore =  (req, res) => {
  const { id } = req.params;

  Store.findByPk(id).then(dados => {

    if(!dados || dados === null) return res.status(500).json({message: 'Deu ruim !'});

    res.status(200).json(dados);
  }).catch((e) => {
    res.status(500).json({message: 'Deu ruim !'});
  })
};

const createStore =  (req, res) => {
  const { name, description } = req.body;

  Store.create({ name, description }).then(dados => {

    if(!dados || dados === null) return res.status(500).json({message: 'Deu ruim !'});

    res.status(201).json(dados);
  }).catch((e) => {
    res.status(500).json({message: 'Deu ruim !'});
  })
};

const updateStore =  async (req, res) => {
  try {
    const { name, description } = req.body;
    const { id } = req.params;

    const [ updateStore ] = await Store.update(
      { name, description },
      { where: { id } }
    )

    console.log(updateStore)

    if (!updateStore) return res.status(404).json({message: 'Não achamos o usuário !'});

    res.status(200).json({message: 'Usuário cadastrado !'});


  } catch {
    res.status(500).json({message: 'Deu ruim !'});
  }
};

const deleteStore =  (req, res) => {
  const { id } = req.params

  Store.destroy({ where: { id } }).then(dados => {
    res.status(201).json({message: 'Usuário deletado !'});
  }).catch((e) => {
    res.status(500).json({message: 'Deu ruim !'});
  })
};

module.exports = {
  getAllStore,
  getByIdStore,
  createStore,
  updateStore,
  deleteStore
}