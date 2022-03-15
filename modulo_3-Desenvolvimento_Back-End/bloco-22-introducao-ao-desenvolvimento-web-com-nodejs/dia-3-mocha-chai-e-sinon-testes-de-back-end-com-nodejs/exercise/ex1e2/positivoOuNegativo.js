const positivoOuNegativo = (number) => {
  if(number > 0) return "positivo"
  if(number < 0) return "negativo"
  return "neutro"
}

module.exports = positivoOuNegativo;