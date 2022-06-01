class Data {
  private _dia: number;
  private _mes: number;
  private _ano: number;

  constructor(dia: number, mes: number, ano: number) {
    if (!this.validateDate(dia, mes, ano)) {
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900;
    } else {
      this._dia = dia;
      this._mes = mes;
      this._ano = ano;
    }
  }


  public get dia(): number {
    return this._dia;
  }
  public set dia(value: number) {
    this._dia = value;
  }
  public get mes(): number {
    return this._mes;
  }
  public set mes(value: number) {
    this._mes = value;
  }
  public get ano(): number {
    return this._ano;
  }
  public set ano(value: number) {
    this._ano = value;
  }

  private validateDate(dia: number, mes: number, ano: number): boolean {
    const dateStr = `${ano}-${mes}-${dia}`;

    if (
      new Date(dateStr).getDate() !== dia &&
      new Date(dateStr).getMonth() !== mes &&
      new Date(dateStr).getFullYear() !== ano 
    ) return false;

    return true;
  }
}

const testDate = new Data(25, 1, 1993);

console.log(testDate);