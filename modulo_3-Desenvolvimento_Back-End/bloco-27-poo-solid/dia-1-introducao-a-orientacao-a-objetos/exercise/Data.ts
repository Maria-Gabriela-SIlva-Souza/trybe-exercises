export default class Data {
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

  validateDate(dia: number, mes: number, ano: number): boolean {
    const dateStr = `${ano}-${mes}-${dia}`;

    if (
      new Date(dateStr).getDate() !== dia &&
      new Date(dateStr).getMonth() !== mes &&
      new Date(dateStr).getFullYear() !== ano 
    ) return false;

    return true;
  }

  getMonthName(): string {
    const months = [
      'janeiro', 'fevereiro', 'março', 'abril',
      'maio', 'junho', 'julho', 'agosto',
      'setembro', 'outubro', 'novembro', 'dezembro',
    ];

    return months[this._mes - 1];
  }

  isLeapYear(): boolean {
    return this._ano % 4 === 0;
  }

  compare(date: Data): number {
    const currentDateStr = `${this._ano}-${this._mes}-${this._dia}`;

    const dateStr = `${date._ano}-${date._mes}-${date._dia}`;

    if (new Date(currentDateStr) > new Date(dateStr)) return 1;
    if (new Date(currentDateStr) < new Date(dateStr)) return -1;

    return 0;
  }

  format(formatting: string): string {
    const conditions: boolean[] = [
      (!formatting.match(/a{2,4}/g)), // verifica se possui o ano na formatação
      (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)), // verifica se tem o mês na formatação
      (!formatting.match(/d{2}/g)), // verifica se tem o dia na formatação
    ];

    if (conditions.every((cond) => cond)) {
      throw new Error(`O formato passado é inválido: ${formatting}`);
    }

    const day = this._dia > 9 ? this._dia.toString() : `0${this._dia.toString()}`;
    const month = this.mes > 9 ? this.mes.toString() : `0${this.mes.toString()}`;
    const year = this.ano.toString();

    const dateFormatting = formatting
      .replace('dd', day)
      .replace('mm', month)
      .replace('M', this.getMonthName())
      .replace('aaaa', year)
      .replace('aa', year.substr(-2));

    return dateFormatting;
  }
}