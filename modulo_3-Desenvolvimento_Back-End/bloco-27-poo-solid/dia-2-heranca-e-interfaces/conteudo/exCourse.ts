interface Contrato {
  assunto: string;
  clausula: string[];
  assinantes: Pessoa[];
  descricao(): void;
}

class Pessoa {
  private _name;
  constructor(name: string) {
    this._name = name;
  }
  get name() { return this._name; }
}

class PessoaFisica extends Pessoa {
  private _cpf;
  constructor(name: string, cpf: string) {
    super(name);
    this._cpf = cpf;
  }
  get cpf() { return this._cpf; }
}

class PessoaJuridica extends Pessoa {
  private _cnpj;
  constructor(name: string, cnpj: string) {
    super(name);
    this._cnpj = cnpj;
  }
}

class ContratoDEVenda implements Contrato {
  private _assinantes: Pessoa[];
  private _clausula: string[];

  constructor() {
    this._assinantes = [];
    this._clausula = [];
  }

  get assinantes() { return [...this._assinantes]; }
  get clausula() { return [...this._clausula]; }
  get assunto() { return "Sales"; }

  sign(signatory: Pessoa) { this._assinantes.push(signatory); }
  addClause(clause: string) {
    if (this._assinantes.length > 0) return;
    this._clausula.push(clause);
  }

  descricao() {
    console.log('--------------------');
    console.log(`Contrato: ${this.assunto}`);
    this.clausula.forEach((clause) => { console.log(`Cláusula: ${clause}`) });
    this.assinantes.forEach((signatory) => { console.log(`Assinado por: ${signatory.name}`) });
    console.log('--------------------\n');
  }
}

const s1 = new ContratoDEVenda();
const pp1 = new PessoaFisica('Tony', '123456789');
const pp2 = new PessoaFisica('Lilly', '987654321');
const lp = new PessoaJuridica('International Sales SA', '23961237162378');

s1.descricao();
s1.addClause('Foo');
s1.addClause('Bar');
s1.descricao();
s1.sign(pp1);
s1.sign(pp2);
s1.descricao();
s1.addClause('Baz');
s1.sign(lp);
s1.descricao();

/*
Saída:
--------------------
Contrato: Sales
--------------------

--------------------
Contrato: Sales
Cláusula: Foo
Cláusula: Bar
--------------------

--------------------
Contrato: Sales
Cláusula: Foo
Cláusula: Bar
Assinado por: Tony
Assinado por: Lilly
--------------------

--------------------
Contrato: Sales
Cláusula: Foo
Cláusula: Bar
Assinado por: Tony
Assinado por: Lilly
Assinado por: International Sales SA
--------------------
 */