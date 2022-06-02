export default interface Funcionario {
  registro: string;
  salario: number;
  dataAdmissão: Date;

  gerarRegistro(): string; 
}