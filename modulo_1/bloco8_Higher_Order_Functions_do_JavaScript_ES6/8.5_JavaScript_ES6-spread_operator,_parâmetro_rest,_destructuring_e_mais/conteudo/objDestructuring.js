const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const {
  name,
  seller
} = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

// Outro truque legal dessa feature é que você pode reatribuir o nome da propriedade que deseja acessar ao declará-la como uma variável. Acompanhe o exemplo abaixo.

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const {
  a: name,
  b: classAssigned,
  c: subject
} = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática


// uma outra situação que podemos usar a desestruturação de objetos é quando queremos passar os valores de um objeto como parâmetros para uma função, como no exemplo abaixo:

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({name,price,seller}) => 
{
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas