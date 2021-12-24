const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// 1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
const customerInfo = (order) => {
  const {name, phoneNumber} = order;
  const {street, number,apartment} = order.address;
  const {deliveryPerson} = order.order.delivery;

  return `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${street}, Nº: ${number}, AP: ${apartment}`
}
customerInfo(order)


// 2. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.order.payment = 50;
  const pizzas = Object.keys(order.order.pizza);
  const {type} = order.order.drinks.coke;
  const {payment} = order.order;

  return `Olá ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${type} é R$ ${payment},00.`
}

console.log(orderModifier(order));