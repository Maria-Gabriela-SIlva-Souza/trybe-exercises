// class Superclass {

//   constructor(public isSuper = true) { }

//   protected sayHello() {
//     return  console.log('Olá Mundo')
//   }
// }

// class Subclass extends Superclass { 
//   sayHello2() {
//     return this.sayHello()
//   }
// }

// const myFunc = (object: Subclass) => { return object.sayHello2() }

// // const sup = new Superclass();
// const sub = new Subclass();

// // myFunc(sup);
// myFunc(sub);

class Superclass {

  constructor(public isSuper = true) { }

  sayHello() {
    return  console.log('Olá Mundo')
  }
}

class Subclass extends Superclass {
  // No construtor da _Subclass_, o atributo _isSuper_ deve ser setado como `false`. Você vai precisar utilizar o _super_.
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (object: Superclass) => { 
  object.sayHello()

  console.log(object.isSuper ? 'Super!' : 'Sub!');
}

const sup = new Superclass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);