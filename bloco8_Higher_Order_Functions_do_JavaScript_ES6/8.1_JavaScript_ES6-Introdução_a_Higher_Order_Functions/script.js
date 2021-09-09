const person = {
    name: 'Alexandre',
    lastName: 'Pimentel',
    greet: function(callback) {
        console.log(callback());
    }
}

const formalGreeting = () => `Olá, tudo bem?`;
const badModdGreeting = () => `Oi`;
const loveGreeting = () => `Olá, minha querida pessoa!!!`;

// Quando a pessoa encontra outra e vai cumprimentar:

// Se você estiver em uma entrevista de emprego:
person.greet(formalGreeting);

// Se você estiver de mau-humor:
person.greet(badModdGreeting);

// Se você encontrar uma pessoa muito querida
person.greet(loveGreeting);


