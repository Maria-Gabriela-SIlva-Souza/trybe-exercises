const rescue = require('express-rescue');
const { findAddressByCepS } = require('../services/CepS');

const findAddressByCepC = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const address = await findAddressByCepS(cep);

  if (address.error) {
    return next(address.error);
  }

  return res.status(200).json(address);
});

module.exports = {
  findAddressByCepC,
};