interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

class MyClass {
  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    const soma = `${this.myNumber + myParam}`;
    return soma;
  }
}

const newClass = new MyClass(20);

newClass.myFunc(20);