let bruto = 3000;
let inss;
let ir;

if (bruto <= 1556.94){
    inss = bruto * 0.08;
}else if (bruto <= 2594.92){
    inss = bruto * 0.09;
}else if (bruto <= 5189.82){
    inss = bruto * 0.11;
}else{
    inss = 570.88;
}

let base = bruto - inss;

if (base < 1903.98){
    ir = 0;
}else if (base <= 2826.65){
    ir = 0.075 * base - 142.80; 
}else if (base <= 3751.05){
    ir = 0.15 * base - 354.80;
}else if (base <= 4664.68){
    ir = 0.225 * base - 636.13;
}else {
    ir = 0.275 * base - 869.36;
}

let liquido = base - ir;

console.log (liquido);