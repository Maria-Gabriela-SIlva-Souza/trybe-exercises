class Superclass {

  constructor(public isSuper = true) { }

  sayHello() {
    return  console.log('Olá Mundo')
  }
}

class Subclass extends Superclass {  }

const myFunc = (object: Superclass) => { return object.sayHello() }

const sup = new Superclass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);