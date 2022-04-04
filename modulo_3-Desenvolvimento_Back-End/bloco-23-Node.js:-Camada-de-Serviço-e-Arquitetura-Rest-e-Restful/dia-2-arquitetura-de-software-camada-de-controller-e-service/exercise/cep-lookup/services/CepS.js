const { findAddressByCepM } = require('../model/CepM');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAddressByCepS = async (searchedCep) => {
  // Valida o CEP e em caso dele ser falso, retorna um erro
  if (!CEP_REGEX.test(cep)) {
    return { error: { code: 'invalidData', message: 'CEP inválido' } }
  }
    // Buscamos o CEP através do Model
  const cep = await findAddressByCepM(searchedCep);

  // Caso não encontre nenhum CEP, o service retorna um objeto de erro.
  if (!cep) { return { error: { code: 'notFound', message: 'CEP não encontrado' } };
  }

  // Por fim, retornamos o CEP correto
  return cep;
};

module.exports = {
  findAddressByCepS,
};