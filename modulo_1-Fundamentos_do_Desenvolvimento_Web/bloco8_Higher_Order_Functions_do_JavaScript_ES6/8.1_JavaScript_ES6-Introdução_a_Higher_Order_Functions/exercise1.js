// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (callback) => {
    const employ = {
      id1: callback('Pedro Guerra'), 
      id2: callback('Luiza Drumond'), 
      id3: callback('Carla Paiva'), 
    }
    return employ;
  };

  function employees(param) {
    const email = `{${param}, ${param}@trybe.com}`;
    return email;
  }

  console.log(newEmployees(employees));