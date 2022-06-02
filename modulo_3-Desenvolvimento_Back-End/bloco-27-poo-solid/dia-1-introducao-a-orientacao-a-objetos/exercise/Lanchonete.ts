export class Cliente {
  private _nome: string;

  constructor(nome: string) {
    this._nome = nome;
  }

  public get nome_1(): string {
    return this._nome;
  }
  public set nome_1(value: string) {
    if (!value) {
      throw new Error('O nome precisa existir');
    }
    this._nome = value;
  }
}

export class ItemPedido {
  private _nomeItem: string;
  private _preco: number;

  constructor(nomeItem: string, preco: number) {
    this._nomeItem = nomeItem;
    this._preco = preco;
  }

  public get nomeItem_1(): string {
    return this._nomeItem;
  }
  public set nomeItem_1(value: string) {
    this._nomeItem = value;
  }

  public get preco_1(): number {
    return this._preco;
  }
  public set preco_1(value: number) {
    if (value < 0) {
      throw new Error('O valor deve ser positivo');
    }
    this._preco = value;
  }
}

export class Pedido {
  private _cliente: Cliente;
  private _itemPedido: ItemPedido[] = [];
  private _pagamento: string;
  private _desconto = 0;

  constructor(cliente: Cliente, itemPedido: ItemPedido[], pagamento: string, desconto: number) {
    this._cliente = cliente;
    this._itemPedido = itemPedido;    
    this._pagamento = pagamento;
    this._desconto = desconto;
  }

  public get cliente(): Cliente {
    return this._cliente;
  }
  public set cliente(value: Cliente) {
    this._cliente = value;
  }

  public get itemPedido(): ItemPedido[] {
    return this._itemPedido;
  }
  public set itemPedido(value: ItemPedido[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }
    this._itemPedido = value;
  }

  public get pagamento(): string {
    return this._pagamento;
  }
  public set pagamento(value: string) {
    if (!value) {
      throw new Error('A forma de pagamento deve ser especificada');
    }
    this._pagamento = value;
  }

  public get desconto(): number {
    return this._desconto;
  }
  public set desconto(value: number) {
    this._desconto = value;
  }

  calculateTotal(): number {
    return this.itemPedido.
      reduce((previousValue, item) => {
        const total = previousValue += item.preco_1;

        return total;
      }, 0)
  }

  calculoComDesconto(): number {
    return this.calculateTotal() * (1 - this.desconto);
  }

}